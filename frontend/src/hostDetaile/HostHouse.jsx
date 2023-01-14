import React from "react";
import './hostDetaile.css';

function HostHouse(){
  return(
    <div className={'containerHouse'}>
      <div className={'HouseLine'}>숙박장소</div>
      <div className={'HouseLine2'}>
        <hr/>
        <p>침실</p>
        <p>30개</p>
        <hr/>
      </div>
      <div className={'HouseLine2'}>
        <hr/>
        <p>침대</p>
        <p>30개</p>
        <hr/>
      </div>
      <div className={'HouseLine2'}>
        <hr/>
        <p>욕실</p>
        <p>30개</p>
        <hr/>
      </div>
    </div>

  )
}

export default HostHouse