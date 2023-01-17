
import React from "react";
import HostImg from "./Img/HostImg";
import HouseExplain from "./explain/HouseExplain";
import HostHouse from "./bedroom/HostHouse";
import HostDetailTitle from "./Title/HostDetailTitle";
import DetailAmenity from "./Amenity/DetailAmenity";
import HostIntroduce from "./host/HostIntroduce";
import ReviewAverage from "./review/ReviewAverage";
import Payment from "./payment/Payment";

function HostDetail(){

  return(
    // <div className={'container mx-auto'}>
    <div style={{display:"grid", justifyContent:"center"} }>
      <HostDetailTitle/>
      <HostImg/>
      <HouseExplain/>
      <div className={'DetailGridBox'}>
        <HostHouse/>
        <div className={'MovePayment'}>
          <Payment/>
        </div>
        <DetailAmenity/>
      </div>
      <ReviewAverage/>
      <HostIntroduce/>
    </div>
  )
}

export default HostDetail;