import React from "react";
import HostIntroTitle from "./HostIntroTitle";
import HostAvg from "./HostAvg";
import HostIntroContents from "./HostIntroContents";

function HostIntroduce(props){
  return(
    <div>

      <HostIntroTitle userId={props.userId} joinDt={props.joinDt}/>
      <HostAvg reviewCount={props.reviewCount} reviewTotal={props.reviewTotal}/>
      <HostIntroContents introHost={props.introHost}/>

    </div>

  )
}

export default HostIntroduce;