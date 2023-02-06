import React, {useEffect, useState} from "react";
import HouseNameForm from "./HouseNameForm";
import $ from "jquery";
import axios from "axios";
import {Link} from "react-router-dom";
import MainContents from "../../../Main/MainContents";
import {useLocation} from "react-router";


function HouseName(props) {
  const [houseName, setHouseName] = useState(false);
  const [lodgingName, setLodgingName] = useState('');
  const location = useLocation();
  const lodgingNum = location.state.lodgingNum;

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

    $('#NameUpdateBtn').on('click', function () {
      $('#HouseName').show();
    });

  });


  const [data, setData] = useState([]);

  useEffect(() => {
    axios.put('http://localhost:8080/CallLodgingList/',null,{params: {lodgingNum: lodgingNum}})
      .then((req) => {
        const {data} = req;
        setData(data);
        setLodgingName(data[0].lodgingName)
      })
      .catch((err) => {
        console.log("통신 오류");
      })
  }, []);


  return (
    <div>
      <div className={'HNameFrame3'} id={'HouseName'}>
        <p className={'HNameLine1'}>숙소명</p>
        <button id={'HouseNameBtn'} className={'BasicInfoBtn'} onClick={() => {
          setHouseName(!houseName)
        }}>{houseName ? "취소" : "수정"}</button>

        <p className={'HNameLine3'}>{lodgingName}</p>

      </div>
      {houseName && <HouseNameForm setHouseName={setHouseName} lodgingName={lodgingName} setLodgingName={setLodgingName}/>}
      <hr/>
    </div>
  )
}


//
//


export default HouseName;