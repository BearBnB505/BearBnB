import React, {useState} from "react";
import {Breadcrumb} from "react-bootstrap";
import Aside from "./Members/Aside";
import MyName from "./Members/MyName";
import MyEmail from "./Members/MyEmail";
import MyTel from "./Members/MyTel";
import MyPwd from "./Members/MyPwd";
import { motion } from "framer-motion";
import Anima from "./animaData";

function Members(props) {
    const [name, setName] = useState(false);
    const [email, setEmail] = useState(false);
    const [tel, setTel] = useState(false);
    const [pwd, setPwd] = useState(false);

    return (
        <motion.div
            variants={Anima}
            initial="hidden"
            animate="visible"
            exit="exit" className={"container mt-5 show-center bg-lightRed"}>
            <div className={"row mb-5 ms-5"}>
                <Breadcrumb>
                    <Breadcrumb.Item href="/mypage">마이페이지</Breadcrumb.Item>
                    <Breadcrumb.Item active>본인정보 수정</Breadcrumb.Item>
                </Breadcrumb>
                <h3 className={"fw-bold"}>본인정보 수정</h3>
            </div>

            <div className={"row"}>
                <div className={"col-sm-6 mx-5 px-4"}>

                    <div className={"row d-flex justify-content-between"}>
                        <div className={"col-sm-9"}>
                            <p className={"fw-bold"}>실명</p>
                            <p className={"fw-lighter"}>주연 김</p>
                        </div>
                        <div className={"col-sm-3"}>
                            <button className={"btn btn-link float-end"} onClick={() => {
                                setName(!name);
                            }}>{name ? "취소" : "수정"}</button>
                        </div>
                        {name && <MyName/>}
                    </div>
                    <hr/>

                    <div className={"row d-flex justify-content-between"}>
                        <div className={"col-sm-9"}>
                            <p className={"fw-bold"}>이메일 주소</p>
                            <p className={"fw-lighter"}>gradispo@gmail.com</p>
                        </div>
                        <div className={"col-sm-3"}>
                            <button className={"btn btn-link float-end"} onClick={() => {
                                setEmail(!email);
                            }}>{email ? "취소" : "수정"}</button>
                        </div>
                        {email && <MyEmail/>}
                    </div>
                    <hr/>

                    <div className={"row d-flex justify-content-between"}>
                        <div className={"col-sm-9"}>
                            <p className={"fw-bold"}>전화번호</p>
                            <p className={"fw-lighter"}>+82 010-8020-5246</p>
                        </div>
                        <div className={"col-sm-3"}>
                            <button className={"btn btn-link float-end"} onClick={() => {
                                setTel(!tel);
                            }}>{tel ? "취소" : "수정"}</button>
                        </div>
                        {tel && <MyTel/>}
                    </div>
                    <hr/>

                    <div className={"row d-flex justify-content-between"}>
                        <div className={"col-sm-9"}>
                            <p className={"fw-bold"}>비밀번호</p>
                            <p className={"fw-lighter"}>*******</p>
                        </div>
                        <div className={"col-sm-3"}>
                            <button className={"btn btn-link float-end"} onClick={() => {
                                setPwd(!pwd);
                            }}>{pwd ? "취소" : "수정"}</button>
                        </div>
                        {pwd && <MyPwd/>}
                    </div>
                    <hr/>
                </div>

                <div className={"col-4 mb-5 px-5"}>
                    <Aside/>
                </div>


            </div>
        </motion.div>
    )
}

const styles = {
    a: {
        textDecoration: "none",
        color: "black",
    },
}

export default Members;

