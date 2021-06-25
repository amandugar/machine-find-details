import { Center, Flex, Button, Box } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { actionCreators, State } from "../state";
import { useDispatch, useSelector } from "react-redux";
import Webcam from "react-webcam";
import "../App.css";
import { bindActionCreators } from "redux";
import { Redirect, useHistory } from "react-router";

const Camera = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const image = useSelector((state: State) => state.image);
  const [width, setWidth] = useState<number>(window.screen.availWidth);
  const [height, setHeight] = useState<number>(window.screen.availHeight);
  const { saveImage } = bindActionCreators(actionCreators, dispatch);
  const webcamRef = useRef<any>(null);
  useEffect(() => {
    function handleResize(): void {
      setWidth(window.screen.availWidth);
      setHeight(window.screen.availHeight);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return (): void => window.removeEventListener("resize", handleResize);
  }, []);
  let videoConstraints: any = {
    aspectRatio: 16 / 9,
  };
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    videoConstraints = {
      ...videoConstraints,
      facingMode: {
        exact: "environment",
      },
    };
  } else {
    videoConstraints = {
      ...videoConstraints,
      facingMode: "user",
    };
  }

  const capture = React.useCallback(() => {
    if (webcamRef) {
      const imageSrc = webcamRef.current.getScreenshot();
      saveImage(imageSrc);
      history.push("/captured-image");
    }
  }, [webcamRef]);

  return (
    <>
      <Flex bg="black" flexFlow="row" height={"100vh"} position="relative">
        <Center>
          <Webcam
            audio={false}
            width={width}
            ref={webcamRef}
            height={height}
            screenshotQuality={1}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        </Center>
        <Box position="absolute" width="full" bottom="20">
          <Button
            padding="8"
            onClick={capture}
            alignItems={"center"}
            borderRadius="full"
          ></Button>
        </Box>
      </Flex>
      {image !== "" && console.log(image)}
    </>
  );
};

export default Camera;
