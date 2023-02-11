import React from "react";
import HostIntroTitle from "./HostIntroTitle";
import HostAvg from "./HostAvg";
import HostIntroContents from "./HostIntroContents";

function HostIntroduce({lodging,avg,members}){
  return(
    <div>
      <HostIntroTitle userId={members.userId} joinDt={members.joinDt}/>
      <HostAvg reviewCount={avg.reviewCount} reviewTotal={avg.reviewTotal}/>
      <HostIntroContents introHost={lodging.introHost}/>
    </div>
  )
}

export default HostIntroduce;