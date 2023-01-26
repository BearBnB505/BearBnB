import React from "react";
import HostInfoTitle from "./HostInfoTitle";
import HostInfoContents from "./HostInfoContents";
import './HostInfo.css'



const HostInfo=()=>{
  return(
    <div style={{display:"grid", justifyContent:"center"}}>
      <HostInfoTitle/>
      <HostInfoContents/>
    </div>
  )
}

export default HostInfo;