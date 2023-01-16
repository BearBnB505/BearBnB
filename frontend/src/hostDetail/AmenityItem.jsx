import React from "react";
import './hostDetail.css';

function AmenityItem(img, title){
  let AmenityItemArr = [];
  for(let i = 0; i<10; i++){
    AmenityItemArr.push(
      <div className={'AmenityItem'} >
        <img className={'AmentityImg'} src={`/houseIcon/${img}`} alt={'AmenityIcon'}></img>
        <div className={'AmenityTitle'}>{title}</div>
      </div>
    )
  }
  return AmenityItemArr;
}

export default AmenityItem