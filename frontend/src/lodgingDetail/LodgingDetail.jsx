import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
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


function LodgingDetail(props) {

    const [lodging, setLodging] = useState([]);
    const [photo, setPhoto] = useState([]);
    const [review, setReview] = useState([]);
    const [avg, setAvg] = useState([]);
    const [comforts, setComforts] = useState([]);
    const [members, setMembers] = useState([]);
    const {idx} = useParams();

    let [chooseDate, setChooseDate] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/lodgingDetail/${idx}`)
            .then((req) => {
                const {data} = req;
                console.log(data);
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

    return (
        <>
            <div style={{display: "grid", justifyContent: "center", width: 1900}}>
                <div className={'mx-auto'} style={{width: 1230}}>

                    <LodgingDetailTitle lodging={lodging} review={review} avg={avg}/>

                    <PhotoContext.Provider>
                        <HostImg photo={photo}/>
                    </PhotoContext.Provider>

                    <div className={'row'}>
                        <div className={'col-7 me-5'}>
                            <HouseExplain lodging={lodging}/>
                            <HostHouse lodging={lodging}/>

                            <DetailAmenityContext.Provider value={comforts}>
                                <DetailAmenity/>
                            </DetailAmenityContext.Provider>

                            <div className={"pt-5"}>
                                <hr className={"py-5"}/>
                                <Calendar dateValue={setChooseDate}/>
                            </div>
                        </div>

                        <div className={'col ps-4 mt-5'}>
                            <Payment lodging={lodging}/>
                        </div>
                    </div>

                    <ReviewTitle avg={avg}/>
                    <ReviewAverageForm avg={avg}/>

                    <ReviewContext.Provider value={review}>
                        <AvgContext.Provider value={avg}>
                            <ReviewAverage avg={avg}/>
                        </AvgContext.Provider>
                    </ReviewContext.Provider>

                    <div className={"pt-4"}>
                        <div className={"pb-4"}>
                            <h4 className={"fw-bold mb-4"}>위치</h4>

                            {/*<Map/>*/}
                        </div>
                    </div>

                    <HostIntroduce lodging={lodging} members={members} avg={avg}/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default LodgingDetail;
