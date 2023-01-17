import React from "react";
import {Button, Dropdown} from "react-bootstrap";

function Payment(){
  return(
    <div>
      <hr/>
      <div className={''}>요금을 확인하려면 날짜를 입력하세요.</div>
      <div id="btn_group">
        <button id="test_btn1">테스트1</button>
        <button id="test_btn2">테스트2</button>
      </div>
      <Dropdown>
      <Dropdown.Toggle id="test_btn3">테스트2</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button className={'paymentBtn'} variant="primary">예약 가능 여부 보기</Button>

      <hr/>
    </div>
  )
}

export default Payment;