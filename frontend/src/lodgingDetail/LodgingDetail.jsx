import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router";
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
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {contacts} from "../lodging_reg/Reducers/ContactHostReducer";
import {useNavigate} from "react-router-dom";


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
    const [image, setImage] = useState([]);

    let startDate = moment(chooseDate[0]).format('Y년 M월 D일');
    let endDate = moment(chooseDate[1]).format('Y년 M월 D일');



    const location = useLocation();
    const lat = parseFloat(location.state.lat);
    const lng = parseFloat(location.state.lng);
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        axios.get(`http://localhost:8080/lodgingDetail/${idx}`)
            .then((req) => {
                const {data} = req;
                // console.log(data);
                console.log('통신성공');
                setLodging(data.lodging);
                // setPhoto(data.photo);
                setReview(data.review);
                setAvg(data.avg);
                setComforts(data.comforts);
                setMembers(data.members);

            })
            .catch((err) => {
                console.log("통신 오류");
            })
    }, []);

    // 숙소상세페이지 이미지 불러오기
    useEffect(()=>{
        axios.put('http://localhost:8080/lodgingDetailImage',null,{params: {idx:idx}})
            .then((req)=>{
                console.log('숙소상세페이지 이미지 통신 성공')
                console.log(req);
                setImage(req);
            })
            .catch((error)=>{
                console.log('숙소상세페이지 이미지 통신 오류')
                console.log(error)
            })
    },[])

    //이미지 url 테스트
    // const imageList = image;
    // console.log('이미지 url 추출')
    // console.log(imageList.photo);



    const contact = useSelector((state)=>state.contact.value);
    const navigate = useNavigate();
    const onClickContact = () =>{

        dispatch(contacts({contact:members.userId}))
        navigate("/hostInfo")
    }

    return (
        <>
            <div style={{display: "grid", justifyContent: "center", width: 1900}}>
                <div className={'mx-auto'} style={{width: 1230}}>

                    <LodgingDetailTitle lodging={lodging} review={review} avg={avg}/>

                    <PhotoContext.Provider>
                        <HostImg photo={image}/>
                    </PhotoContext.Provider>

                    <div className={'row'}>
                        <div className={'col-7 me-5'}>
                            <HouseExplain lodging={lodging}/>
                            <HostHouse lodging={lodging}/>

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
                            <Payment cost={lodging.cost} lodgingName={lodging.lodgingName} lodgingNum={lodging.lodgingNum}/>
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

                            <Map lat={lat} lng={lng} />
                        </div>
                        <hr/>
                    </div>

                    <HostIntroduce lodging={lodging} members={members} avg={avg}/>
                    <button className={'btn btn-outline-dark fw-bold'} style={{padding:"15px", marginLeft:"670px", marginBottom:"150px"}} onClick={onClickContact}>호스트에게 연락하기</button>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default LodgingDetail;