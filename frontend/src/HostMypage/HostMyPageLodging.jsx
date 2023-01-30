import React from "react";
import {Breadcrumb, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faPencil} from "@fortawesome/free-solid-svg-icons";
import Anima from "../Mypage/animaData";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";

const complain = [
    {idx: 1, lodging_name: "바다가 보이는 아름다운 집", state:<button className={'btn btn-primary'}>승인완료</button>, bedroom: 2, bed: 2, bathroom:1, location : "부산 해운대", last_update:"2022-12-03"},
    {idx: 2, lodging_name: "산이 한 눈에 보이는 집", state:<button className={'btn btn-danger'}>심사 중</button>, bedroom: 3, bed: 4, bathroom:2, location : "경기도 오산", last_update:"2022-12-06"},
]

function HostMyPageLodging() {
    return (
        <motion.div variants={Anima}
                    initial="hidden"
                    animate="visible"
                    exit="exit" className={"container mx-auto mt-5"}>
            <div className={"mb-5"}>
                <Breadcrumb>
                    <Breadcrumb.Item href="/hostMyPageMain">호스트마이페이지</Breadcrumb.Item>
                    <Breadcrumb.Item href="/HostMyPageLodging" active>숙소관리</Breadcrumb.Item>
                </Breadcrumb>
                <div className={'row'}>
                    <h2 className={"fw-bold col-10"}>숙소관리</h2>
                    <Link to={"/lodgingWelcome"} className={'col-2'}><button className={"btn btn-primary"}>새로운 숙소 등록하기</button></Link>
                </div>

            </div>

            <table className={"table table-hover table-striped"}>
                <thead className={'text-center'}>
                <tr>
                    <th>번호</th>
                    <th>숙소명</th>
                    <th>상태</th>
                    <th>침실</th>
                    <th>침대</th>
                    <th>욕실</th>
                    <th>위치</th>
                    <th>최종수정일</th>
                </tr>
                </thead>
                <tbody className={'text-center'}>
                {complain.map((item) => {
                    return <ComplainList idx={item.idx} lodging_name={item.lodging_name} state={item.state} bed={item.bed} bedroom={item.bedroom} bathroom={item.bathroom} location={item.location} last_update={item.last_update}/>
                })}
                </tbody>
            </table>

            {/*<div>*/}
            {/*    <button type="button" className="btn btn-outline-secondary btn-sm my-2 me-2" title="Edit">*/}
            {/*        <span><FontAwesomeIcon icon={faPencil} size="1x"/> 신고수정</span>*/}
            {/*    </button>*/}
            {/*    <button type="button" className="btn btn-outline-secondary btn-sm my-2" title="Edit">*/}
            {/*        <span><FontAwesomeIcon icon={faClose} size="1x"/> 신고삭제</span>*/}
            {/*    </button>*/}
            {/*</div>*/}

        </motion.div>
    )
}

export default HostMyPageLodging;

function ComplainList({idx, lodging_name, state, bedroom, bed,bathroom,location,last_update }) {
    return (
        <tr>
            <td>{idx}</td>
            <td>{lodging_name}</td>
            <td>{state}</td>
            <td>{bedroom}</td>
            <td>{bed}</td>
            <td>{bathroom}</td>
            <td>{location}</td>
            <td>{last_update}</td>
        </tr>
    )
}