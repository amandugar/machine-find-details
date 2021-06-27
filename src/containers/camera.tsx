import { useCallback, useEffect, useRef, useState } from "react";
import { actionCreators } from "../state";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useHistory } from "react-router";
import MobileLaptop from "../utils/MobileLaptop";
import CameraParent from "../views/Camera";

const Camera = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [width, setWidth] = useState<number>(window.screen.availWidth);
  const [height, setHeight] = useState<number>(window.screen.availHeight);
  const { saveImage } = bindActionCreators(actionCreators, dispatch);
  const webcamRef = useRef<any>(null);
  useEffect(() => {
    const handleResize = (): void => {
      setWidth(window.screen.availWidth);
      setHeight(window.screen.availHeight);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return (): void => window.removeEventListener("resize", handleResize);
  }, []);
  const videoConstraints = MobileLaptop();
  const capture = useCallback((): void => {
    if (webcamRef) {
      const imageSrc = webcamRef.current.getScreenshot();
      saveImage(imageSrc);
      history.push("/captured-image");
    }
  }, [webcamRef]);

  return (
    <CameraParent
      videoConstraints={videoConstraints}
      height={height}
      width={width}
      capture={capture}
      webcamRef={webcamRef}
    />
  );
};

export default Camera;
