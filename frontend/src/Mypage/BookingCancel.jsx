import React from "react";
import {Breadcrumb, Tab, Tabs} from "react-bootstrap";
import {faPencil, faList, faClose} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Anima from "./animaData";
import { motion } from "framer-motion";

function BookingCancel() {

    const bookingCancle = [
        {idx: 1, lodging_name: "해운대 신라 호텔", book_state: "취소완료", book_dt: "2023-01-17", pay_cost: "560,200원"},
        {idx: 2, lodging_name: "제주도 신라 호텔", book_state: "취소완료", book_dt: "2023-01-17", pay_cost: "560,200원"},
        {idx: 3, lodging_name: "해운대 신라 호텔", book_state: "취소완료", book_dt: "2023-01-17", pay_cost: "560,200원"},
        {idx: 4, lodging_name: "제주도 신라 호텔", book_state: "취소완료", book_dt: "2023-01-17", pay_cost: "560,200원"},
        {idx: 5, lodging_name: "제주도 신라 호텔", book_state: "취소완료", book_dt: "2023-01-17", pay_cost: "560,200원"},
        {idx: 6, lodging_name: "해운대 신라 호텔", book_state: "취소완료", book_dt: "2023-01-17", pay_cost: "560,200원"},
    ]

    const bookingCancleWait = [
        {idx: 1, lodging_name: "해운대 신라 호텔", book_state: "취소대기", book_dt: "2023-01-17", pay_cost: "560,200원"},
        {idx: 2, lodging_name: "제주도 신라 호텔", book_state: "취소대기", book_dt: "2023-01-17", pay_cost: "560,200원"},
    ]

    return (
        <motion.div variants={Anima}
                    initial="hidden"
                    animate="visible"
                    exit="exit" className={"container mt-5"}>
            <div className={"mb-5"}>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">마이페이지</Breadcrumb.Item>
                    <Breadcrumb.Item active>예약취소 확인</Breadcrumb.Item>
                </Breadcrumb>
                <h2 className={"fw-bold"}>예약취소 확인</h2>
            </div>

            <Tabs
                defaultActiveKey="tab1"
                transition={false}
                id="uncontrolled-tab-example"
                className="mb-3"
                justify
            >
                <Tab eventKey="tab1" title="취소 승인 대기 (2건)">
                    <div>
                        {bookingCancleWait.map((item) => {
                            return <BookingCancleWait idx={item.idx} lodging_name={item.lodging_name}
                                                book_state={item.book_state}
                                                book_dt={item.book_dt} pay_cost={item.pay_cost}/>
                        })}
                    </div>
                </Tab>

                <Tab eventKey="tab2" title="취소완료 확인 (10건)">
                    <div>
                        {bookingCancle.map((item) => {
                            return <BookingCancleItem idx={item.idx} lodging_name={item.lodging_name}
                                                book_state={item.book_state}
                                                book_dt={item.book_dt} pay_cost={item.pay_cost}/>
                        })}
                    </div>
                </Tab>

            </Tabs>


        </motion.div>
    )
}


export default BookingCancel;

function BookingCancleWait({lodging_name, book_state, book_dt, pay_cost}) {
    return (
        <ul className={"list-group mb-4"} style={styles.ul}>
            <li className={"list-group-item p-4"} style={styles.li}>
                <div><span className={"fs-5 fw-bold"}>{book_state}</span> <small
                    className={"text-secondary"}>{book_dt}</small></div>
                <div>{lodging_name}</div>
                <div>결제 금액 : {pay_cost}</div>
                <div>
                    <button type="button" className="btn btn-outline-secondary btn-sm my-2 me-2" title="Edit">
                        <span><FontAwesomeIcon icon={faClose} size="1x"/> 취소철회</span>
                    </button>
                </div>
            </li>
        </ul>
    );
}

function BookingCancleItem({lodging_name, book_state, book_dt, pay_cost}) {
    return (
        <ul className={"list-group mb-4"} style={styles.ul}>
            <li className={"list-group-item p-4"} style={styles.li}>
                <div><span className={"fs-5 fw-bold"}>{book_state}</span> <small
                    className={"text-secondary"}>{book_dt}</small></div>
                <div>{lodging_name}</div>
                <div>결제 금액 : {pay_cost}</div>
                <div>
                    <button type="button" className="btn btn-outline-secondary btn-sm my-2" title="Edit">
                        <span><FontAwesomeIcon icon={faList} size="1x"/> 상세내역</span>
                    </button>
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
