import React, {useEffect, useState} from "react";
import HouseIntroForm from "../../basicInfo/component/HouseIntroForm";
import AddForm from "./AddForm";
import $ from "jquery";
import axios from "axios";

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

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/CallLodgingList')
      .then((req) => {
        const {data} = req;
        setData(data);
      })
      .catch((err) => {
        console.log("통신 오류");
      })
  }, []);

  return(
    <div>
      <div className={'HNameFrame3'} id={'Add'}>
        <p className={'HNameLine1'}>주소</p>
        <button className={'BasicInfoBtn'} id={'AddBtn'} onClick={() => {
          setAddIntro(!addIntro)
        }}>{addIntro ? "취소" : "수정"}</button>
        {
          data.map((item) => {
            return (
            <p className={'HNameLine3'}>{item.addr}</p>
            )
          })
        }
      </div>
      {addIntro && <AddForm setAddIntro={setAddIntro}/>}
      <hr/>
    </div>
  )
}

export default Add;