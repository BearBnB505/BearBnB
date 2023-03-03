import React, {useEffect, useState} from "react";
import "./Style.css";
import styled from "styled-components";
import Card from "./Card";
import {
    faCamera, faUser, faHeart, faCalendarCheck,
    faCalendarMinus, faUserCog, faList, faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import {Link, Outlet} from "react-router-dom";
import Anima from "./animaData";
import {motion} from "framer-motion";
import axios from "axios";
import {Auth} from "../Auth/Auth";


function Mypage(props) {

    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    const { userId } = Auth();
    // console.log(userId);
    const check = sessionStorage.getItem('check');
    // console.log(check);

    const getUserData = () => {
        setTimeout(() => {
            axios.put('http://localhost:8080/Members', null, {params: {userId: userId}})
                .then((req) => {
                    const {data} = req;
                    setData(data);
                    // console.log(data);
                    // setIsLoaded(true);
                    sessionStorage.setItem('check', 'pause');
                })
                .catch((err) => {
                    console.log("통신 오류");
                    console.log(err);
                })
        }, 50);
    }

    useEffect(() => {
        if (check == 'done') {
            getUserData();
            return () => clearTimeout(getUserData);
        }
    }, [check]);


    useEffect(()=>{
        const timer = setTimeout(() => {
            setIsLoaded(true);
        },350);
        return () => clearTimeout(timer);
    }, []);


    return isLoaded ? (
        <motion.div variants={Anima}
                    initial="hidden"
                    animate="visible"
                    exit="exit" className={"container mt-5"}>

                    <div className={"row p-2 mb-5"}>
                        <h2 className={"fw-bold"}>마이페이지</h2>
                        <h5>
                            <div className={'MyFrame'}>

                                <strong>{data[0].name}&nbsp;&nbsp;</strong>
                                {userId}&nbsp;&nbsp;
                                <Link to={"/myPageProfile"}><strong>· 프로필로 이동</strong></Link>
                            </div>

                        </h5>
                    </div>

            <div className={"row"}>
                <Link to={`/members`}   className="col-sm-6 col-md-6 col-lg-4">
                    <Card id={"1"} icon={faUser} title={"본인정보 수정"} content={"성별, 이메일, 전화번호를 수정합니다"}/>
                </Link>

                <Link to={`/review`}   className="col-sm-6 col-md-6 col-lg-4">
                    <Card id={"2"} icon={faCamera} title={"후기 관리"} content={"후기 내역을 확인, 수정, 삭제합니다"}/>
                </Link>

                <Link to={`/keeping`}   className="col-sm-6 col-md-6 col-lg-4">
                    <Card id={"3"} icon={faHeart} title={"찜한 숙소 목록"} content={"내가 찜한 숙소 목록을 보여줍니다"}/>
                </Link>

                <Link to={`/bookingConfirm`}   className="col-sm-6 col-md-6 col-lg-4">
                    <Card id={"4"} icon={faCalendarCheck} title={"예약내역 확인"} content={"내가 예약한 숙박 내역을 확인합니다"}/>
                </Link>

                <Link to={`/bookingCancel`}  className="col-sm-6 col-md-6 col-lg-4">
                    <Card id={"5"} icon={faCalendarMinus} title={"예약취소 확인"} content={"내가 예약 취소한 내역을 확인합니다"}/>
                </Link>

                <Link to={`/hostMyPageMain`}   className="col-sm-6 col-md-6 col-lg-4">
                    <Card id={"6"} icon={faUserCog} title={"호스트"} content={"숙소 관리, 예약, 매출, 대금 신청"}/>
                </Link>

                <Link to={`/complain`}   className="col-sm-6 col-md-6 col-lg-4">
                    <Card id={"7"} icon={faList} title={"신고 내역 확인"} content={"내가 신고한 내역을 확인합니다"}/>
                </Link>

                <Link to={`/membersDel`}   className="col-sm-6 col-md-6 col-lg-4">
                    <Card id={"8"} icon={faRightFromBracket} title={"회원 탈퇴"} content={"비밀번호 확인후 회원을 탈퇴합니다"}/>
                </Link>
            </div>
            <Outlet/>
        </motion.div>
    ) : <></>
}

function createCard(props) {
    return (<Card
        key={Card.id}
        icon={Card.icon}
        title={Card.title}
        content={Card.content}
    />)
}

export default Mypage;