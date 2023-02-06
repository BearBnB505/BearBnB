import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap";
import axios from "axios";
import $ from "jquery";
import lodgingName from "../../../lodging_reg/LodgingName";
import {useLocation} from "react-router";


function HouseNameForm(props) {

  const [textCount, setTextCount] = useState('0')
  const location = useLocation();
  const lodgingNum = location.state.lodgingNum;

  function onChange(e) {
    props.setLodgingName(e.target.value);
    setTextCount(e.target.value.length)
  }

  const clickSave = () => {
    props.setHouseName(false)

    axios.put('http://localhost:8080/UpdateLodgingName/',null,{params: {lodgingNum: lodgingNum, lodgingName: props.lodgingName}})

      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  return (
    <div>
      <div className={'HNameFrame1'}>
        <p className={'HNameLine1'}>숙소명</p>
        <button className={'BasicInfoBtn2'} id={'HouseNameFormBtn'} onClick={() => {
          props.setHouseName(false)
        }}>&#88;</button>
        <p className={'HNameLine2'}>숙소 제목에서는 숙소를 차별화할 수 있는 특징을 강조해야 합니다. 숙소 이름 가이드라인을 확인하세요.</p>
      </div>

      <Form.Control
        type="text"
        className={'HNameForm'}
        aria-describedby="TextCapacity"
        onChange={onChange}
        maxLength={'50'}
        value={props.lodgingName}

      />
      <Form.Text id="TextCapacity" muted>
        {textCount}/50
      </Form.Text>
      <hr/>

      <div className={'HNameFrame2'}>
        <button className={'BasicInfoBtn'} id={'HouseNameFormBtn2'} style={{width: 70}} onClick={() => {
          props.setHouseName(false)
        }}>취소
        </button>
        <Button id={'NameUpdateBtn'} className={'BasicInfoBtn3'} variant="outline-dark" onClick={clickSave}>저장하기</Button>
      </div>
      <hr/>
    </div>
  )
}

export default HouseNameForm