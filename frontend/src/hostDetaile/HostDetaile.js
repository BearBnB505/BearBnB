import React from "react";
import HostImg from "./HostImg";
import HostDetaileTitle from "./HostDetaileTitle";
import HouseExplain from "./HouseExplain";
import HostHouse from "./HostHouse";

function HostDetaile(){

  return(
    <div style={{display:"grid", justifyContent:"center"}}>
      <HostDetaileTitle/>
      <HostImg/>
      <HouseExplain/>
      <HostHouse/>
    </div>
  )
}

export default HostDetaile;