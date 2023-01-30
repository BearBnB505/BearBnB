
import React from "react";
import HostImg from "./Img/HostImg";
import HouseExplain from "./explain/HouseExplain";
import HostHouse from "./bedroom/HostHouse";
import LodgingDetailTitle from "./Title/LodgingDetailTitle";
import DetailAmenity from "./Amenity/DetailAmenity";
import HostIntroduce from "./host/HostIntroduce";
import ReviewAverage from "./review/ReviewAverage";
import Payment from "./payment/Payment";

function LodgingDetail(){

    return(
        <div style={{display:"grid", justifyContent:"center", width: 1900}}>
            <div className={'mx-auto'} style={{width: 1230}}>
                <LodgingDetailTitle/>
                <HostImg/>
                {/*<div className={'DetailGridBox'}>*/}
                <div className={'row'}>
                    <div className={'col-7 me-5'}>
                        <HouseExplain/>
                        <HostHouse/>
                        <DetailAmenity/>
                    </div>

                    {/*<div className={'MovePayment'}>*/}
                    <div className={'col ms-4 me-5 mt-5'}>
                        <Payment/>
                    </div>
                </div>
                <ReviewAverage/>
                <HostIntroduce/>
            </div>

        </div>
    )
}

export default LodgingDetail;