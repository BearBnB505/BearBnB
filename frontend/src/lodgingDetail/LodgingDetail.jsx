import React, {createContext, useEffect, useState} from "react";
import HostImg from "./Img/HostImg";
import HouseExplain from "./explain/HouseExplain";
import HostHouse from "./bedroom/HostHouse";
import LodgingDetailTitle from "./Title/LodgingDetailTitle";
import DetailAmenity from "./Amenity/DetailAmenity";
import HostIntroduce from "./host/HostIntroduce";
import ReviewAverage from "./review/ReviewAverage";
import Payment from "./payment/Payment";
import axios from "axios";
import {useParams} from "react-router";

function LodgingDetail(props) {

    const [lodging, setLodging] = useState([]);
    const [photo, setPhoto] = useState([]);
    const [review, setReview] = useState([]);
    const [comforts, setComforts] = useState([]);
    const [members, setMembers] = useState([]);
    const {idx} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/lodgingDetail/${idx}`)
            .then((req) => {
                const {data} = req;
                console.log(data);
                setLodging(data.lodging);
                setPhoto(data.photo);
                setReview(data.review);
                setComforts(data.comforts);
                setMembers(data.members);
            })
            .catch((err) => {
                console.log("통신 오류");
            })
    }, []);

    return (
        <div style={{display: "grid", justifyContent: "center"}}>

            <div className={'mx-auto'} style={{width: 1230}}>
                <LodgingDetailTitle idx={lodging.idx} lodgingName={lodging.lodgingName} addr={lodging.addr}/>
                <HostImg/>
                {/*<div className={'DetailGridBox'}>*/}
                <div className={'row'}>
                    <div className={'col-7 me-5'}>
                        <HouseExplain introLodging={lodging.introLodging}/>
                        <HostHouse bedroomNum={lodging.bedroomNum} bedNum={lodging.bedNum}
                                   bathroomNum={lodging.bathroomNum}/>
                        <DetailAmenity/>
                    </div>

                    {/*<div className={'MovePayment'}>*/}
                    <div className={'col ms-4 me-5 mt-5'}>
                        <Payment cost={lodging.cost}/>
                    </div>
                </div>
                <ReviewAverage />
                <HostIntroduce userId={lodging.userId} joinDt={members.joinDt}/>
            </div>

        </div>
    )
}

export default LodgingDetail;
