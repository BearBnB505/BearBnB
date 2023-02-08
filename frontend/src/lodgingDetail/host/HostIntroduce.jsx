import React from "react";
import HostInroTitle from "./HostInroTitle";
import HostAvg from "./HostAvg";
import HostIntroContents from "./HostIntroContents";

function HostIntroduce(props){
  return(
    <div>
      <HostInroTitle userId={props.userId} joinDt={props.joinDt}/>
      <HostAvg reviewCount={props.reviewCount} reviewTotal={props.reviewTotal}/>
      <HostIntroContents introHost={props.introHost}/>

    </div>

  )
}

export default HostIntroduce;