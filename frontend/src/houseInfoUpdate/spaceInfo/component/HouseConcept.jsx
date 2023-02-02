import React, {useEffect, useState} from "react";
import HouseConceptForm from "./HouseConceptForm";
import $ from "jquery";
import axios from "axios";

const HouseConcept = () => {
  // const [houseConcept, setHouseConcept] = useState(false);

  $(document).ready(function () {
    $('#ConceptBtn').on('click', function () {
      $('#HouseConcept').hide();
    });

    $('#ConceptFormBtn1').on('click', function () {
      $('#HouseConcept').show();
    });

    $('#ConceptFormBtn2').on('click', function () {
      $('#HouseConcept').show();
    });
  });

  const [data, setData] = useState([]);
  const [concept, setConcept] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/CallLodgingList')
      .then((req) => {
        const {data} = req;
        setData(data);
        setConcept(data[0].lodgingConcept)
      })
      .catch((err) => {
        console.log("통신 오류");
      })
  }, []);


  const [houseConcept, setHouseConcept] = useState(false);


  return (
    <div>
      <div className={'HNameFrame5'} id={'HouseConcept'}>
        <p className={'HNameLine1'}>숙소 유형</p>
        <button className={'BasicInfoBtn'} id={'ConceptBtn'} onClick={() => {
          setHouseConcept(!houseConcept)
        }}>{houseConcept ? "취소" : "수정"}</button>
        <p className={'HNameLine3'}>{concept}</p>
      </div>
      {houseConcept && <HouseConceptForm setHouseConcept={setHouseConcept} concept={concept} setConcept={setConcept}/>}
      <hr/>
    </div>
  )
}

export default HouseConcept;