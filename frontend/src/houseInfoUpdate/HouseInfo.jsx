import React from "react";
import {Container, Row} from "react-bootstrap";
import BasicInfoUpdate from "./basicInfo/BasicInfoUpdate";
import './HouseInfo.css'
import LocationInfoUpdate from "./locationInfo/LocationInfoUpdate";
import SpaceInfoUpdate from "./spaceInfo/SpaceInfoUpdate";
import AmenityInfoUpdate from "./amenityInfo/AmenityInfoUpdate";

function HouseInfo(){
  return(
    <div className={'HoseInfo'} >
      <BasicInfoUpdate/>
      <LocationInfoUpdate/>
      <SpaceInfoUpdate/>
      <AmenityInfoUpdate/>
    </div>
  )
}

export default HouseInfo