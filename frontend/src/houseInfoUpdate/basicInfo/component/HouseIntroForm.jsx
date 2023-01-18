import React from "react";
import Form from "react-bootstrap/Form";
import {Button, FloatingLabel} from "react-bootstrap";

const HouseIntroForm=(props)=>{
  return(
    <div>
      <div className={'HNameFrame1'}>
        <p className={'HNameLine1'}>숙소 설명</p>
        <button className={'BasicInfoBtn2'} onClick={() => {
          props.setHouseName(false)
        }}>&#88;</button>
        <p className={'HNameLine2'}>게스트가 숙박에 대해 상상해 볼 수 있도록 숙소의 장점을 포함한 숙소 정보를 제공해 주세요.</p>
      </div>

      <FloatingLabel controlId="HouseInfoText" label="내용">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '200px' }}
        />
      </FloatingLabel>
      <Form.Text id="HouseInfoText" muted>
        0/500
      </Form.Text>
      <hr/>
      <div className={'HNameFrame2'}>
        <button className={'BasicInfoBtn'} style={{width:70}} onClick={() => {props.setHouseName(false)}}>취소</button>
        <Button className={'BasicInfoBtn3'} variant="outline-dark">저장하기</Button>
      </div>
      <hr/>
    </div>
  )
}

export default HouseIntroForm;