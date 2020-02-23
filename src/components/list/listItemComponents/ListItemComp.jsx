import React, { Component } from "react";

import Slider from "./Slider";
import Map from "./../../maps/mapBox";

function ListItemComp(props) {
  console.log(props.data.place);
  return (
    <div className="listItemCompBox">
      <div className="listItemCompFirstBlock">
        <p>Дата: {props.data.date}</p>
        <p>Номер машини: AA 1111 AA</p>
      </div>
      <Slider className="listItemComp" file={props.data.files} />
      <div className="listItemComp">
        <Map place={props.data.place}></Map>
        <p>Location name</p>
        <p className="listItemCompComment">Comment: {props.data.comment}</p>
      </div>
    </div>
  );
}

export default ListItemComp;
