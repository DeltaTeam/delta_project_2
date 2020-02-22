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
import WebcamCapture from './Capture'

import Webcam from "react-webcam";



function App() {
  return (
    <header className="App-header">
      <WebcamCapture></WebcamCapture>
    </header>
  );
}

export default App;
