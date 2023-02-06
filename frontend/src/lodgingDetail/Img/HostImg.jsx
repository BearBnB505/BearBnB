import React from "react";
import {Button, Container} from "react-bootstrap";
import '../lodgingDetail.css';


function HostImg (props) {

  return (
    <div>
    <div className={'containerGrid'}>
      <img className={'img1'} src="/hostImg/1.png" alt="hostHouse"/>
      <img className={'img2'} src="/hostImg/2.png" alt="hostHouse"/>
      <img className={'img3'} src="/hostImg/3.png" alt="hostHouse"/>
      <img className={'img4'} src="/hostImg/4.png" alt="hostHouse"/>
      <img className={'img5'} src="/hostImg/5.png" alt="hostHouse"/>
      <Button className={'HouseImgBtn'} variant="dark">사진 모두보기</Button>
    </div>
      <hr/>
    </div>
  )
}

export default HostImg;