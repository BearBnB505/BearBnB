import React from "react";

function HostAvg(props){
  return(
    <div className={'HostAvgBox'}>
      <div >&#x2B50;{props.reviewTotal}</div>
      <div >후기: </div>
      <div >{props.reviewCount}개</div>
    </div>
  )
}

export default HostAvg;