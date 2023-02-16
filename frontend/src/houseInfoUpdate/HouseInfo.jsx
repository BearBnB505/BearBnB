import React from "react";
import {Container, Row} from "react-bootstrap";
import BasicInfoUpdate from "./basicInfo/BasicInfoUpdate";
import './HouseInfo.css'
import LocationInfoUpdate from "./locationInfo/LocationInfoUpdate";
import SpaceInfoUpdate from "./spaceInfo/SpaceInfoUpdate";
import AmenityInfoUpdate from "./amenityInfo/AmenityInfoUpdate";
import {useLocation} from "react-router";

function HouseInfo(){

  const location = useLocation();
  const lodgingNum = location.state.lodgingNum;

  //console.log(lodgingNum);

  return(
    <div className={'HouseInfo'} >
      <BasicInfoUpdate/>
      <LocationInfoUpdate/>
      <SpaceInfoUpdate/>
      <AmenityInfoUpdate/>
    </div>
  )
}

export default HouseInfo
