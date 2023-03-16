import React, {useEffect, useState} from "react";
import {Breadcrumb} from "react-bootstrap";
import {Link} from "react-router-dom";
import Aside from "./Members/Aside";
import MyName from "./Members/MyName";
import MyEmail from "./Members/MyEmail";
import MyTel from "./Members/MyTel";
import MyPwd from "./Members/MyPwd";
import { motion } from "framer-motion";
import Anima from "./animaData";
import axios from "axios";
import {useLocation} from "react-router";
import {Auth} from "../Auth/Auth";


function Members(props) {

    const { userId } = Auth();
    const check = sessionStorage.getItem('check');

    const [isLoaded, setIsLoaded] = useState(false);

    const [idx, setIdx] = useState('');
    const [name, setName] = useState('');

    const [openEmail, setOpenEmail] = useState(false);
    const [email, setEmail] = useState('');

    const [openTel, setOpenTel] = useState(false);
    const [tel, setTel] = useState('');

    const [openpwd, setOpenPwd] = useState(false);
    const [pwd, setPwd] = useState('');

    const [data, setData] = useState([]);

    const getUserData = () => {
        setTimeout(() => {
            axios.put('http://localhost:8080/getMemberData', null, {params: {userId: userId}})
                .then((req) => {
                    const {data} = req;
                    setData(data);
                    setEmail(data[0].userId);
                    setIdx(data[0].idx);
                    setTel(data[0].tel);
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
      data.map((item)=>{

          return (

            <motion.div

              variants={Anima}
              initial="hidden"
              animate="visible"
              exit="exit" className={"container mt-5 show-center bg-lightRed"}>
                <div className={"mb-5"}>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to={"../mypage"}>마이페이지</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>본인정보 수정</Breadcrumb.Item>
                    </Breadcrumb>
                    <h3 className={"fw-bold"}>본인정보 수정</h3>
                </div>

                <div className={"row mb-5"}>
                    <div className={"col-sm-12 col-lg-7"}>

                        <div className={"row"}>
                            <div className={"col-xs-10 col-sm-8"}>
                                <p className={"fw-bold"}>실명</p>
                                <p className={"fw-lighter"}>{item.name}</p>
                            </div>
                            <div className={"col-xs-1 col-sm-4"}>
                                <button className={"btn btn-link float-end text-decoration-none text-dark"} onClick={() => {
                                    setName(!name);
                                }}>{name ? "취소" : "수정"}</button>
                            </div>
                            {name && <MyName/>}
                        </div>
                        <hr/>

                        <div className={"row d-flex justify-content-between"}>
                            <div className={"col-sm-4"}>
                                <p className={"fw-bold"}>이메일 주소</p>
                                <p className={"fw-lighter"}>{email}</p>
                            </div>
                            <div className={"col-sm-4"}>
                                <button className={"btn btn-link float-end text-decoration-none text-dark"} onClick={() => {
                                    setOpenEmail(!openEmail);
                                }}>{openEmail ? "취소" : "수정"}</button>
                            </div>
                            {openEmail && <MyEmail idx={idx} setEmail={setEmail} email={email}/>}
                        </div>
                        <hr/>

                        <div className={"row d-flex justify-content-between"}>
                            <div className={"col-sm-4"}>
                                <p className={"fw-bold"}>전화번호</p>
                                <p className={"fw-lighter"}>{tel}</p>
                            </div>
                            <div className={"col-sm-4"}>
                                <button className={"btn btn-link float-end text-decoration-none text-dark"} onClick={() => {
                                    setOpenTel(!openTel);
                                }}>{openTel ? "취소" : "수정"}</button>
                            </div>
                            {openTel && <MyTel tel={tel} setTel={setTel} idx={idx}/>}
                        </div>
                        <hr/>

                        <div className={"row d-flex justify-content-between"}>
                            <div className={"col-sm-4"}>
                                <p className={"fw-bold"}>비밀번호</p>
                                <p className={"fw-lighter"}>*******</p>
                            </div>
                            <div className={"col-sm-4"}>
                                <button className={"btn btn-link float-end text-decoration-none text-dark"} onClick={() => {
                                    setOpenPwd(!openpwd);
                                }}>{openpwd ? "취소" : "수정"}</button>
                            </div>
                            {openpwd && <MyPwd pwd={pwd} setPwd={setPwd} idx={idx}/>}
                        </div>
                        <hr/>
                    </div>

                    <Aside/>

                </div>
            </motion.div>
          )
      })

    ) : <></>
}

const styles = {
    a: {
        textDecoration: "none",
        color: "black",
    },
}

export default Members;

