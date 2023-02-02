import React from "react";
import '../lodgingDetail.css';

function LodgingDetailTitle(props){
  return(
    <div className={'oneLine'}>
      <div className={'TLine1'}>{props.lodgingName}</div>
      <div>&#x2B50;{props.reviewTotal}</div>

      <div className={'aTag'}></div>
      <div>· {props.addr}</div>
      <div style={{fontWeight:"bold"}}>· 후기</div>
      <div>{props.reviewCount} 개</div>
      <a className={'aTag'} href={'#'} target={"_blank"}>공유하기</a>
      <a className={'aTag'} href={'#'} target={"_blank"}>저장</a>
    </div>
  )
}

export default LodgingDetailTitle;