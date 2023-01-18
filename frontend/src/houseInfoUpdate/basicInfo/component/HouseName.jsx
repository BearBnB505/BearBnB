import React, {useState} from "react";
import HouseNameForm from "./HouseNameForm";

function HouseName() {
  const [houseName, setHouseName] = useState(false);

  return (
    <div>
      <div className={'HNameFrame3'}>
        <p className={'HNameLine1'}>숙소 제목</p>
        <button className={'BasicInfoBtn'} onClick={() => {
          setHouseName(!houseName)
        }}>{houseName ? "취소" : "수정"}</button>
        <p className={'HNameLine3'}>러브하우스</p>
      </div>
      {houseName && <HouseNameForm setHouseName={setHouseName}/>}
      <hr/>
    </div>
  )
}




//
//



export default HouseName;