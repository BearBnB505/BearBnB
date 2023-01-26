import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Payment.css'
import {Button} from "react-bootstrap";

const PaymentPage = () => {
  return (
    <div>

      <div className={'PaymentFrame'}>
        <div className={'PaymentArrow'}>
          &#8249;
        </div>
        <div className={'PaymentLine1'}>
          예약요청
        </div>
      </div>

      <hr/>

      <div className={'PaymentLine2'}>
        예약정보
      </div>
      <div className={'PaymentFrame2'}>
        <div className={'PaymentLine3'}>날짜</div>
        <div className={'PaymentLine4'}>3월 21일</div>
        <div>~</div>
        <div>3월 30일</div>
        <button className={'PaymentBtn1'}>수정</button>
      </div>
      <div className={'PaymentFrame2'}>
        <div className={'PaymentLine3'}>게스트</div>
        <div className={'PaymentLine5'}>4명</div>
        <button className={'PaymentBtn1'}>수정</button>
      </div>

      <div className={'PaymentFrame4'}>
        <div className={'PaymentFrame3'}>
          <div className={'PaymentLine2'}>
            결제수단
          </div>
          <div>
            <img className={'paymentLogo'} src="/paymentIcon/visa.svg" alt="visa"/>
            <img className={'paymentLogo'} src="/paymentIcon/amex.svg" alt="visa"/>
            <img className={'paymentLogo'} src="/paymentIcon/bc.svg" alt="visa"/>
          </div>
        </div>
      </div>


      <div className={'PaymentFrame5'}>
        <div>
          <select className="select">
            <option value="credit" disabled selected>신용카드 또는 체크카드</option>
            {/*<option value="credit">신용카드 또는 체크카드</option>*/}
          </select>
        </div>
        <Button className={'PaymentBtn3'} variant="outline-dark">예약요청</Button>
      </div>
    </div>

  )
}

export default PaymentPage