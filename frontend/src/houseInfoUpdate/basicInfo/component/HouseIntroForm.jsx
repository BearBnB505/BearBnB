import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import {Button, FloatingLabel} from "react-bootstrap";
import axios from "axios";

const HouseIntroForm=(props)=>{


  // const [intro, setIntro] = useState('')

  function onChange(e) {
    props.setIntroLodging(e.target.value);
  }

  const SetHouseIntro=()=>{
    axios.post('http://localhost:8080/UpdateLodgingIntro', null, {
      params: ({introLodging: props.introLodging})
    })
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return(
    <div>
      <div className={'HNameFrame1'}>
        <p className={'HNameLine1'}>숙소 설명</p>
        <button className={'BasicInfoBtn2'} id={'HouseIntroFormBtn'} onClick={() => {
          props.setHouseIntro(false)
        }}>&#88;</button>
        <p className={'HNameLine2'}>게스트가 숙박에 대해 상상해 볼 수 있도록 숙소의 장점을 포함한 숙소 정보를 제공해 주세요.</p>
      </div>

      <FloatingLabel controlId="HouseInfoText" label="내용">
        <Form.Control
          onChange={onChange}
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
        <button className={'BasicInfoBtn'} id={'HouseIntroFormBtn2'} style={{width:70}} onClick={() => {props.setHouseIntro(false)}}>취소</button>
        <Button className={'BasicInfoBtn3'} variant="outline-dark" onClick={SetHouseIntro}>저장하기</Button>
      </div>
      <hr/>
    </div>
  )
}

export default HouseIntroForm;