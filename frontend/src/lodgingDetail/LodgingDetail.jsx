import React, {useState} from "react";
import HostImg from "./Img/HostImg";
import HouseExplain from "./explain/HouseExplain";
import HostHouse from "./bedroom/HostHouse";
import LodgingDetailTitle from "./Title/LodgingDetailTitle";
import DetailAmenity from "./Amenity/DetailAmenity";
import HostIntroduce from "./host/HostIntroduce";
import ReviewAverage from "./review/ReviewAverage";
import Payment from "./payment/Payment";
import Calendar from "../Calendar/Calendar";
import Map from "../GoogleMap/Map";

function LodgingDetail() {

    let [chooseDate, setChooseDate] = useState([]);

    return(
        <div style={{display:"grid", justifyContent:"center", width: 1900}}>
            <div className={'mx-auto'} style={{width: 1230}}>
                <LodgingDetailTitle/>
                <HostImg/>
                <div className={'row'}>
                    <div className={'col-7 me-5'}>
                        <HouseExplain/>
                        <HostHouse/>
                        <DetailAmenity/>
                        <div className={"pt-5"}>
                            <hr className={"py-5"}/>
                            <Calendar dateValue={setChooseDate} />
                        </div>

                    </div>

                    <div className={'col ms-4 me-5 mt-5'}>
                        <Payment/>
                    </div>
                </div>
                <ReviewAverage/>
                <div className={"pt-4"}>
                    <div className={"pb-4"}>
                        <h4 className={"fw-bold mb-4"}>위치</h4>
                        
                        {/*<Map/>*/}
                    </div>
                    <hr/>
                </div>
                <HostIntroduce/>
            </div>

        </div>
    )
}

export default LodgingDetail;