import React from "react";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";

const AddForm = (props) => {
  return (
    <div>
      <div className={'HNameFrame1'}>
        <p className={'HNameLine1'}>주소</p>
        <button className={'BasicInfoBtn2'} onClick={() => {
          props.setAddIntro(false)
        }}>&#88;</button>
      </div>
      <div className={'AddFormFrameBox'}>
        <div>주</div>
        <div style={{position:"relative", right:90}}>시</div>
        {/*1*/}
        <Form.Control
          type="text"
          className={'HNameForm2'}
          aria-describedby="TextCapacity"
        />
        <Form.Control
          type="text"
          className={'HNameForm2'}
          aria-describedby="TextCapacity"
          style={{position:"relative", right:90}}
        />
        {/*2*/}
        <div className={'LocationLine1'}>예) 서울특별시</div>
        <div className={'LocationLine1'} style={{position:"relative", right:90}}>예) 강남구</div>
        {/*3*/}
        <div style={{gridRow:4, gridColumn:1/3, }}>도로명</div>
        <Form.Control
          type="text"
          className={'HNameForm3'}
          aria-describedby="TextCapacity"
          style={{gridRow:5, gridColumn:1/3}}
        />
        <div className={'LocationLine1'} style={{gridRow:6 , gridColumn:1/3}}>예) 언주로 406</div>
        <div style={{gridRow:7 , gridColumn:1/3}}>상세주소(선택사항)</div>
        <Form.Control
          type="text"
          className={'HNameForm4'}
          aria-describedby="TextCapacity"
          style={{gridRow:8 , gridColumn:1/3}}
        />
        <div className={'LocationLine1'} style={{gridRow:9 , gridColumn:1/3}}>예) 35동 4층 407호</div>
        <div style={{gridRow:10 , gridColumn:1/3}}>우편번호</div>
        <Form.Control
          type="text"
          className={'HNameForm2'}
          aria-describedby="TextCapacity"
          style={{gridRow:11 , gridColumn:1/3}}
        />
        <div className={'LocationLine1'} style={{gridRow:12 , gridColumn:1/3}}>예) 135-919</div>
      </div>


      <hr/>
      <div className={'HNameFrame2'}>
        <button className={'BasicInfoBtn'} style={{width: 70}} onClick={() => {
          props.setAddIntro(false)
        }}>취소
        </button>
        <Button className={'BasicInfoBtn3'} variant="outline-dark">저장하기</Button>
      </div>
      <hr/>
    </div>
  )
}

export default AddForm