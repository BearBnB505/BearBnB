import React, {useEffect, useState} from "react";
import {Breadcrumb} from "react-bootstrap";
import { motion } from "framer-motion";
import Anima from "../Mypage/animaData";
import MyLanguages from "./HostMembers/MyLanguages";
import MyIntoduce from "./HostMembers/MyIntoduce";
import axios from "axios";
import {useLocation} from "react-router";
import {Auth} from "../Auth/Auth";

function HostMyPageHostInfo(props) {

    const { userId } = Auth();

    const [onClickLanguage, setOnClickLanguage] = useState(false);
    const [onClickIntroduce, setOnClickIntroduce] = useState(false);

    const [language, setLanguage] = useState('');
    const [introHost, setIntroHost] = useState('');

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const check = sessionStorage.getItem('check');
    const getHostInfo = () =>{
        setTimeout(()=>{
            axios.get('http://localhost:8080/AllLodgingList/', {params:{userId: userId}})
                .then((req) => {
                    const {data} = req;
                    setData(data);
                    setLanguage(data[0].language)
                    setIntroHost(data[0].introHost)
                    console.log('숙소정보데이터 가져오기')
                    console.log(data);
                })
                .catch((err) => {
                    console.log("통신 오류");
                    console.log(err);
                })
        },300);
    }

    useEffect(()=>{
        if(check == 'done'){
            getHostInfo();
            return () => clearTimeout(getHostInfo());
    }
    },[check]);

    useEffect(()=>{
        const timer = setTimeout(() => {
            setIsLoaded(true);
        },1800);
        return () => clearTimeout(timer);
    }, []);



    return isLoaded ? (
        <motion.div
            variants={Anima}
            initial="hidden"
            animate="visible"
            exit="exit" className={"container mt-5 show-center bg-lightRed"}>
            <div className={"row mb-5 ms-5"}>
                <Breadcrumb>
                    <Breadcrumb.Item href="/hostMyPageMain">호스트마이페이지</Breadcrumb.Item>
                    <Breadcrumb.Item active>호스트 정보 수정</Breadcrumb.Item>
                </Breadcrumb>
                <h3 className={"fw-bold"}>호스트 정보 수정</h3>
            </div>
            <div className={"row"}>
                <div className={"col-sm-6 mx-5 px-4"}>
                    {/*사용가능 언어*/}
                    <div className={"row d-flex justify-content-between"}>
                        <div className={"col-sm-9"}>
                            <p className={"fw-bold"}>사용가능 언어</p>
                            <p className={"fw-lighter"}>{language}</p>
                        </div>
                        <div className={"col-sm-3"}>
                            <button className={"btn btn-link float-end"} onClick={() => {
                                setOnClickLanguage(!onClickLanguage);
                            }}>{onClickLanguage ? "취소" : "수정"}</button>
                        </div>
                        {onClickLanguage && <MyLanguages language={language} setLanguage={setLanguage} userId={userId}/>}
                    </div>
                    <hr/>
                    {/*호스트 본인 소개*/}
                    <div className={"row d-flex justify-content-between"}>
                        <div className={"col-sm-9"}>
                            <p className={"fw-bold"}>본인 소개</p>
                            <p className={"fw-lighter"}>{introHost}</p>
                        </div>
                        <div className={"col-sm-3"}>
                            <button className={"btn btn-link float-end"} onClick={() => {
                                setOnClickIntroduce(!onClickIntroduce);
                            }}>{onClickIntroduce ? "취소" : "수정"}</button>
                        </div>
                        {onClickIntroduce && <MyIntoduce userId={userId} introHost={introHost} setIntroHost = {setIntroHost}/>}
                    </div>
                    <hr/>
                </div>
            </div>
        </motion.div>
    ) : <></>
}

const styles = {
    a: {
        textDecoration: "none",
        color: "black",
    },
}

export default HostMyPageHostInfo;

