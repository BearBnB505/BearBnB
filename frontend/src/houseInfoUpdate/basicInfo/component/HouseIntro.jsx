import React, {useState} from "react";
import HouseIntroForm from "./HouseIntroForm";
import $ from "jquery";

const HouseIntro=()=>{
  const [houseIntro, setHouseIntro] = useState(false);

  $(document).ready(function () {
    $('#HouseIntroBtn').on('click', function () {
      $('#HouseIntro').hide();
    });

    $('#HouseIntroFormBtn').on('click', function () {
      $('#HouseIntro').show();
    });

    $('#HouseIntroFormBtn2').on('click', function () {
      $('#HouseIntro').show();
    });
  });

  return (
    <div>
      <div className={'HNameFrame3'} id={'HouseIntro'}>
        <p className={'HNameLine1'}>숙소 설명</p>
        <button className={'BasicInfoBtn'} id={'HouseIntroBtn'} onClick={() => {
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