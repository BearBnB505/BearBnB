import React from "react";
import {Button, FloatingLabel} from "react-bootstrap";
import Form from "react-bootstrap/Form";

const LocationIntroForm=(props)=>{
  return(
    <div>
      <div className={'HNameFrame1'}>
        <p className={'HNameLine1'}>지역 설명</p>
        <button className={'BasicInfoBtn2'} id={'LocationFormBtn1'} onClick={() => {
          props.setLocationIntro(false)
        }}>&#88;</button>
        <p className={'HNameLine2'}>숙소 주변 지역에 대해 알려주세요.</p>
      </div>

      <FloatingLabel controlId="HouseInfoText" label="내용">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '150px' }}
        />
      </FloatingLabel>
      <Form.Text id="HouseInfoText" muted>
        0/300
      </Form.Text>
      <hr/>
      <div className={'HNameFrame2'}>
        <button className={'BasicInfoBtn'} id={'LocationFormBtn2'} style={{width:70}} onClick={() => {props.setLocationIntro(false)}}>취소</button>
        <Button className={'BasicInfoBtn3'} variant="outline-dark">저장하기</Button>
      </div>
      <hr/>
    </div>
  )
}

export default LocationIntroForm;