import React from "react";
import Webcam from "react-webcam";

// height = 720;
// width = 1280;


// const videoConstraints = {
//     width: 1280,
//     height: 720,
//     facingMode: "user"
//   };
  
//   const WebcamCapture = () => {
//     const webcamRef = React.useRef(null);
  
//     const capture = React.useCallback(
//       () => {
//         const imageSrc = webcamRef.current.getScreenshot();
//         console.log(imageSrc)
//       },
//       [webcamRef]
//     );
  
//     return (
//       <>
//         <Webcam
//           audio={false}
//           height={720}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           width={1280}
//           videoConstraints={videoConstraints}
//         />
//         <button onClick={capture}>Capture photo</button>
//       </>
//     );
//   };



const WebcamCapture = () => {
  const [deviceId, setDeviceId] = React.useState({});
  const [devices, setDevices] = React.useState([]);

  const handleDevices = React.useCallback(
    mediaDevices =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  React.useEffect(
    () => {
      navigator.mediaDevices.enumerateDevices().then(handleDevices);
    },
    [handleDevices]
  );

  return (
    <>
      {devices.map((device, key) => (
          <div>
            <Webcam audio={false} videoConstraints={{ deviceId: device.deviceId }} />
            {device.label || `Device ${key + 1}`}
          </div>

        ))}
    </>
  );
};

export default WebcamCapture;