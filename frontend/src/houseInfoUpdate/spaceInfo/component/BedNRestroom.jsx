import React, {useState} from "react";
import HouseConceptForm from "./HouseConceptForm";
import BedNRestroomForm from "./BedNRestroomForm";
import $ from "jquery";

const BedNRestroom=()=>{
  const [roomNumInfo, SetRoomNumInfo] = useState(false);
  const [bedNum, SetBedNum] = useState(0);
  const [bedroomNum, SetBedroomNum] = useState(0);
  const [restroomNum, SetRestroomNum] = useState(0);


  $(document).ready(function () {
    $('#BNRrBtn').on('click', function () {
      $('#BNRr').hide();
    });

    $('#BNRrFormBtn1').on('click', function () {
      $('#BNRr').show();
    });

    $('#BNRrFormBtn2').on('click', function () {
      $('#BNRr').show();
    });

  });

  return(
    <div>
      <div className={'HNameFrame5'} id={'BNRr'}>
        <p className={'HNameLine1'}>방 및 기타 공간</p>
        <button className={'BasicInfoBtn'} id={'BNRrBtn'} onClick={() => {
          SetRoomNumInfo(!roomNumInfo)
        }}>{roomNumInfo ? "취소" : "수정"}</button>
        <p className={'HNameLine3'}>침실 : {bedroomNum}</p>
        <p className={'HNameLine3'} style={{gridRow:3}}>침대 : {bedNum}</p>
        <p className={'HNameLine3'} style={{gridRow:4}}>욕실 : {restroomNum}</p>
      </div>
      {roomNumInfo && <BedNRestroomForm SetRoomNumInfo={SetRoomNumInfo}
                                        SetBedNum={SetBedNum}
                                        bedNum={bedNum}
                                        SetBedroomNum={SetBedroomNum}
                                        bedroomNum={bedroomNum}
                                        SetRestroomNum={SetRestroomNum}
                                        restroomNum={restroomNum}/>}
      <hr/>
    </div>
  )
}

export default BedNRestroom;