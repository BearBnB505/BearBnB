import React, {useEffect, useState} from "react";
import HouseNameForm from "./HouseNameForm";
import $ from "jquery";
import axios from "axios";
import {Link} from "react-router-dom";
import MainContents from "../../../Main/MainContents";


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


  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/lodgingList')
      .then((req) => {
        const {data} = req;
        setData(data);
      })
      .catch((err) => {
        console.log("통신 오류");
      })
  }, []);



  return (
    <div>
      <div className={'HNameFrame3'} id={'HouseName'}>
        <p className={'HNameLine1'}></p>
        <button id={'HouseNameBtn'} className={'BasicInfoBtn'}  onClick={() => {
          setHouseName(!houseName)
        }}>{houseName ? "취소" : "수정"}</button>


        {
          data.map((item) => {
            return (
              <p className={'HNameLine3'}>{item.addr}</p>
            )
          })
        }







      </div>
      {houseName && <HouseNameForm setHouseName={setHouseName}/>}
      <hr/>
    </div>
  )
}




//
//



export default HouseName;