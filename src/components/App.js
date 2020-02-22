import React from 'react';
import logo from './../resourses/logo.svg';
import './../styles/App.css';
import MapBox from './maps/mapBox'


function App() {
  return (
    <div className="App">
        <MapBox lat = {50.45} lng = {30.53} />
    </div>
  );
}

export default App;
