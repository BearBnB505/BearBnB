import React from "react";
import '../lodgingDetail.css';

function HostHouse(props){
  return(
    <div>
      <hr/>
    <div className={'containerHouse'}>
      <div className={'HouseLine'}>숙박장소</div>
      <div className={'HouseLine2'}>
        <hr/>
        <p>침실</p>
        <p>{props.bedroomNum}</p>
        <hr/>
      </div>
      <div className={'HouseLine2'}>
        <hr/>
        <p>침대</p>
        <p>{props.bedNum}</p>
        <hr/>
      </div>
      <div className={'HouseLine2'}>
        <hr/>
        <p>욕실</p>
        <p>{props.bathroomNum}</p>
        <hr/>
      </div>
    </div>
    </div>

  )
}

export default HostHouse