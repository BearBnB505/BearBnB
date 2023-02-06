import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import {Button, FloatingLabel} from "react-bootstrap";
import axios from "axios";
import {useLocation} from "react-router";

const HouseIntroForm=(props)=>{


  // const [intro, setIntro] = useState('')
  const [textCount, setTextCount] = useState('')
  const location = useLocation();
  const lodgingNum = location.state.lodgingNum;

  function onChange(e) {
    props.setIntroLodging(e.target.value);
    setTextCount(e.target.value.length);
  }

  const SetHouseIntro=()=>{
    props.setHouseIntro(false)
    axios.put('http://localhost:8080/UpdateLodgingIntro', null, {params: {lodgingNum: lodgingNum,introLodging: props.introLodging}})

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

      <FloatingLabel controlId="HouseInfoText">
        <Form.Control
          onChange={onChange}
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '200px' }}
          maxLength={'500'}
          value={props.introLodging}
        />
      </FloatingLabel>
      <Form.Text id="HouseInfoText" muted>
        {textCount}/500
      </Form.Text>
      <hr/>
      <div className={'HNameFrame2'}>
        <button className={'BasicInfoBtn'} id={'HouseIntroFormBtn2'} style={{width:70}} onClick={() => {props.setHouseIntro(false)}}>취소</button>
        <Button className={'BasicInfoBtn3'} id={'HouseIntroFormBtn3'} variant="outline-dark" onClick={SetHouseIntro}>저장하기</Button>
      </div>
      <hr/>
    </div>
  )
}

export default HouseIntroForm;