import React from "react";
import Add from "../locationInfo/component/Add";
import LocationIntro from "../locationInfo/component/LocationIntro";
import Amenity from "./component/Amenity";

const AmenityInfoUpdate=()=>{
  return(
    <div className={'BasicInfoFrame'}>
      <div className={'BasicTitle'} style={{marginTop: 30}}>
        편의시설
      </div>
      <Amenity/>
    </div>
  )
}

export default AmenityInfoUpdate;