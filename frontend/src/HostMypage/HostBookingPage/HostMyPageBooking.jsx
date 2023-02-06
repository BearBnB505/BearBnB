import React, {useState} from "react";
import {Breadcrumb, Modal, ModalBody, ModalHeader, ModalTitle, Tab, Tabs} from "react-bootstrap";
import {faPencil, faList, faClose} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Anima from "../../Mypage/animaData";
import { motion } from "framer-motion";
import HostUserInfoModal from "../HostUserInfoModal";
import GuestInfoModal from "../GuestInfoModal";
import BookingWait from "./BookingWait";

function HostMyPageBooking() {

    const bookingConfirm = [
        {idx: 1, lodging_name: "해운대 신라 호텔", book_state: "예약완료", book_dt: "2023-01-17", pay_cost: "560,200원"},
        {idx: 2, lodging_name: "제주도 신라 호텔", book_state: "예약완료", book_dt: "2023-01-17", pay_cost: "560,200원"},
        {idx: 3, lodging_name: "해운대 신라 호텔", book_state: "예약완료", book_dt: "2023-01-17", pay_cost: "560,200원"},
        {idx: 4, lodging_name: "제주도 신라 호텔", book_state: "예약완료", book_dt: "2023-01-17", pay_cost: "560,200원"},
        {idx: 5, lodging_name: "제주도 신라 호텔", book_state: "예약완료", book_dt: "2023-01-17", pay_cost: "560,200원"},
        {idx: 6, lodging_name: "해운대 신라 호텔", book_state: "예약완료", book_dt: "2023-01-17", pay_cost: "560,200원"},
    ];

    const bookingWait = [
        {idx: 1, lodging_name: "해운대 신라 호텔", book_state: "승인대기", book_dt: "2023-01-17", pay_cost: "560,200원"},
        {idx: 2, lodging_name: "제주도 신라 호텔", book_state: "승인대기", book_dt: "2023-01-17", pay_cost: "560,200원"},
    ];
    const bookingCancel = [
        {idx: 1, lodging_name: "해운대 신라 호텔", book_state: "예약취소", book_dt: "2023-01-17", pay_cost: "560,200원"},
        {idx: 2, lodging_name: "제주도 신라 호텔", book_state: "예약취소", book_dt: "2023-01-17", pay_cost: "560,200원"},
    ];

    let [key, setKey] = useState('tab1');


    return (
        <motion.div variants={Anima}
                    initial="hidden"
                    animate="visible"
                    exit="exit" className={"container mt-5"}>
            <div className={"mb-5"}>
                <Breadcrumb>
                    <Breadcrumb.Item href="/hostMyPageMain">호스트마이페이지</Breadcrumb.Item>
                    <Breadcrumb.Item active>예약내역 확인</Breadcrumb.Item>
                </Breadcrumb>
                <h2 className={"fw-bold"}>예약내역 확인</h2>
            </div>

            <Tabs
                activeKey={key}
                onSelect={(k) => setKey(k)}
                id="uncontrolled-tab-example"
                className="mb-3"
                justify
            >
                <Tab eventKey="tab1" title="예약승인 대기 (2건)">
                    <div>
                        {bookingWait.map((item) => {
                            return <BookingWait idx={item.idx} lodging_name={item.lodging_name}
                                                book_state={item.book_state}
                                                book_dt={item.book_dt} pay_cost={item.pay_cost} childValue={setKey}/>
                        })}
                    </div>
                </Tab>

                <Tab eventKey="tab2" title="예약완료 확인 (10건)">
                    <div>
                        {bookingConfirm.map((item) => {
                            return <BookingItem idx={item.idx} lodging_name={item.lodging_name}
                                                book_state={item.book_state}
                                                book_dt={item.book_dt} pay_cost={item.pay_cost}/>
                        })}
                    </div>
                </Tab>
                <Tab eventKey="tab3" title="예약 취소">
                    <div>
                        {bookingCancel.map((item) => {
                            return <BookingItem idx={item.idx} lodging_name={item.lodging_name}
                                                book_state={item.book_state}
                                                book_dt={item.book_dt} pay_cost={item.pay_cost}/>
                        })}
                    </div>
                </Tab>
            </Tabs>
        </motion.div>
    );
}

export default HostMyPageBooking;


function BookingItem({lodging_name, book_state, book_dt, pay_cost}) {
    return (
        <ul className={"list-group mb-4"} style={styles.ul}>
            <li className={"list-group-item p-4"} style={styles.li}>
                <div className={"mb-2"}>
                    <span className={"fs-5 fw-bold me-2"}>{book_state}</span>
                    <small className={"text-secondary"}>{book_dt}</small>
                </div>
                <div className={"mb-1"}>{lodging_name}</div>
                <div className={"mb-2"}>결제 금액 : {pay_cost}</div>
                <div>
                    <HostUserInfoModal/>
                </div>
            </li>
        </ul>
    );
}


const styles = {
    ul: {
        border: "none",
        display: "block",
        listStyleType: "disc",
        marginBlockStart: "1em",
        marginBlockEnd: "1em",
        marginInlineStart: 0,
        marginInlineEnd: 0,
        paddingInlineStart: 0,
    },
    li: {}
}
