import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap";
import axios from "axios";
import $ from "jquery";
import lodgingName from "../../../lodging_reg/LodgingName";


function HouseNameForm(props) {

  // const [name, setName] = useState('')

  function onChange(e) {
    props.setLodgingName(e.target.value);
  }

  const clickSave = () => {
    axios.post('http://localhost:8080/UpdateLodgingName', null, {
      params: ({lodgingName: props.lodgingName})
    })
      .then((response) => {
        console.log(response);
        // props.setLodgingName.toString();
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
      />
      <Form.Text id="TextCapacity" muted>
        0/50
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