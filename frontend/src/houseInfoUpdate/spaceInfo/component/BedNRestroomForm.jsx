import React, {useState} from "react";
import {Button} from "react-bootstrap";
import axios from "axios";

const BedNRestroomForm=(props)=>{

  const [guestNum, setGuestNum] = useState(1);

  function GuestPlus() {
    setGuestNum(guestNum + 1);
  }

  function GuestMinus() {
    if (guestNum <= 1) {
      setGuestNum(1);
    } else {
      setGuestNum(guestNum - 1);
    }
  }


  function BedPlus() {
    props.SetBedNum(props.bedNum + 1);
  }

  function BedMinus() {
    if (props.bedNum <= 0) {
      props.bedNum(0);
    } else {
      props.SetBedNum(props.bedNum - 1);
    }
  }

  function BedroomPlus() {
    props.SetBedroomNum(props.bedroomNum + 1);
  }

  function BedroomMinus() {
    if (props.bedroomNum <= 0) {
      props.bedroomNum(0);
    } else {
      props.SetBedroomNum(props.bedroomNum - 1);
    }
  }

  function RestroomPlus() {
    props.SetRestroomNum(props.restroomNum + 1);
  }

  function RestroomMinus() {
    if (props.restroomNum <= 0) {
      props.restroomNum(0);
    } else {
      props.SetRestroomNum(props.restroomNum - 1);
    }
  }

  function SetBedNBath(){
    axios.post('http://localhost:8080/UpdateLodgingBedNBath', null, {
      params: (
        {bedNum: props.bedNum, bedroomNum: props.bedroomNum,bathroomNum: props.restroomNum}
      )
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
      <div className={'HNameFrame1'} style={{marginTop:30}}>
        <p className={'HNameLine1'}>게스트는 어떤 공간을 사용할 수 있나요?</p>
        <button className={'BasicInfoBtn2'} id={'BNRrFormBtn1'} onClick={() => {
          props.SetRoomNumInfo(false)
        }}>&#88;</button>
        <p className={'HNameLine2'}>공용 공간을 포함해 게스트가 사용할 수 있는 공간을 추가하세요</p>
      </div>

      <div className={'HNameFrame4'}>
        <p className={'BNRroomLine1'} style={{position: "relative", top: 8}}>침실</p>
        <button className={'BNRroomBtn'} style={{position: "relative", right: -8}} onClick={BedroomMinus}>
          <div style={{position: "relative", top: -3}}>-</div>
        </button>
        <div className={'BNRroomLine2'}>{props.bedroomNum}</div>
        <button className={'BNRroomBtn'} style={{position: "relative", right: -8}} onClick={BedroomPlus}>
          <div style={{position: "relative", top: -3}}>+</div>
        </button>
      </div>

      <div className={'HNameFrame4'}>
        <p className={'BNRroomLine1'} style={{position: "relative", top: 8}}>침대</p>
        <button className={'BNRroomBtn'} style={{position: "relative", right: -8}} onClick={BedMinus}>
          <div style={{position: "relative", top: -3}}>-</div>
        </button>
        <div className={'BNRroomLine2'}>{props.bedNum}</div>
        <button className={'BNRroomBtn'} style={{position: "relative", right: -8}} onClick={BedPlus}>
          <div style={{position: "relative", top: -3}}>+</div>
        </button>
      </div>

      <div className={'HNameFrame4'}>
        <p className={'BNRroomLine1'} style={{position: "relative", top: 8}}>욕실</p>
        <button className={'BNRroomBtn'} style={{position: "relative", right: -8}} onClick={RestroomMinus}>
          <div style={{position: "relative", top: -3}}>-</div>
        </button>
        <div className={'BNRroomLine2'}>{props.restroomNum}</div>
        <button className={'BNRroomBtn'} style={{position: "relative", right: -8}} onClick={RestroomPlus}>
          <div style={{position: "relative", top: -3}}>+</div>
        </button>
      </div>

      <hr/>
      <div className={'HNameFrame2'}>
        <button className={'BasicInfoBtn'} id={'BNRrFormBtn2'} style={{width:70}} onClick={() => {props.setHouseConcept(false)}}>취소</button>
        <Button className={'BasicInfoBtn3'} variant="outline-dark" onClick={SetBedNBath}>저장하기</Button>
      </div>
      <hr/>
    </div>
  )
}

export default BedNRestroomForm