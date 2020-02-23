import React, { Component } from "react";
import Map from "./map";

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
      <div>
        <Map markerPosition={this.parse()} />
      </div>
    );
  }
}
