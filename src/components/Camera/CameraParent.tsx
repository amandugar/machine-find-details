import { Center, Flex, Button, Box } from "@chakra-ui/react";
import { FC } from "react";
import Webcam from "react-webcam";
const CameraParent: FC<any> = ({
  videoConstraints,
  height,
  width,
  capture,
  webcamRef,
}) => {
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
    </>
  );
};

export default CameraParent;
