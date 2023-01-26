import React from "react";
import '../lodgingDetail.css';
import {Container} from "react-bootstrap";

function LodgingDetailTitle(props){
  return(
    <div className={'oneLine'}>
      <div className={'TLine1'}>{props.lodging_name}</div>
      <div>&#x2B50;</div>

      <div className={'aTag'}>4.71</div>
      <div>· {props.addr}</div>
      <div style={{fontWeight:"bold"}}>· 후기</div>
      <div>14 개</div>
      <a className={'aTag'} href={'#'} target={"_blank"}>공유하기</a>
      <a className={'aTag'} href={'#'} target={"_blank"}>저장</a>
    </div>
  )
}

export default LodgingDetailTitle;