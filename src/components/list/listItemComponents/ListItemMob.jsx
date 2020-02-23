import React, { Component } from "react";

import Slider from "./Slider";
import "./../../../styles/list/listItem.css";
import Map from "./../../maps/mapBox";

function ListItemMob(props) {
  if (props.slider) {
    return (
      <div className="listItemMobBox">
        <div>
          <div className="listItemMob">
            <p>Дата: {props.data.date}</p>
          </div>
        </div>

        <Slider file={props.data.files} />
        <div className="listItemMob">
          <button onClick={props.choseLocation}>Location</button>
          <p>Номер машини: AA 1111 AA</p>
          <button onClick={props.choseComment}>Comment</button>
        </div>
      </div>
    );
  } else {
    if (props.location) {
      return (
        <div className="listItemMob listItemMobBox">
          <p>Дата: {props.data.date}</p>
          <button onClick={props.choseSlider}>Slider button</button>
          <Map place={props.data.place}></Map>
          <p>Номер машини: AA 1111 AA</p>
          <button onClick={props.choseComment}>Comment</button>
        </div>
      );
    } else {
      return (
        <div className="listItemMob listItemMobBox">
          <p>Дата:{props.data.date}</p>
          <button onClick={props.choseSlider}>Slider button</button>
          <p>Номер машини: AA 1111 AA</p>
          <button onClick={props.choseLocation}>Location</button>
          <p>Comment: {props.data.comment}</p>
        </div>
      );
    }
  }
  return <p>Error</p>;
}

export default ListItemMob;
