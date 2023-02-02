import React from "react";

function HostAvg(props){
  return(
    <div className={'HostAvgBox'}>
      <div>&#x2B50;{props.reviewTotal}</div>
      <div style={{marginLeft:-10}}>후기: </div>
      <div style={{marginLeft:-5}}>{props.reviewCount} 개</div>
    </div>
  )
}

export default HostAvg;