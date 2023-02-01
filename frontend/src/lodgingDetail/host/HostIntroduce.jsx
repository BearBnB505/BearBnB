import React from "react";
import HostInroTitle from "./HostInroTitle";
import HostAvg from "./HostAvg";
import HostIntroContents from "./HostIntroContents";

function HostIntroduce(props){
  return(
    <div>
      <HostInroTitle userId={props.userId} joinDt={props.joinDt}/>
      <HostAvg/>
      <HostIntroContents/>

    </div>

  )
}

export default HostIntroduce;