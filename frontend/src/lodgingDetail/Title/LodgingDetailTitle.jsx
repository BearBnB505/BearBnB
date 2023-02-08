import React from "react";
import '../lodgingDetail.css';
import {faHeart,faArrowUpFromBracket} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function LodgingDetailTitle(props){
  return(
    // <div className={'oneLine'}>
    //   <div className={'TLine1'}>{props.lodgingName}</div>
    //   <div>&#x2B50;{props.reviewTotal}</div>
    //
    //   <div className={'aTag'}></div>
    //   <div>· {props.addr}</div>
    //   <div style={{fontWeight:"bold"}}>· 후기</div>
    //   <div>{props.reviewCount} 개</div>
    //   <a className={'aTag'} href={'#'} target={"_blank"}>공유하기</a>
    //   <a className={'aTag'} href={'#'} target={"_blank"}>저장</a>
    // </div>

      <div className={"row"}>
          <div className={"my-4"} style={{width: 1230}}>
              <div><h3><strong>{props.lodgingName}</strong></h3></div>
          <div></div>
          <ul style={styles.titleUl}>
              <li className={"float-start me-3"}>&#x2B50; {props.reviewTotal}</li>
              <li className={"float-start me-3"}>· {props.addr}</li>
              <li className={"float-start me-1"}>· 후기</li>
              <li className={"float-start"}>{props.reviewCount}개</li>
              <li className={"float-end ms-4"}><a href={'#'} target={"_blank"}><FontAwesomeIcon icon={faHeart} size="1x" /> 저장</a></li>
              <li className={"float-end"}><a href={'#'} target={"_blank"}><FontAwesomeIcon icon={faArrowUpFromBracket} size="1x" /> 공유하기</a></li>
          </ul>
      </div>
      </div>
  )
}

export default LodgingDetailTitle;

const styles = {
    titleUl: {
        // marginLeft: 12,
        // marginRight: -12,
        padding: 0,
        listStyleType: "none",
        fontSize: "17px",
    },
}