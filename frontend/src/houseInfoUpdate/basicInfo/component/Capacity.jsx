import React, {useState} from "react";


const Capacity = () => {
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

  return (
    <div>
      <div className={'HNameFrame4'}>
        <p className={'HNameLine1'} style={{position: "relative", top: 8}}>게스트 수</p>
        <button className={'BasicInfoBtn4'} style={{position: "relative", right: -8}} onClick={GuestMinus}>
          <div style={{position: "relative", top: -3}}>-</div>
        </button>
        <div style={{textAlign: "center", position: "relative", top: 5, right: -3}}>{guestNum}</div>
        <button className={'BasicInfoBtn4'} style={{position: "relative", right: -8}} onClick={GuestPlus}>
          <div style={{position: "relative", top: -3}}>+</div>
        </button>
      </div>
      <hr/>
    </div>
  )
}


export default Capacity;