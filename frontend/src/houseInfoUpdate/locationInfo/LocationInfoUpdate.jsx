import React, {useState} from "react";
import HouseIntroForm from "../basicInfo/component/HouseIntroForm";
import HouseName from "../basicInfo/component/HouseName";
import HouseIntro from "../basicInfo/component/HouseIntro";
import Capacity from "../basicInfo/component/Capacity";
import Add from "./component/Add";

const LocationInfoUpdate = () => {
  const [houseIntro, setHouseIntro] = useState(false);


  return(
    <div className={'BasicInfoFrame'}>
      <div className={'BasicTitle'} style={{marginTop:30}}>
        위치
      </div>
      <Add/>
    </div>
  )
}

export default LocationInfoUpdate;