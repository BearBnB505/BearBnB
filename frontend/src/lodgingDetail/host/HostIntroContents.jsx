import React from "react";
import {Button} from "react-bootstrap";

function HostIntroContents() {
  return (
    <div className={'container p-2'}>
      {/*<div className={'IntroContents'}>*/}
      <div className={'row'}>
        <div className={'col'}>
          {/*<p className={'IntroText1'}>*/}
          <p className={'text-break'}>
            ONDA는 다양한 숙박업소분들과 함께 일하는 팀입니다.
            한국의 각 지역의 멋진 숙박업소를 찾아 고객님께 연결해주는
            일을 하고 있습니다.
            업무시간은 한국시간으로 10:00~18:00입니다.
            예약이 완료 되시면 ONDA로 예약확정 문자를 드립니다.
            문자에 업체연락처가 있으니 확인 부탁드립니다.
            예약확정 문자가 오지 않았을 경우 예약이 완료되었거나 예약에 문제가 발생한 것이니, 메세지로 꼭 확인을 요청하시기 바랍니다.

            ONDA는 다양한 유형의 숙소를 운영하는 팀입니다.
            ONDA는 한국에서 독특하고 특별한 숙소를 찾아 여행자들과 공유합니다.
            운영시간은 10시 ~ 18시입니다. 운영 시간 동안 최대한 신속하게 응답해 드립니다. 하지만 많은 요청과 질문으로 인해 지연될 수 있습니다.

            예약하신 숙소에 대한 문의가 있으실 경우, 예약 확정 후 메시지에서 숙소 연락처를 통해 연락처를 확인하실 수 있습니다.
            여행에 적합한 숙소를 찾으셨다면, ONDA의 숙소를 확인하세요.

            예약이 확정되면, ONDA가 자세한 정보가 담긴 확인 메시지를 보내드립니다.
            메시지는 각 적절한 연락처를 확인할 수 있습니다.
            숙박에 대한 메시지를 확인해주세요.
            혼동 메시지를 받지 못하셨다면, 예약에 문제가 있다는 뜻입니다. 이 경우, Onda에게 연락하여 도움을 받으시기 바랍니다.
            감사합니다.
          </p>
        </div>
        <div className={'col ms-5'}>
          <div className={'mb-2'}>
            {/*<div className={'IntroTextLine2'}>언어:</div>*/}
            <span className={''}>언어 : </span>
            {/*<div className={'IntroTextLine2'} style={{marginLeft:5}}>한국어</div>*/}
            <span className={''} style={{marginLeft:5}}>한국어</span>
          </div>

          {/*<div className={'IntroTextLine1'}>숙박 중 게스트와의 교류</div>*/}
          <div className={''}>숙박 중 게스트와의 교류</div>
          {/*<Button style={{gridColumn: 2 / 4, marginLeft:30}} className={'IntroBtn'} variant="dark">호스트에게 연락하기</Button>*/}
          <Button className={'IntroBtn my-3'} variant="dark">호스트에게 연락하기</Button>

          <div className={'row mt-5'}>
            <div className={'col-1'}>
              <img className={''} src={"/EctIcon/noticeBear4.png"} style={{width: 80}}/>
            </div>
            <div className={'col mt-1 ms-4'}>
              {/*<div className={'IntroNoticeText'}>*/}
              <p className={'fs-6'}>
                안전한 결제를 위해 에어비앤비 웹사이트나 앱 외부에서 송금하거나 대화를 나누지 마세요.
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
      <hr/>
    </div>

  )
}

export default HostIntroContents;