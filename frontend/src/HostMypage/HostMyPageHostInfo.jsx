import React, {useState} from "react";
import {Breadcrumb} from "react-bootstrap";
import { motion } from "framer-motion";
import Anima from "../Mypage/animaData";
import MyLanguages from "./HostMembers/MyLanguages";
import MyIntoduce from "./HostMembers/MyIntoduce";

function HostMyPageHostInfo(props) {
    const [onClickLanguage, setOnClickLanguage] = useState(false);
    const [onClickIntroduce, setOnClickIntroduce] = useState(false);

    return (
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
                            {/*<p className={"fw-lighter"}>주연 김</p>*/}
                        </div>
                        <div className={"col-sm-3"}>
                            <button className={"btn btn-link float-end"} onClick={() => {
                                setOnClickLanguage(!onClickLanguage);
                            }}>{onClickLanguage ? "취소" : "수정"}</button>
                        </div>
                        {onClickLanguage && <MyLanguages/>}
                    </div>
                    <hr/>
                    {/*호스트 본인 소개*/}
                    <div className={"row d-flex justify-content-between"}>
                        <div className={"col-sm-9"}>
                            <p className={"fw-bold"}>본인 소개</p>
                            {/*<p className={"fw-lighter"}>주연 김</p>*/}
                        </div>
                        <div className={"col-sm-3"}>
                            <button className={"btn btn-link float-end"} onClick={() => {
                                setOnClickIntroduce(!onClickIntroduce);
                            }}>{onClickIntroduce ? "취소" : "수정"}</button>
                        </div>
                        {onClickIntroduce && <MyIntoduce/>}
                    </div>
                    <hr/>


                {/*    <div className={"row d-flex justify-content-between"}>*/}
                {/*        <div className={"col-sm-9"}>*/}
                {/*            <p className={"fw-bold"}>이메일 주소</p>*/}
                {/*            <p className={"fw-lighter"}>gradispo@gmail.com</p>*/}
                {/*        </div>*/}
                {/*        <div className={"col-sm-3"}>*/}
                {/*            <button className={"btn btn-link float-end"} onClick={() => {*/}
                {/*                setEmail(!email);*/}
                {/*            }}>{email ? "취소" : "수정"}</button>*/}
                {/*        </div>*/}
                {/*        {email && <MyEmail/>}*/}
                {/*    </div>*/}
                {/*    <hr/>*/}

                {/*    <div className={"row d-flex justify-content-between"}>*/}
                {/*        <div className={"col-sm-9"}>*/}
                {/*            <p className={"fw-bold"}>전화번호</p>*/}
                {/*            <p className={"fw-lighter"}>+82 010-8020-5246</p>*/}
                {/*        </div>*/}
                {/*        <div className={"col-sm-3"}>*/}
                {/*            <button className={"btn btn-link float-end"} onClick={() => {*/}
                {/*                setTel(!tel);*/}
                {/*            }}>{tel ? "취소" : "수정"}</button>*/}
                {/*        </div>*/}
                {/*        {tel && <MyTel/>}*/}
                {/*    </div>*/}
                {/*    <hr/>*/}

                {/*    <div className={"row d-flex justify-content-between"}>*/}
                {/*        <div className={"col-sm-9"}>*/}
                {/*            <p className={"fw-bold"}>비밀번호</p>*/}
                {/*            <p className={"fw-lighter"}>*******</p>*/}
                {/*        </div>*/}
                {/*        <div className={"col-sm-3"}>*/}
                {/*            <button className={"btn btn-link float-end"} onClick={() => {*/}
                {/*                setPwd(!pwd);*/}
                {/*            }}>{pwd ? "취소" : "수정"}</button>*/}
                {/*        </div>*/}
                {/*        {pwd && <MyPwd/>}*/}
                {/*    </div>*/}
                {/*    <hr/>*/}
                {/*</div>*/}

                {/*<div className={"col-4 mb-5 px-5"}>*/}
                {/*    <Aside/>*/}
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

export default HostMyPageHostInfo;

