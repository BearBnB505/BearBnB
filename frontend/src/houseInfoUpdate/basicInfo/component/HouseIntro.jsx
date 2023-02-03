import React, {useEffect, useState} from "react";
import HouseIntroForm from "./HouseIntroForm";
import $ from "jquery";
import axios from "axios";
import {useLocation} from "react-router";

const HouseIntro = () => {
  const [houseIntro, setHouseIntro] = useState(false);
  const [introLodging, setIntroLodging] = useState('')
  const location = useLocation();
  const lodgingNum = location.state.lodgingNum;



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

    $('#HouseIntroFormBtn3').on('click', function () {
      $('#HouseIntro').show();
    });
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.put('http://localhost:8080/CallLodgingList/',null,{params: {lodgingNum: lodgingNum}})
      .then((req) => {
        const {data} = req;
        setData(data);
        setIntroLodging(data[0].introLodging)
      })
      .catch((err) => {
        console.log("통신 오류");
      })
  }, []);

  return (
    <div>
      <div className={'HNameFrame3'} id={'HouseIntro'}>
        <p className={'HNameLine1'}>숙소 설명</p>
        <button className={'BasicInfoBtn'} id={'HouseIntroBtn'} onClick={() => {
          setHouseIntro(!houseIntro)
        }}>{houseIntro ? "취소" : "수정"}</button>

        <p className={'HNameLine3'}>{introLodging}</p>

      </div>
      {houseIntro && <HouseIntroForm setHouseIntro={setHouseIntro} setIntroLodging={setIntroLodging} introLodging={introLodging}/>}
      <hr/>
    </div>
  )
}

export default HouseIntro;