import React, {useState} from "react";
import {Button} from "react-bootstrap";
import axios from "axios";
import {useLocation} from "react-router";


const CapacityForm = (props) => {
  const location = useLocation();
  const lodgingNum = location.state.lodgingNum;


  function GuestPlus() {
    props.setPeopleNum(props.peopleNum + 1);
  }

  function GuestMinus() {
    if (props.peopleNum <= 1) {
      props.setPeopleNum(1);
    } else {
      props.setPeopleNum(props.peopleNum  - 1);
    }
  }

  function CapacityBtn(){

    props.setCapacity(!props.capacity)
    axios.put('http://localhost:8080/UpdateCapacity', null, {params: ({lodgingNum: lodgingNum, peopleNum: props.peopleNum})})
      .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }


  return (
    <div>
      <div className={'HNameFrame8'} id={'HouseIntro'}>
        <p className={'HNameLine1'}>수용 가능 인원</p>
        <button className={'BasicInfoBtn2'} id={'BNRrFormBtn1'} onClick={() => {
          props.setCapacity(!props.capacity)
        }}>&#88;</button>
      </div>

      <div className={'HNameFrame4'}>
        <p className={'HNameLine1'} style={{position: "relative", top: 8}}>총 인원</p>
        <button className={'BasicInfoBtn4'} style={{position: "relative", right: -8}} onClick={GuestMinus}>
          <div style={{position: "relative", top: -3}}>-</div>
        </button>
        <div style={{textAlign: "center", position: "relative", top: 5, right: -3}}>{props.peopleNum}</div>
        <button className={'BasicInfoBtn4'} style={{position: "relative", right: -8}} onClick={GuestPlus}>
          <div style={{position: "relative", top: -3}}>+</div>
        </button>
      </div>

      <hr/>

      <div className={'HNameFrame2'}>
        <button className={'BasicInfoBtn'} id={'BNRrFormBtn2'} style={{width:70}} onClick={() => {props.setCapacity(false)}}>취소</button>
        <Button className={'BasicInfoBtn3'} id={'BNRrFormBtn3'} variant="outline-dark" onClick={CapacityBtn}>저장하기</Button>
      </div>
      <hr/>
    </div>
  )
}


export default CapacityForm;