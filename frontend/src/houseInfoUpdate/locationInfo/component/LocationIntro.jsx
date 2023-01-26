import React, {useState} from "react";
import AddForm from "./AddForm";
import LocationIntroForm from "./LocationIntroForm";
import $ from "jquery";

const LocationIntro=()=>{
  const [locationIntro, setLocationIntro] = useState(false);

  $(document).ready(function () {
    $('#LocationBtn').on('click', function () {
      $('#LocationIntro').hide();
    });

    $('#LocationFormBtn1').on('click', function () {
      $('#LocationIntro').show();
    });

    $('#LocationFormBtn2').on('click', function () {
      $('#LocationIntro').show();
    });

  });


  return(
    <div>
      <div className={'HNameFrame3'} id={'LocationIntro'}>
        <p className={'HNameLine1'}>지역 설명</p>
        <button className={'BasicInfoBtn'} id={'LocationBtn'} onClick={() => {
          setLocationIntro(!locationIntro)
        }}>{locationIntro ? "취소" : "수정"}</button>
        <p className={'HNameLine3'}>설정되지 않음</p>
      </div>
      {locationIntro && <LocationIntroForm setLocationIntro={setLocationIntro}/>}
      <hr/>
    </div>
  )
}

export default LocationIntro;