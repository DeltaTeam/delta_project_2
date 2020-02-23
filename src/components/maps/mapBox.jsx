import React, { Component } from "react";
import Map from "./map";
import "./../../styles/map.css";

export default class MapBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markerPosition: {
        lat: this.props.lat,
        lng: this.props.lng
      },
      place: props.place
    };
  }
  parse = () => {
    let el = this.state.place;

    el = el.split(", ");
    return {
      markerPosition: {
        lat: Number(el[0]),
        lng: Number(el[1])
      }
    };
  };

  render() {
    return (
      <div className="mapStyle">
        <Map markerPosition={this.parse()} />
      </div>
    );
  }
}
