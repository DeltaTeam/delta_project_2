import React from 'react';
import logo from './../resourses/logo.svg';
import './../styles/App.css';
import Capture from './Capture'

import Webcam from "react-webcam";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Capture></Capture>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
