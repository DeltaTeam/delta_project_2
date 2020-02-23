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
import MapBox from './maps/mapBox';
import AddPlace from './addPlace/add';

function App() {
  return (
    // <div className="App">
    //     <MapBox lat = {50.45} lng = {30.53} />
    // </div>
    <div>
      <AddPlace/>
    </div>
  );
}

export default App;
