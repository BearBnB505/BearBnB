import React from "react";
import {Breadcrumb} from "react-bootstrap";

const complain = [
    {idx: 1, lodging_num: "1521", reason: "잘못된 정보", reason_detail: "객실 정보, 이미지 오류", complain_dt: "2023-01-17"},
    {idx: 1, lodging_num: "1521", reason: "잘못된 정보", reason_detail: "객실 정보, 이미지 오류", complain_dt: "2023-01-17"},
    {idx: 1, lodging_num: "1521", reason: "잘못된 정보", reason_detail: "객실 정보, 이미지 오류", complain_dt: "2023-01-17"},
    {idx: 1, lodging_num: "1521", reason: "잘못된 정보", reason_detail: "객실 정보, 이미지 오류", complain_dt: "2023-01-17"},
]

function Complain() {
    return (
        <div className={"container mx-auto mt-5"}>
            <div className={"mb-5"}>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">마이페이지</Breadcrumb.Item>
                    <Breadcrumb.Item active>신고내역 확인</Breadcrumb.Item>
                </Breadcrumb>
                <h2 className={"fw-bold"}>신고내역 확인</h2>
            </div>

            <table className={"table table-hover table-striped"}>
                <thead>
                <tr>
                    <th>신고번호</th>
                    <th>숙소번호</th>
                    <th>신고사유</th>
                    <th>상세사유</th>
                    <th>등록날짜</th>
                </tr>
                </thead>
                <tbody>
                {}
                </tbody>
            </table>

        </div>
    )
}

export default Complain;

function ComplainList() {
    return (
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    )
}