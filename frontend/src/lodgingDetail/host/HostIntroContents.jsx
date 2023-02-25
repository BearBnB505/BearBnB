import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function HostIntroContents(props) {

  // console.log('언어 선택')
  // console.log(props)

  return (
    <div className={'container p-2'}>
      {/*<div className={'IntroContents'}>*/}
      <div className={'row'}>
        <div className={'col'}>
          {/*<p className={'IntroText1'}>*/}
          <p className={'text-break'}>
            {props.introHost}
          </p>
        </div>
        <div className={'col ms-5'}>
          <div className={'ps-4'}>
            <div className={'mb-2'}>
              {/*<div className={'IntroTextLine2'}>언어:</div>*/}
              <span className={''}>언어 : </span>
              {/*<div className={'IntroTextLine2'} style={{marginLeft:5}}>한국어</div>*/}
              <span className={''} style={{marginLeft:5}}>{props.language}</span>
            </div>

            {/*<div className={'IntroTextLine1'}>숙박 중 게스트와의 교류</div>*/}
            <div className={'mb-2'}>숙박 중 게스트와의 교류</div>

            {/*<Link to={"/hostInfo"} state={{userId: props.userId}}>*/}
            {/*  <Button type={"button"} className={'fw-bold my-3 px-3 py-2'} variant="outline-dark">호스트에게 연락하기</Button>*/}
            {/*</Link>*/}
          </div>


          <div className={'row '}>
            <div className={'col-1'}>
              <img className={''} src={"/etcIcon/noticeBear4.png"} style={{width: 80}}/>
            </div>
            <div className={'col mt-1 ms-4'}>
              {/*<div className={'IntroNoticeText'}>*/}
              <p className={'fs-6'}>
                안전한 결제를 위해 베어비앤비 웹사이트나 앱 외부에서 송금하거나 대화를 나누지 마세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HostIntroContents;