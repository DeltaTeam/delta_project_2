import React, { Component } from "react";

import Slider from "./Slider";
import "./../../../styles/list/listItem.css";

function ListItemMob(props) {
  if (props.slider) {
    return (
      <div className="listItemMobBox">
        <div>
          <div className="listItemMob">
            <p>Дата: {props.data[0].date}</p>
          </div>
        </div>

        <Slider file={props.data[0].files} />
        <div className="listItemMob">
          <button onClick={props.choseLocation}>Location</button>
          <p>Номер машини: AA 1111 AA</p>
          <button onClick={props.choseComment}>Comment</button>
        </div>
      </div>
    );
  } else {
    if (props.location) {
      console.log(props.data[0]);
      return (
        <div className="listItemMob listItemMobBox">
          <p>Дата: {props.data[0].date}</p>
          <button onClick={props.choseSlider}>Slider button</button>
          <p>Load location</p>
          <p>Номер машини: AA 1111 AA</p>
          <button onClick={props.choseComment}>Comment</button>
        </div>
      );
    } else {
      return (
        <div className="listItemMob listItemMobBox">
          <p>Дата:{props.data[0].date}</p>
          <button onClick={props.choseSlider}>Slider button</button>
          <p>Номер машини: AA 1111 AA</p>
          <button onClick={props.choseLocation}>Location</button>
          <p>Comment: {props.data[0].comment}</p>
        </div>
      );
    }
  }
  return <p>Error</p>;
}

export default ListItemMob;
