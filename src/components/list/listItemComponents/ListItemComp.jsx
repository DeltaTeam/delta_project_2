import React, { Component } from "react";

import Slider from "./Slider";

function ListItemComp(props) {
  console.log(props.data[0]);
  return (
    <div className="listItemCompBox">
      <div className="listItemCompFirstBlock">
        <p>Дата: {props.data[0].date}</p>
        <p>Номер машини: AA 1111 AA</p>
      </div>
      <Slider className="listItemComp" file={props.data[0].files} />
      <div className="listItemComp">
        <p>Load location</p>
        <p>Location name</p>
        <p className="listItemCompComment">Comment: {props.data[0].comment}</p>
      </div>
    </div>
  );
}

export default ListItemComp;
