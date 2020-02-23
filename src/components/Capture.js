import React, { useState } from "react";
import Webcam from "react-webcam";

var images = new Array;

const videoConstraints = {
  width: '100%',
  height: '100%',
  facingMode:  { exact: "environment" }
  // facingMode: 'user'
};

const WebcamCapture = (props) => {
  const webcamRef = React.useRef(null);
  const sentImg = props.sentImg;
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      sentImg(imageSrc);
      images.push(imageSrc);
    },
    [webcamRef]
  );
    
  return (
    <>
      <Webcam
        audio={false}
        height={'100%'}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={'100%'}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Зробити фото</button>
    </>
  );
};

export default WebcamCapture;