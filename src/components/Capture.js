import React, { useState } from "react";
import Webcam from "react-webcam";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
var images = new Array;

const videoConstraints = {

  facingMode: { exact: "environment" }
  // facingMode: 'user'
};

const buttonStyle = {
  width: '100%',
  background: '#209bed',
  color: 'white'
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
        marginTop={'0px'}
        marginLeft={'auto'}
        marginRight={'auto'}
        videoConstraints={videoConstraints}
      />
      <Button variant="contained" color="#209bed" style={buttonStyle} onClick={capture}>
        Зробити фото
        </Button>
    </>
  );
};

export default WebcamCapture;