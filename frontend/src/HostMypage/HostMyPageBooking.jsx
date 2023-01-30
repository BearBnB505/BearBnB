import React, {useState} from "react";
import {Breadcrumb, Tab, Tabs} from "react-bootstrap";
import {faPencil, faList, faClose} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Anima from "../Mypage/animaData";
import { motion } from "framer-motion";
import HostUserInfoModal from "./HostUserInfoModal";
import Guest from "../guest";
import GuestInfoModalButton from "./GustInfoModalButton";

function HostMyPageBooking() {

    const bookingConfirm = [
        {idx: 1, lodging_name: "해운대 신라 호텔", book_state: "예약완료", book_dt: "2023-01-17", pay_cost: "560,200원"},
        {idx: 2, lodging_name: "제주도 신라 호텔", book_state: "예약완료", book_dt: "2023-01-17", pay_cost: "560,200원"},
        {idx: 3, lodging_name: "해운대 신라 호텔", book_state: "예약완료", book_dt: "2023-01-17", pay_cost: "560,200원"},
        {idx: 4, lodging_name: "제주도 신라 호텔", book_state: "예약완료", book_dt: "2023-01-17", pay_cost: "560,200원"},
        {idx: 5, lodging_name: "제주도 신라 호텔", book_state: "예약완료", book_dt: "2023-01-17", pay_cost: "560,200원"},
        {idx: 6, lodging_name: "해운대 신라 호텔", book_state: "예약완료", book_dt: "2023-01-17", pay_cost: "560,200원"},
    ]

    const bookingWait = [
        {idx: 1, lodging_name: "해운대 신라 호텔", book_state: "승인대기", book_dt: "2023-01-17", pay_cost: "560,200원"},
        {idx: 2, lodging_name: "제주도 신라 호텔", book_state: "승인대기", book_dt: "2023-01-17", pay_cost: "560,200원"},
    ]
    const bookingCancel = [
        {idx: 1, lodging_name: "해운대 신라 호텔", book_state: "예약거절", book_dt: "2023-01-17", pay_cost: "560,200원"},
        {idx: 2, lodging_name: "제주도 신라 호텔", book_state: "예약거절", book_dt: "2023-01-17", pay_cost: "560,200원"},
    ]





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
                defaultActiveKey="tab1"
                transition={false}
                id="uncontrolled-tab-example"
                className="mb-3"
                justify
            >
                <Tab eventKey="tab1" title="예약승인 대기 (2건)">
                    <div>
                        {bookingWait.map((item) => {
                            return <BookingWait idx={item.idx} lodging_name={item.lodging_name}
                                                book_state={item.book_state}
                                                book_dt={item.book_dt} pay_cost={item.pay_cost}/>
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
                <Tab eventKey="tab3" title="예약 거절">
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
    )
}


export default HostMyPageBooking;

function BookingWait({lodging_name, book_state, book_dt, pay_cost}) {


    // 모달 팝업
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    const onClickReject = () => {
        if (window.confirm("정말 거절하시겠습니까?")) {
            alert("거절되었습니다.");
        }
    };

    return (


        <ul className={"list-group mb-4"} style={styles.ul}>
            <li className={"list-group-item p-4"} style={styles.li}>
                <div><span className={"fs-5 fw-bold"}>{book_state}</span> <small
                    className={"text-secondary"}>{book_dt}</small></div>
                <div>{lodging_name}</div>
                <div>결제 금액 : {pay_cost}</div>
                <div>
                    {/*모달창 삽입*/}
                    <React.Fragment>
                        <button type="button" onClick={openModal} className="btn btn-outline-secondary btn-sm my-2" title="Edit" onClick={openModal}>
                            <span><FontAwesomeIcon icon={faList} size="1x"/> 상세내역</span>
                        </button>
                        <HostUserInfoModal open={modalOpen} close={closeModal} header="예약내역">
                        </HostUserInfoModal>
                    </React.Fragment>
                    <button type="button" className="btn btn-outline-secondary btn-sm my-2 me-2 ms-2" title="Edit" onClick={onClickReject}>
                        <span><FontAwesomeIcon icon={faClose} size="1x"/> 거절</span>
                    </button>
                </div>
            </li>
        </ul>
    );
}

function BookingItem({lodging_name, book_state, book_dt, pay_cost}) {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <ul className={"list-group mb-4"} style={styles.ul}>
            <li className={"list-group-item p-4"} style={styles.li}>
                <div><span className={"fs-5 fw-bold"}>{book_state}</span> <small
                    className={"text-secondary"}>{book_dt}</small></div>
                <div>{lodging_name}</div>
                <div>결제 금액 : {pay_cost}</div>
                <div>
                    <React.Fragment>
                        <button type="button" onClick={openModal} className="btn btn-outline-secondary btn-sm my-2" title="Edit" onClick={openModal}>
                            <span><FontAwesomeIcon icon={faList} size="1x"/> 상세내역</span>
                        </button>
                        <HostUserInfoModal open={modalOpen} close={closeModal} header="예약내역">
                        </HostUserInfoModal>
                    </React.Fragment>
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
