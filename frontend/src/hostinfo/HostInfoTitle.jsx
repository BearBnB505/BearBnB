import React from "react";

const HostInfoTitle = () => {
  return (
    <div className={'HostInfoFrame2'}>
      <a href="#" target="_self">
        <img className={'HostInfoImg2'} src="/paymentIcon/arrosL.png" alt="위의 이미지를 누르면 연결됩니다."/>
      </a>
      <div className={'HostInfoBox'}>
        <img style={{gridRow: 0 / 1}} className={'HostInfoImg'} src={"/hostImg/1.png"} alt={"hostImg"}></img>
        <div className={'HostInfoLine6'}>호스트:</div>
        <div className={'HostInfoLine6'}>쥐돌이 님</div>
        <div className={'IntroLine4'}>회원가입일:</div>
        <div className={'IntroLine4'}>2022. 08. 22</div>
      </div>
    </div>
  )
}

export default HostInfoTitle