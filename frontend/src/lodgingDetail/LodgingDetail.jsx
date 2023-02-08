import React, {useEffect, useState} from "react";
import axios from "axios";
import PhotoContext from "./Context/PhotoContext";
import ReviewContext from "./Context/ReviewContext";
import AvgContext from "./Context/AvgContext";
import DetailAmenityContext from "./Context/DetailAmenityContext";


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
import ReviewAverageForm from "./review/ReviewAverageForm";
import ReviewTitle from "./review/ReviewTitle";
import Footer from "./Footer/Footer";

import {useLocation, useParams} from "react-router";
import moment from "moment/moment";


function LodgingDetail(props) {

    const [lodging, setLodging] = useState([]);
    const [photo, setPhoto] = useState([]);
    const [review, setReview] = useState([]);

    const [avg, setAvg] = useState([]);
    const [comforts, setComforts] = useState([]);
    const [members, setMembers] = useState([]);
    const {idx} = useParams();

    const [chooseDate, setChooseDate] = useState([null, null]);
    const [nightCount, setNightCount] = useState(0);

    let startDate = moment(chooseDate[0]).format('Y년 M월 D일');
    let endDate = moment(chooseDate[1]).format('Y년 M월 D일');


    const location = useLocation();
    const lat = parseFloat(location.state.lat);
    const lng = parseFloat(location.state.lng);

    // const [lat, setLat] = useState(0.0);
    // const [lng, setLng] = useState(0.0);

    useEffect(() => {
        axios.get(`http://localhost:8080/lodgingDetail/${idx}`)
            .then((req) => {
                const {data} = req;
                // console.log(data);
                setLodging(data.lodging);
                setPhoto(data.photo);
                setReview(data.review);
                setAvg(data.avg);
                setComforts(data.comforts);
                setMembers(data.members);
            })
            .catch((err) => {
                console.log("통신 오류");
            })
    }, []);

    // useEffect(() => {
    //     setNightCount(moment.duration(moment(chooseDate[1]).diff(moment(chooseDate[0]))).asDays());
    //     // console.log(moment.duration(moment(chooseDate[1]).diff(moment(chooseDate[0]))).asDays());
    //     console.log(chooseDate);
    // }, chooseDate);

    // console.log(nightCount);
    // console.log(lat);

    return (
        <>
            <div style={{display: "grid", justifyContent: "center", width: 1900}}>
                {/*<div style={{display: "grid", justifyContent: "center"}}>*/}

                <div className={'mx-auto'} style={{width: 1230}}>

                    <LodgingDetailTitle idx={lodging.idx} lodgingName={lodging.lodgingName} addr={lodging.addr} reviewCount={avg.reviewCount} reviewTotal={avg.reviewTotal}/>

                    <PhotoContext.Provider value={photo}>
                        <HostImg/>
                    </PhotoContext.Provider>

                    <div className={'row'}>
                        <div className={'col-7 me-5'}>
                            <HouseExplain introLodging={lodging.introLodging}/>
                            <HostHouse bedroomNum={lodging.bedroomNum} bedNum={lodging.bedNum} bathroomNum={lodging.bathroomNum}/>

                            <DetailAmenityContext.Provider value={comforts}>
                                <DetailAmenity/>
                            </DetailAmenityContext.Provider>

                        {/*<div className={"pt-5"}>*/}
                            <hr className={"pt-3 mt-5"}/>
                        {/*    <h4 className={"fw-bold mb-3"}>여기서 {isNaN(nightCount) ? '' : `${nightCount}박`}</h4>*/}
                        {/*    <div className={"text-start"}>*/}
                        {/*        <input type="text" id={"checkIn"} className={"fs-6 text-muted border-0 p-0"} style={{width: 300}} placeholder={"날짜 추가"} value={startDate === 'Invalid date' ? '' : `${startDate} - ${endDate}`}/>*/}
                        {/*    </div>*/}

                        {/*    <Calendar dateValue={setChooseDate} />*/}
                        </div>


                        <div className={'col ms-4 me-5 mt-5'} style={{zIndex:2}}>
                            {/*<Payment cost={lodging.cost} chooseDate={chooseDate} nightCount={nightCount}/>*/}
                            <Payment cost={lodging.cost}/>
                        </div>
                    </div>

                    <ReviewTitle reviewCount={avg.reviewCount} reviewTotal={avg.reviewTotal}/>
                    <ReviewAverageForm cleanGrade={avg.cleanGrade} accuracyGrade={avg.accuracyGrade} communicationGrade={avg.communicationGrade} locationGrade={avg.locationGrade} checkInGrade={avg.checkInGrade} costGrade={avg.costGrade}/>

                    <ReviewContext.Provider value={review}>
                        <AvgContext.Provider value={avg}>
                            <ReviewAverage reviewCount={avg.reviewCount}/>
                        </AvgContext.Provider>
                    </ReviewContext.Provider>

                    <div className={"pt-4"}>
                        <div className={"pb-4"}>
                            <h4 className={"fw-bold mb-4"}>위치</h4>

                            <Map lat={lat} lng={lng} />
                        </div>
                        <hr/>
                    </div>

                    <HostIntroduce userId={lodging.userId} joinDt={members.joinDt} introHost={lodging.introHost} reviewCount={avg.reviewCount} reviewTotal={avg.reviewTotal}/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default LodgingDetail;
