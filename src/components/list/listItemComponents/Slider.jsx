import React from "react";
import { Slide } from "react-slideshow-image";

import "./../../../styles/list/sliderStyle.css";

const slideImages = [
  "./../../../resourses/img.JPG",
  "images/slide_3.jpg",
  "images/slide_4.jpg"
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {}
};

const Slideshow = (props) => {
  const photos = [`https://modgames.net/_ld/77/62956552.jpg`];
  console.log(props.file[0]);
  return (
    <div className="bigSliderContainer">
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <img className="slideImg" src={`${photos[0]}`}></img>
          </div>
          <div className="each-slide">
            <img className="slideImg" src={`${photos[0]}`}></img>
          </div>
          <div className="each-slide">
            <img className="slideImg" src={`${photos[0]}`}></img>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Slideshow;
