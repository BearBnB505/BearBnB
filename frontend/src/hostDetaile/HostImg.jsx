import React from "react";
import {Container} from "react-bootstrap";
import './hostDetaile.css';


function HostImg () {
  return (
    <div className={'containerGrid'}>
      <img className={'img1'} src="/hostImg/1.png" alt="hostHouse"/>
      <img className={'img2'} src="/hostImg/2.png" alt="hostHouse"/>
      <img className={'img3'} src="/hostImg/3.png" alt="hostHouse"/>
      <img className={'img4'} src="/hostImg/4.png" alt="hostHouse"/>
      <img className={'img5'} src="/hostImg/5.png" alt="hostHouse"/>
    </div>
  )
}

export default HostImg;