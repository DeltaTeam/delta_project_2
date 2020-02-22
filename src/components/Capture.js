import React from "react";
import Webcam from "react-webcam";
import NonFoundPage from "./error/404";

// height = 720;
// width = 1280;
var images = new Array;

const videoConstraints = {
  width: '50%',
  height: '50%',
  facingMode:  { exact: "environment" }
};
 
const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
 
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      images.push(imageSrc);
      console.log(images.length)
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
      {/* <iframe src="https://my-website.com/page-with-webcam" allow="camera; microphone;"/> */}
      <button onClick={capture}>Capture photo</button>
    </>
  );
};

// const videoConstraints = {
//     width: 1280,
//     height: 720,
//     facingMode: "user"
//   };
  
// const WebcamCapture = () => {
//   const webcamRef = React.useRef(null);

// const capture = React.useCallback(
//   () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     console.log(imageSrc)
//   },
//   [webcamRef]
// ); 
  
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

// ###################################################

// const WebcamCapture = () => {
//   const [deviceId, setDeviceId] = React.useState({});
//   const [devices, setDevices] = React.useState([]); 
 

//   const handleDevices = React.useCallback(
//     mediaDevices =>{
//       setDevices(mediaDevices.filter(({ kind ,}) => kind === "videoinput"))
//       // const imageSrc = mediaDevices.current.getScreenshot()
//       // console.log(imageSrc)
//     },
//     [setDevices]
//   );

//   // const webcamRef = React.useRef(null);

//   // const capture = React.useCallback(
//   //   () => {
//   //     var c = document.getElementById('camera');
//   //     var t = c.getContext('2d');
//   //     // window.open('', document.getElementById('camera').toDataURL());
//   //     // print(img);
//   //   },
//   //   []
//   // ); 

//     function log (msg){
//       console.log(msg);
//     }

//   const capture = () => navigator.mediaDevices.enumerateDevices()
//   .then(function(devices) {
//   if(devices[1]){
//     log(devices[1].getScreenshot());
//     return devices[1];
//   }
//     return null;
//   });

//   React.useEffect(
//     () => {
//       navigator.mediaDevices.enumerateDevices().then(handleDevices);
//     },
//     [handleDevices]
//   );

//   return (
//     <>
//       {
//       devices.map((device, key) => {
//         if (key === 1){
//         return(
//           <div>
//             <Webcam id='camera' audio={false} videoConstraints={{ deviceId: device.deviceId }} />
//             <button onClick={capture}>Capture photo</button>
//           </div>
//           )
//         }
//       }
//       )
//         }
//     </>
//   );
// };


//###################################################

export default WebcamCapture;