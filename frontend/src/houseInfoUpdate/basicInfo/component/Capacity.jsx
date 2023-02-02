import React, {useEffect, useState} from "react";
import HouseIntroForm from "./HouseIntroForm";
import axios from "axios";
import CapacityForm from "./CapacityForm";
import $ from "jquery";

const Capacity = () => {
  const [capacity, setCapacity] = useState(false);
  const [data, setData] = useState([]);
  const [peopleNum, setPeopleNum] = useState('1')

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

  useEffect(() => {
    axios.get('http://localhost:8080/CallLodgingList')
      .then((req) => {
        const {data} = req;
        setData(data);
        setPeopleNum(data[0].peopleNum);
      })
      .catch((err) => {
        console.log("통신 오류");
        console.log(err);
      })
  }, []);

  return (
    <div>
      <div id={'BNRr'}>
        <div className={'HNameFrame3'} id={'HouseIntro'}>
          <p className={'HNameLine1'}>수용 가능 인원</p>
          <button className={'BasicInfoBtn'} id={'BNRrBtn'} onClick={() => {
            setCapacity(!capacity)
          }}>{capacity ? "취소" : "수정"}</button>
          <p className={'HNameLine3'}>{peopleNum}</p>
        </div>
      </div>
      {capacity && <CapacityForm capacity={capacity} setCapacity={setCapacity} peopleNum={peopleNum} setPeopleNum={setPeopleNum}/>}
      <hr/>
    </div>
  )
}

export default Capacity;