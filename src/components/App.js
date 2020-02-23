import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'

import List from './list/List'
import NotFound from './error/404'
import Header from './header/Header'
import './../styles/App.css';
// import WebcamCapture from './Capture'
import Camera from './Camera'

import Webcam from "react-webcam";

// var printImages = (imgs) => {
//   console.log(imgs.map(img => img))
// }


function App() {
  return (
    <header className="App-header">
      <Camera></Camera>
    </header>
  );
}

export default App;
