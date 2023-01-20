import React from "react";
import {Breadcrumb, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faPencil} from "@fortawesome/free-solid-svg-icons";
import Anima from "./animaData";
import { motion } from "framer-motion";

const complain = [
    {idx: 1, lodging_num: "1521", reason: "잘못된 정보", reason_detail: "객실 정보, 이미지 오류", complain_dt: "2023-01-17"},
    {idx: 2, lodging_num: "1521", reason: "잘못된 정보", reason_detail: "객실 정보, 이미지 오류", complain_dt: "2023-01-17"},
    {idx: 3, lodging_num: "1521", reason: "잘못된 정보", reason_detail: "객실 정보, 이미지 오류", complain_dt: "2023-01-17"},
    {idx: 4, lodging_num: "1521", reason: "잘못된 정보", reason_detail: "객실 정보, 이미지 오류", complain_dt: "2023-01-17"},
]

function Complain() {
    return (
        <motion.div variants={Anima}
                    initial="hidden"
                    animate="visible"
                    exit="exit" className={"container mx-auto mt-5"}>
            <div className={"mb-5"}>
                <Breadcrumb>
                    <Breadcrumb.Item href="/mypage">마이페이지</Breadcrumb.Item>
                    <Breadcrumb.Item href="/complain" active>신고내역 확인</Breadcrumb.Item>
                </Breadcrumb>
                <h2 className={"fw-bold"}>신고내역 확인</h2>
            </div>

            <table className={"table table-hover table-striped"}>
                <thead>
                <tr>
                    <th>선택</th>
                    <th>신고번호</th>
                    <th>숙소번호</th>
                    <th>신고사유</th>
                    <th>상세사유</th>
                    <th>등록날짜</th>
                </tr>
                </thead>
                <tbody>
                {complain.map((item) => {
                    return <ComplainList idx={item.idx} lodging_num={item.lodging_num} reason={item.reason} reason_detail={item.reason_detail} complain_dt={item.complain_dt}/>
                })}
                </tbody>
            </table>

            <div>
                <button type="button" className="btn btn-outline-secondary btn-sm my-2 me-2" title="Edit">
                    <span><FontAwesomeIcon icon={faPencil} size="1x"/> 신고수정</span>
                </button>
                <button type="button" className="btn btn-outline-secondary btn-sm my-2" title="Edit">
                    <span><FontAwesomeIcon icon={faClose} size="1x"/> 신고삭제</span>
                </button>
            </div>

        </motion.div>
    )
}

export default Complain;

function ComplainList({idx, lodging_num, reason, reason_detail, complain_dt}) {
    return (
        <tr>
            <td>
                <Form>
                    {['checkbox'].map((type) => (
                        <div key={`default-${type}`}>
                            <Form.Check
                                type={type}
                            />
                        </div>
                    ))}
                </Form>
            </td>
            <td>{idx}</td>
            <td>{lodging_num}</td>
            <td>{reason}</td>
            <td>{reason_detail}</td>
            <td>{complain_dt}</td>
        </tr>
    )
}