import React, {Component} from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      // arrows : true,
    };
    return (
      <div style={{width:500}}>
        <Slider {...settings} >
          <img  src='/hostImg/1.png'/>
          <img  src='/hostImg/1.png'/>
          <img  src='/hostImg/1.png'/>
          <img  src='/hostImg/1.png'/>
          <img  src='/hostImg/1.png'/>
        </Slider>
      </div>
    );
  }
}
