import React from "react";

function HostInroTitle(){
  return(
    <div className={'IntroTitleBox'}>
      <img style={{gridRow:0/1}} className={'IntroHostImg'} src={"/hostImg/1.png"} alt={"hostImg"}></img>
      <div className={'IntroLine1'}>호스트:</div>
      <div className={'IntroLine2'}>쥐돌이</div>
      <div className={'IntroLine3'}>님</div>
      <div className={'IntroLine4'}>회원가입일:</div>
      <div className={'IntroLine4'}>2022. 08. 22</div>
    </div>
  )
}

export default HostInroTitle;