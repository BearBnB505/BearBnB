import React, {useEffect, useState} from "react";

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

import axios from "axios";
import {useParams} from "react-router";


function LodgingDetail(props) {

    const [lodging, setLodging] = useState([]);
    const [photo, setPhoto] = useState([]);
    const [review, setReview] = useState([]);
    const [comforts, setComforts] = useState([]);
    const [members, setMembers] = useState([]);
    const {idx} = useParams();

    const [chooseDate, setChooseDate] = useState([]);
    // const [lat, setLat] = useState(0);
    // const [lng, setLng] = useState(0);


    useEffect(() => {
        axios.get(`http://localhost:8080/lodgingDetail/${idx}`)
            .then((req) => {
                const {data} = req;
                console.log(data);
                setLodging(data.lodging);
                // setPhoto(data.photo);
                // setReview(data.review);
                // setComforts(data.comforts);
                setMembers(data.members);

                // setLat(data.lodging.latitude);
                // setLng(data.lodging.longitude);
                // console.log(data.lodging.latitude);

            })
            .catch((err) => {
                console.log("통신 오류");
            })
    }, []);


    return(
        <div style={{display:"grid", justifyContent:"center", width: 1900}}>
        {/*<div style={{display: "grid", justifyContent: "center"}}>*/}

            <div className={'mx-auto'} style={{width: 1230}}>
                <LodgingDetailTitle idx={lodging.idx} lodgingName={lodging.lodgingName} addr={lodging.addr}/>
                <HostImg/>
                <div className={'row'}>
                    <div className={'col-7 me-5'}>
                        <HouseExplain introLodging={lodging.introLodging}/>
                        <HostHouse bedroomNum={lodging.bedroomNum} bedNum={lodging.bedNum}
                                   bathroomNum={lodging.bathroomNum}/>
                        <DetailAmenity/>
                        <div className={"pt-5"}>
                            <hr className={"py-5"}/>
                            <Calendar dateValue={setChooseDate} />
                        </div>

                    </div>

                    <div className={'col ms-4 me-5 mt-5'}>
                        <Payment cost={lodging.cost}/>
                    </div>
                </div>
                <ReviewAverage/>
                <div className={"pt-4"}>
                    <div className={"pb-4"}>
                        <h4 className={"fw-bold mb-4"}>위치</h4>
                        
                        <Map lat={parseFloat(lodging.latitude)} lng={parseFloat(lodging.longitude)}/>
                    </div>
                    <hr/>
                </div>

                <HostIntroduce userId={lodging.userId} joinDt={members.joinDt}/>
            </div>

        </div>
    )
}

export default LodgingDetail;
