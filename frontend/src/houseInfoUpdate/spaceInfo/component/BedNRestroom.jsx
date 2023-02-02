import React, {useEffect, useState} from "react";
import HouseConceptForm from "./HouseConceptForm";
import BedNRestroomForm from "./BedNRestroomForm";
import $ from "jquery";
import axios from "axios";

const BedNRestroom = () => {
  const [roomNumInfo, SetRoomNumInfo] = useState(false);
  const [bedNum, SetBedNum] = useState(0);
  const [bedroomNum, SetBedroomNum] = useState(0);
  const [restroomNum, SetRestroomNum] = useState(0);


  $(document).ready(function () {
    $('#BNRrBtn1').on('click', function () {
      $('#BNRr1').hide();
    });

    $('#BNRrFormBtn1').on('click', function () {
      $('#BNRr1').show();
    });

    $('#BNRrFormBtn2').on('click', function () {
      $('#BNRr1').show();
    });

    $('#BNRrFormBtn3').on('click', function () {
      $('#BNRr1').show();
    });

  });

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/CallLodgingList')
      .then((req) => {
        const {data} = req;
        setData(data);
        SetBedNum(data[0].bedNum);
        SetBedroomNum(data[0].bedroomNum);
        SetRestroomNum(data[0].bathroomNum);
      })
      .catch((err) => {
        console.log("통신 오류");
        console.log(err);
      })
  }, []);


  return (
    <div>
      <div id={'BNRr1'}>
        <div className={'HNameFrame5'}>
          <p className={'HNameLine1'}>방 및 기타 공간</p>
          <button className={'BasicInfoBtn'} id={'BNRrBtn1'} onClick={() => {
            SetRoomNumInfo(!roomNumInfo)
          }}>{roomNumInfo ? "취소" : "수정"}</button>
          <p className={'HNameLine3'}>침실 : {bedroomNum}</p>
          <p className={'HNameLine3'} style={{gridRow: 3}}>침대 : {bedNum}</p>
          <p className={'HNameLine3'} style={{gridRow: 4}}>욕실 : {restroomNum}</p>
        </div>
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