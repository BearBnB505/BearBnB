import React, {useState} from "react";
import HouseName from "./component/HouseName";
import HouseIntro from "./component/HouseIntro";
import Capacity from "./component/Capacity";
import HousePicture from "./component/HousePicture";

function BasicInfoUpdate(){

    return(
        <div className={'BasicInfoFrame'}>
            <div className={'BasicTitle'} style={{marginTop: "100px"}}>
                <p style={{fontSize:"30px"}}>숙소 기본 정보</p>
            </div>
            <HousePicture/>
            <HouseName/>
            <HouseIntro/>
            <Capacity/>
        </div>
    )
}

export default BasicInfoUpdate