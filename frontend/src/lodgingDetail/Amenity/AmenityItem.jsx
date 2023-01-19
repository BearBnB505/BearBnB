import React from "react";
import '../lodgingDetail.css';

function AmenityItem(img, title){
  let AmenityItemArr = [];
  for(let i = 0; i<10; i++){
    AmenityItemArr.push(
      <div className={'AmenityItem'} >
        <img className={'AmentityImg'} src={`/concept/${img}`} alt={'AmenityIcon'}></img>
        <div className={'AmenityTitle'}>{title}</div>
      </div>
    )
  }
  return AmenityItemArr;
}

export default AmenityItem