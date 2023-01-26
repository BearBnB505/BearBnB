import React, {useState} from "react";
import HouseConceptForm from "./HouseConceptForm";
import $ from "jquery";

const HouseConcept=()=>{
  const [houseConcept, setHouseConcept] = useState(false);

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


  return(
    <div>
      <div className={'HNameFrame5'} id={'HouseConcept'} >
        <p className={'HNameLine1'} >숙소 유형</p>
        <button className={'BasicInfoBtn'} id={'ConceptBtn'} onClick={() => {
          setHouseConcept(!houseConcept)
        }}>{houseConcept ? "취소" : "수정"}</button>
        <p className={'HNameLine3'}>설정되지 않음</p>
        <p className={'HNameLine3'} style={{gridRow:3}}>숙소 종류: 개인실</p>
      </div>
      {houseConcept && <HouseConceptForm setHouseConcept={setHouseConcept}/>}
      <hr/>
    </div>
  )
}

export default HouseConcept;