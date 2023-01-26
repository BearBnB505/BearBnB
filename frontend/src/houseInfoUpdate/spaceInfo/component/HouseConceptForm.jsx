import React, {useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Button, ButtonGroup} from "react-bootstrap";

const HouseConceptForm=(props)=>{
  let [concept, setConcept] = useState('선택하기');
  let [space, setSpace] = useState('선택하기');

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
      <Dropdown className={'HDropdown'} as={ButtonGroup}>
        <Button className={'ConceptBtn'} variant="dark">{concept}</Button>
        <Dropdown.Toggle style={{backgroundColor:"white", color:"black"}} split variant="dark" />
        <Dropdown.Menu className="super-colors">
            <Dropdown.Item as="button" onClick={()=>{setConcept(concept='주택')}}>주택</Dropdown.Item>
            <Dropdown.Item as="button" onClick={()=>{setConcept(concept='아파트')}}>아파트</Dropdown.Item>
            <Dropdown.Item as="button" onClick={()=>{setConcept(concept='통나무집')}}>통나무집</Dropdown.Item>
            <Dropdown.Item as="button" onClick={()=>{setConcept(concept='해변가')}}>해변가</Dropdown.Item>
            <Dropdown.Item as="button" onClick={()=>{setConcept(concept='수영장')}}>수영장</Dropdown.Item>
            <Dropdown.Item as="button" onClick={()=>{setConcept(concept='한옥')}}>한옥</Dropdown.Item>
            <Dropdown.Item as="button" onClick={()=>{setConcept(concept='캠핑장')}}>캠핑장</Dropdown.Item>
            <Dropdown.Item as="button" onClick={()=>{setConcept(concept='농장')}}>농장</Dropdown.Item>
            <Dropdown.Item as="button" onClick={()=>{setConcept(concept='호수')}}>호수</Dropdown.Item>
            <Dropdown.Item as="button" onClick={()=>{setConcept(concept='북극')}}>북극</Dropdown.Item>
            <Dropdown.Item as="button" onClick={()=>{setConcept(concept='캐슬')}}>캐슬</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <h6>회원님의 숙소의 이용 할 수 있는 공간의 형태를 선택하세요.</h6>
      <Dropdown as={ButtonGroup} className={'HDropdown'}>
        <Button className={'ConceptBtn'} variant="dark">{space}</Button>
        <Dropdown.Toggle style={{backgroundColor:"white", color:"black"}} split variant="dark" />
        <Dropdown.Menu className="super-colors">
          <Dropdown.Item as="button" onClick={()=>{setSpace(space='개인실')}}>개인실</Dropdown.Item>
          <Dropdown.Item as="button" onClick={()=>{setSpace(space='다인실')}}>다인실</Dropdown.Item>
          <Dropdown.Item as="button" onClick={()=>{setSpace(space='공간 전체')}}>공간 전체</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <hr/>
      <div className={'HNameFrame2'}>
        <button className={'BasicInfoBtn'} id={'ConceptFormBtn2'} style={{width:70}} onClick={() => {props.setHouseConcept(false)}}>취소</button>
        <Button className={'BasicInfoBtn3'} variant="outline-dark">저장하기</Button>
      </div>
      <hr/>
    </div>
  )
}

export default HouseConceptForm