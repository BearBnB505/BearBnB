import React from "react";
import Add from "../locationInfo/component/Add";
import LocationIntro from "../locationInfo/component/LocationIntro";
import Amenity from "./component/Amenity";

const AmenityInfoUpdate=()=>{
  return(
    <div className={'BasicInfoFrame'}>
      <div className={'BasicTitle'} style={{marginTop: 30}}>
        νΈμμμ€
      </div>
      <Amenity/>
    </div>
  )
}

export default AmenityInfoUpdate;