import React, {useState} from "react";
import HouseIntroForm from "./HouseIntroForm";

const HouseIntro=()=>{
  const [houseIntro, setHouseIntro] = useState(false);

  return (
    <div>
      <div className={'HNameFrame3'}>
        <p className={'HNameLine1'}>숙소 설명</p>
        <button className={'BasicInfoBtn'} onClick={() => {
          setHouseIntro(!houseIntro)
        }}>{houseIntro ? "취소" : "수정"}</button>
        <p className={'HNameLine3'}>중심부에 위치하면서도 조용한 숙소에서 편안한 시간을 보내세요.</p>
      </div>
      {houseIntro && <HouseIntroForm setHouseIntro={setHouseIntro}/>}
      <hr/>
    </div>
  )
}

export default HouseIntro;