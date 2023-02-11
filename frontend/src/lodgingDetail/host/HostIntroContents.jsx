import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function HostIntroContents(props) {
  return (
    <div className={'container p-2 mb-5'}>
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
              <span className={''} style={{marginLeft:5}}>한국어</span>
            </div>

            {/*<div className={'IntroTextLine1'}>숙박 중 게스트와의 교류</div>*/}
            <div className={'mb-2'}>숙박 중 게스트와의 교류</div>

            <Link to={"/hostInfo"} state={{userId: props.userId}}>
              <Button type={"button"} className={'fw-bold my-3 px-3 py-2'} variant="outline-dark">호스트에게 연락하기</Button>
            </Link>
          </div>


          <div className={'row mt-5'}>
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

        {/*<div className={'IntroText2'}>*/}
        <div className={''}>
          {/*ONDA는 다양한 숙박업소분들과 함께 일하는 팀입니다.*/}
          {/*한국의 각 지역의 멋진 숙박업소를 찾아 고객님께 연결해주는*/}
          {/*일을 하고 있습니다.*/}
          {/*업무시간은 한국시간으로 10:00~18:00입니다.*/}
          {/*예약이 완료 되시면 ONDA로 예약확정 문자를 드립니다.*/}
          {/*문자에 업체연락처가 있으니 확인 부탁드립니다.*/}
          {/*예약확정 문자가 오지 않았을 경우 예약이 완료되었거나 예약에 문제가 발생한 것이니, 메세지로 꼭 확인을 요청하시기 바랍니다.*/}

          {/*ONDA는 다양한 유형의 숙소를 운영하는 팀입니다.*/}
          {/*ONDA는 한국에서 독특하고 특별한 숙소를 찾아 여행자들과 공유합니다.*/}
          {/*운영시간은 10시 ~ 18시입니다. 운영 시간 동안 최대한 신속하게 응답해 드립니다. 하지만 많은 요청과 질문으로 인해 지연될 수 있습니다.*/}
        </div>

      </div>
    </div>

  )
}

export default HostIntroContents;