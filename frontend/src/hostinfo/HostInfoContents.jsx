import React from "react";
import {useSelector} from "react-redux";
import axios from "axios";

const HostInfoContents = () => {
    const contact = useSelector((state)=>state.contact.value);
    const onClickEmail = () =>{

        axios.post('http://localhost:8080/sendToHostContact',{
            params:{
                userId : contact.contact,
            }
        })
            .then((reg)=>{
                console.log(reg)
                alert('이메일 발송 성공')
            })
            .catch((err)=>{
                console.log(err);
            })

    }

  return (
    <div style={{marginBottom:35}}>
      <div className={'HostInfoLine1'}>게스트가 많이 하는 질문</div>
      <div className={'HostInfoLine2'}>찾아가기</div>
      <ul className={'HostInfoLine3'}>
        <li>숙소 부지에 무료 주차공간이 있습니다.</li>
        <li>이 숙소의 체크인 시간은 오후 4:00 부터 오후 10:00 까지 입니다. 체크아웃은 오전 11:00 까지 입니다.</li>
      </ul>

      <div className={'HostInfoLine2'}>숙소 세부 정보 및 이용 규칙</div>
      <ul className={'HostInfoLine3'}>
        <li>흡연 금지</li>
        <li>파티나 이벤트 금지</li>
        <li>반려동물 동반 금지</li>
      </ul>

      <div className={'HostInfoLine2'}>요금 설정 및 예약 가능 여부</div>
      <ul className={'HostInfoLine3'}>
        <li>쥐돌이님의 숙소는 1월 18일 부터 ~ 1월 23일 기간에 예약 가능합니다. 예약을 서두르세요.</li>
        <li>체크인 30일 전까지 취소 시 모든 수수료 포함 전액 환불</li>
      </ul>

      <div className={'HostInfoFrame1'}>
        <div>
          <div className={'HostInfoLine4'}>전화번호</div>
          <div className={'HostInfoLine5'}>010-1577-1577</div>
        </div>

        <div>
          <div className={'HostInfoLine4'}>이메일 주소</div>
          <div className={'HostInfoLine5'}>{contact.contact}</div>
            <button onClick={onClickEmail}></button>
        </div>
      </div>
    </div>
  )
}

export default HostInfoContents;