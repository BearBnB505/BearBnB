import React, {useState} from "react";
import HouseIntroForm from "../../basicInfo/component/HouseIntroForm";
import AddForm from "./AddForm";
import $ from "jquery";

const Add = () => {
  const [addIntro, setAddIntro] = useState(false);

  $(document).ready(function () {
    $('#AddBtn').on('click', function () {
      $('#Add').hide();
    });

    $('#AddFormBtn1').on('click', function () {
      $('#Add').show();
    });

    $('#AddFormBtn2').on('click', function () {
      $('#Add').show();
    });
  });

  return(
    <div>
      <div className={'HNameFrame3'} id={'Add'}>
        <p className={'HNameLine1'}>주소</p>
        <button className={'BasicInfoBtn'} id={'AddBtn'} onClick={() => {
          setAddIntro(!addIntro)
        }}>{addIntro ? "취소" : "수정"}</button>
        <p className={'HNameLine3'}>82 Yeongseondong 2(i)-ga, Yeongdo-gu, Busan, South Korea</p>
      </div>
      {addIntro && <AddForm setAddIntro={setAddIntro}/>}
      <hr/>
    </div>
  )
}

export default Add;