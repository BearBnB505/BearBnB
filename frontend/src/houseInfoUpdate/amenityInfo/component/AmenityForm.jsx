import React, {useState} from "react";
import {ToggleButton} from "react-bootstrap";
import $ from "jquery";
import AmenityCheck from "./AmenityCheck";

const AmenityForm=(props)=>{

  // const [checked, setChecked] = useState(false);



  return(
    <div>
      <div className={'HNameFrame1'}>
        <p className={'HNameLine1'} style={{fontSize:17}}>항목</p>
        <button className={'BasicInfoBtn2'} id={'AddFormBtn1'} onClick={() => {
          props.setAddIntro(false)
        }}>&#88;</button>
      </div>

      <div className={'AmenityFrameBox'}>
        <div className={'AmenityBox'}>욕실</div>
        {/*<div className={'AmenityTitle'}>욕조</div>*/}
        {/*<ToggleButton*/}
        {/*  id="toggle-check"*/}
        {/*  type="checkbox"*/}
        {/*  variant="outline-dark"*/}
        {/*  checked={checked}*/}
        {/*  value="1"*/}
        {/*  onChange={(e) => setChecked(e.currentTarget.checked)}*/}
        {/*  onClick={props.setBathtub(!props.bathtub)}*/}
        {/*  style={{borderRadius: 30}}*/}
        {/*>*/}
        {/*  &#10003;*/}
        {/*</ToggleButton>*/}
        <AmenityCheck/>
      </div>

      <div className={'AmenityFrameBox'}>
        <div className={'AmenityBox'} >침실</div>
        <div>1</div>
        <div>2</div>
      </div>

      <div className={'AmenityFrameBox'}>
        <div className={'AmenityBox'} >냉난방</div>
        <div>1</div>
        <div>2</div>
      </div>

      <div className={'AmenityFrameBox'}>
        <div className={'AmenityBox'} >인터넷 및 엔터테인</div>
        <div>1</div>
        <div>2</div>
      </div>

      <div className={'AmenityFrameBox'}>
        <div className={'AmenityBox'} >주방</div>
        <div>1</div>
        <div>2</div>
      </div>

      <div className={'AmenityFrameBox'}>
        <div className={'AmenityBox'} >주차</div>
        <div>1</div>
        <div>2</div>
      </div>

      <div className={'AmenityFrameBox'}>
        <div className={'AmenityBox'} >안전시설</div>
        <div>1</div>
        <div>2</div>
      </div>

      <div className={'AmenityFrameBox'}>
        <div className={'AmenityBox'} >기타 서비스</div>
        <div>1</div>
        <div>2</div>
      </div>



    </div>
  )
}

export default AmenityForm;