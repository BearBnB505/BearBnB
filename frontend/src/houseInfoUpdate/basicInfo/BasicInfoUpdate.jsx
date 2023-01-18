import React from "react";
import HouseName from "./component/HouseName";
import HouseIntro from "./component/HouseIntro";
import Capacity from "./component/Capacity";

function BasicInfoUpdate(){
  return(
    <div className={'BasicInfoFrame'}>
      <div className={'BasicTitle'}>
      숙소 기본 정보
      </div>
      <HouseName/>
      <HouseIntro/>
      <Capacity/>
    </div>
  )
}

export default BasicInfoUpdate