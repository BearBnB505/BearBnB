// 호스트마이페이지 - 매출관리

import React from "react";
import {Breadcrumb, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faPencil} from "@fortawesome/free-solid-svg-icons";
import Anima from "../Mypage/animaData";
import { motion } from "framer-motion";

const complain = [
    {year: 2023, month: 1, revenue: 11000},
    {year: 2023, month: 2, revenue: 11000},
    {year: 2023, month: 3, revenue: 11000},
    {year: 2023, month: 4, revenue: 11000},
    {year: 2023, month: 5, revenue: 11000},
    {year: 2023, month: 6, revenue: 11000},
    {year: 2023, month: 7, revenue: 11000},
    {year: 2023, month: 8, revenue: 11000},
    {year: 2023, month: 9, revenue:11000},
    {year: 2023, month: 10, revenue:11000},
    {year: 2023, month: 11, revenue:11000},
    {year: 2023, month: 12, revenue:11000},


]

function HostMyPageRevenue() {
    return (
        <motion.div variants={Anima}
                    initial="hidden"
                    animate="visible"
                    exit="exit" className={"container mx-auto mt-5"}>
            <div className={"mb-5"}>
                <Breadcrumb>
                    <Breadcrumb.Item href="/hostMyPageMain">호스트마이페이지</Breadcrumb.Item>
                    <Breadcrumb.Item href="/hostMyPageLodging" active>매출관리</Breadcrumb.Item>
                </Breadcrumb>
                <div className={'row'}>
                    <h2 className={"fw-bold col-11"}>매출관리</h2>
                    <button className={'btn btn-primary'} style={{width:'100px', height:"40px"}}>대금신청</button>
                </div>
            </div>

            <table className={"table table-hover table-striped"}>
                <thead>
                <tr>
                    <th>년도</th>
                    <th>월</th>
                    <th>수익</th>
                </tr>
                </thead>
                <tbody>
                {complain.map((item) => {
                    return <ComplainList year={item.year} month={item.month} revenue={item.revenue}/>
                })}
                </tbody>
            </table>

        </motion.div>
    )
}

export default HostMyPageRevenue;

function ComplainList({year, month, revenue}) {
    return (
        <tr>
            <td>{year}</td>
            <td>{month}</td>
            <td>{revenue}</td>
        </tr>
    )
}