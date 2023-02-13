import React from "react";
import {useNavigate} from "react-router-dom";

function HostIntroTitle(props){
    const navigate = useNavigate();
    const clickImg = () => {
        navigate(-1);
    }
  return(
    <div className={'IntroTitleBox'}>
      <img style={{gridRow:0/1}} className={'IntroHostImg'} src={"/hostImg/1.png"}  onClick={()=>{navigate(-1)}}></img>
      <div className={'IntroLine1'}>호스트:</div>
      <div className={'IntroLine2'}>{props.userId} 님</div>
      <div className={'IntroLine4'}>회원가입일:</div>
      <div className={'IntroLine4'}>{props.joinDt}</div>
    </div>
  )
}

export default HostIntroTitle;