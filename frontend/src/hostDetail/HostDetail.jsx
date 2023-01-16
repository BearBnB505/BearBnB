
import React from "react";
import HostImg from "./HostImg";
import HouseExplain from "./HouseExplain";
import HostHouse from "./HostHouse";
import HostDetailTitle from "./HostDetailTitle";
import DetailAmenity from "./DetailAmenity";
import HostIntroduce from "./HostIntroduce";

function HostDetail(){

  return(
    <div style={{display:"grid", justifyContent:"center"}}>
      <HostDetailTitle/>
      <HostImg/>
      <HouseExplain/>
      <HostHouse/>
      <DetailAmenity/>
      <HostIntroduce/>
    </div>
  )
}

export default HostDetail;