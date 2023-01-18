import React from "react";
import '../hostDetail.css';
import {Container} from "react-bootstrap";

function HostDetailTitle(){
  return(
    <div className={'oneLine'}>
      <div className={'TLine1'}>'느링느링스테이-다로제' 귤밭속 독채풀빌라. 개별수영장, 야외노천탕</div>
      <div>&#x2B50;</div>

      <div className={'aTag'}>4.71</div>
      <div>· 성산읍, 서귀포시, 제주도, 한국</div>
      <div style={{fontWeight:"bold"}}>· 후기</div>
      <div>14 개</div>
      <a className={'aTag'} href={'#'} target={"_blank"}>공유하기</a>
      <a className={'aTag'} href={'#'} target={"_blank"}>저장</a>
    </div>
  )
}

export default HostDetailTitle;