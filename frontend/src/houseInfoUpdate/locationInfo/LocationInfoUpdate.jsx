import React, {useState} from "react";
import HouseIntroForm from "../basicInfo/component/HouseIntroForm";
import HouseName from "../basicInfo/component/HouseName";
import HouseIntro from "../basicInfo/component/HouseIntro";
import Capacity from "../basicInfo/component/Capacity";
import Add from "./component/Add";
import LocationIntro from "./component/LocationIntro";

const LocationInfoUpdate = () => {

  return (
    <div className={'BasicInfoFrame'}>
      <div className={'BasicTitle'} style={{marginTop: 30}}>
        위치
      </div>
      <Add/>
      <LocationIntro/>
    </div>
  )
}

export default LocationInfoUpdate;