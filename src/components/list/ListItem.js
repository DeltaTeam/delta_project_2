import React, { Component } from "react";

import Slider from "./listItemComponents/Slider";
import "./../../styles/list/listItem.css";
import ListItemMob from "./listItemComponents/ListItemMob"
import ListItemComp from "./listItemComponents/ListItemComp"

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: false,
      slider: true,
      comment: false
    };
  }

  choseLocation = () => {
    this.setState({
      location: true,
      slider: false,
      comment: false
    })
  };
  choseSlider = () => {
    this.setState({
      location: false,
      slider: true,
      comment: false
    })
  }
  choseComment = () => {
    this.setState({
      location: false,
      slider: false,
      comment: true
    })
  }

  render() {
    console.log(this.props.data)
    return (
      <div>
        <ListItemMob
          location={this.state.location}
          slider={this.state.slider}
          comment={this.state.comment}
          choseLocation={this.choseLocation}
          choseSlider={this.choseSlider}
          choseComment={this.choseComment}
          data={this.props.data} />
        <ListItemComp
          data={this.props.data} />
      </div>
    )
  }

}

export default ListItem;
