import React, {useState} from "react";
import HouseNameForm from "./HouseNameForm";
import $ from "jquery";


function HouseName() {
  const [houseName, setHouseName] = useState(false);

  $(document).ready(function () {
    $('#HouseNameBtn').on('click', function () {
      $('#HouseName').hide();
    });

    $('#HouseNameFormBtn').on('click', function () {
      $('#HouseName').show();
    });

    $('#HouseNameFormBtn2').on('click', function () {
      $('#HouseName').show();
    });

  });


  return (
    <div>
      <div className={'HNameFrame3'} id={'HouseName'}>
        <p className={'HNameLine1'}>숙소 제목</p>
        <button id={'HouseNameBtn'} className={'BasicInfoBtn'}  onClick={() => {
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