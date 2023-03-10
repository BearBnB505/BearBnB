import React, {useEffect, useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Button, ButtonGroup} from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import {useLocation} from "react-router";

const HouseConceptForm=(props)=>{



  const [data, setData] = useState([]);
  const location = useLocation();
  const lodgingNum = location.state.lodgingNum;

  // useEffect(() => {
  //   axios.get('http://localhost:8080/CallLodgingList')
  //     .then((req) => {
  //       const {data} = req;
  //       setData(data);
  //     })
  //     .catch((err) => {
  //       console.log("통신 오류");
  //     })
  // }, []);


  let [space, setSpace] = useState('선택하기');


  const SetHouseConcept=()=>{
    props.setHouseConcept(false)
    axios.put('http://localhost:8080/UpdateLodgingConcept', null, {params: {lodgingNum: lodgingNum, lodgingConcept: props.concept}})

      .then((response) => {
        //console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function onChange(e) {
    props.setConcept(e.target.value);
  }




  return(
    <div>
      <div className={'HNameFrame1'} style={{marginTop:30}}>
        <p className={'HNameLine1'}>숙소 유형</p>
        <button className={'BasicInfoBtn2'} id={'ConceptFormBtn1'} onClick={() => {
          props.setHouseConcept(false)
        }}>&#88;</button>
        <p className={'HNameLine2'}>게스트가 숙소에 대해 제대로 파악하고 숙소가 검색 결과에 올바르게 표시될 수 있도록, 숙소에 가장 적합한 건물 유형을 선택해 주세요.</p>
      </div>

      <br/>

      <h6>회원님의 숙소에 가장 적합한 유형을 선택하세요.</h6>
      <select className={'ConceptBtn'} defaultValue={props.concept} onChange={onChange}>
        <option className={'ConceptOpt'} as={'button'} value={'주택'} >주택</option>
        <option className={'ConceptOpt'} as={'button'} value={'아파트'} >아파트</option>
        <option className={'ConceptOpt'} as={'button'} value={'통나무집'} >통나무집</option>
        <option className={'ConceptOpt'} as={'button'} value={'해변가'} >해변가</option>
        <option className={'ConceptOpt'} as="button" value={'수영장'} >수영장</option>
        <option className={'ConceptOpt'} as="button" value={'한옥'} >한옥</option>
        <option className={'ConceptOpt'} as="button" value={'캠핑장'}>캠핑장</option>
        <option className={'ConceptOpt'} as="button" value={'농장'} >농장</option>
        <option className={'ConceptOpt'} as="button" value={'호수'} >호수</option>
        <option className={'ConceptOpt'} as="button" value={'북극'} >북극</option>
        <option className={'ConceptOpt'} as="button" value={'캐슬'} >캐슬</option>
      </select>



      {/*<Dropdown className={'HDropdown'} as={ButtonGroup}>*/}
      {/*  <Button className={'ConceptBtn'} variant="dark">{props.concept}</Button>*/}
      {/*  <Dropdown.Toggle style={{backgroundColor:"white", color:"black"}} split variant="dark" />*/}
      {/*  <Dropdown.Menu className="super-colors">*/}
      {/*      <Dropdown.Item as="button" onClick={()=>{props.setConcept('주택')}} >주택</Dropdown.Item>*/}
      {/*      <Dropdown.Item as="button" onClick={()=>{props.setConcept('아파트')}}>아파트</Dropdown.Item>*/}
      {/*      <Dropdown.Item as="button" onClick={()=>{props.setConcept('통나무집')}}>통나무집</Dropdown.Item>*/}
      {/*      <Dropdown.Item as="button" onClick={()=>{props.setConcept('해변가')}}>해변가</Dropdown.Item>*/}
      {/*      <Dropdown.Item as="button" onClick={()=>{props.setConcept('수영장')}}>수영장</Dropdown.Item>*/}
      {/*      <Dropdown.Item as="button" onClick={()=>{props.setConcept('한옥')}}>한옥</Dropdown.Item>*/}
      {/*      <Dropdown.Item as="button" onClick={()=>{props.setConcept('캠핑장')}}>캠핑장</Dropdown.Item>*/}
      {/*      <Dropdown.Item as="button" onClick={()=>{props.setConcept('농장')}}>농장</Dropdown.Item>*/}
      {/*      <Dropdown.Item as="button" onClick={()=>{props.setConcept('호수')}}>호수</Dropdown.Item>*/}
      {/*      <Dropdown.Item as="button" onClick={()=>{props.setConcept('북극')}}>북극</Dropdown.Item>*/}
      {/*      <Dropdown.Item as="button" onClick={()=>{props.setConcept('캐슬')}}>캐슬</Dropdown.Item>*/}
      {/*  </Dropdown.Menu>*/}
      {/*</Dropdown>*/}

      {/*<h6>회원님의 숙소의 이용 할 수 있는 공간의 형태를 선택하세요.</h6>*/}
      {/*<Dropdown as={ButtonGroup} className={'HDropdown'}>*/}
      {/*  <Button className={'ConceptBtn'} variant="dark">{space}</Button>*/}
      {/*  <Dropdown.Toggle style={{backgroundColor:"white", color:"black"}} split variant="dark" />*/}
      {/*  <Dropdown.Menu className="super-colors">*/}
      {/*    <Dropdown.Item as="button" onClick={()=>{setSpace(space='개인실')}}>개인실</Dropdown.Item>*/}
      {/*    <Dropdown.Item as="button" onClick={()=>{setSpace(space='다인실')}}>다인실</Dropdown.Item>*/}
      {/*    <Dropdown.Item as="button" onClick={()=>{setSpace(space='공간 전체')}}>공간 전체</Dropdown.Item>*/}
      {/*  </Dropdown.Menu>*/}
      {/*</Dropdown>*/}

      <hr/>
      <div className={'HNameFrame2'}>
        <button className={'BasicInfoBtn'} id={'ConceptFormBtn2'} style={{width:70}} onClick={() => {props.setHouseConcept(false)}}>취소</button>
        <Button className={'BasicInfoBtn3'} id={'ConceptFormBtn3'} variant="outline-dark" onClick={SetHouseConcept}>저장하기</Button>
      </div>
      <hr/>
    </div>
  )
}

export default HouseConceptForm