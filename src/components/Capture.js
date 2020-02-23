import React, { useState } from "react";
import Webcam from "react-webcam";

var images = new Array;

const videoConstraints = {
  width: '50%',
  height: '50%',
  // facingMode:  { exact: "environment" }
  facingMode: 'user'
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
        height={'50%'}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={'50%'}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Зробити фото</button>
    </>
  );
};

export default WebcamCapture;