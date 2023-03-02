import React, {useEffect, useState} from "react";
import {Breadcrumb, Modal, ModalBody, ModalHeader, ModalTitle, Tab, Tabs} from "react-bootstrap";
import {faPencil, faList, faClose} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Anima from "../../Mypage/animaData";
import {motion} from "framer-motion";
import HostUserInfoModal from "../HostUserInfoModal";
import GuestInfoModal from "../GuestInfoModal";
import BookingWait from "./BookingWait";
import axios from "axios";
import {useLocation} from "react-router";


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

  const [bookingState, setBookingState] = useState("승인대기")

    // const [data, setData] = useState([]);
    const [waitArray, setWaitArray] = useState([]);
    const [agreeArray, setAgreeArray] = useState([]);
    const [rejectArray, setRejectArray] = useState([]);

    //유저 정보
    // const location = useLocation();
    //여기에요 여기!! 유저 아이디 넣어야 할 부분 !!!
    const userId = location.state.userId;

    useEffect(() => {
        axios.get('http://localhost:8080/HostBookingList/', {params:{userId:userId}})
          .then((req) => {
              const {data} = req;
              // console.log(data);
              // setData(data);

              // dbArray를 기반으로 새로운 배열을 만듭니다.
              const waitArray = data.filter(item => item.bookState === "승인대기");
              setWaitArray(waitArray);
              // console.log(waitArray);

              const agreeArray = data.filter(item => item.bookState === '예약완료');
              setAgreeArray(agreeArray);
              // console.log(agreeArray);


              const rejectArray = data.filter(item => item.bookState === '예약취소');
              setRejectArray(rejectArray);
              // console.log(rejectArray);

          })
          .catch((err) => {
              console.log("통신 오류");
              console.log(err);
          })
    }, [key]);


  function switchState1() {
    return (
      setBookingState('예약완료')
    )
  }

  function switchState2() {
    return (
      setBookingState('예약취소')
    )
  }

  const a = waitArray.length

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

            <Tab eventKey="tab1" title={`예약승인 대기 (${waitArray.length}건)`} >
                <div>
                    {waitArray.map((item, idx) => {
                        return <BookingWait key={idx} idx={item.idx} lodging_name={item.lodgingName}
                                            book_num={item.bookNum} book_check_in_dt={item.bookCheckInDt} book_check_out_dt={item.bookCheckOutDt}
                                            adult_num={item.adultNum} baby_num={item.babyNum} pet_num={item.petNum}
                                            book_state={item.bookState} user_id={item.userId} user_name={item.name} user_tel={item.tel} user_nation={item.nation}
                                            book_dt={item.bookDt} pay_cost={item.payCost} childValue={setKey} />
                    })}
                </div>
            </Tab>

            <Tab eventKey="tab2" title={`예약완료 확인 (${agreeArray.length}건)`}>
                <div>
                    {agreeArray.map((item,idx) => {
                        return <BookingItem key={idx} idx={item.idx} lodging_name={item.lodgingName}
                                            book_num={item.bookNum} book_check_in_dt={item.bookCheckInDt} book_check_out_dt={item.bookCheckOutDt}
                                            adult_num={item.adultNum} baby_num={item.babyNum} pet_num={item.petNum}
                                            book_state={item.bookState} user_id={item.userId} user_name={item.name} user_tel={item.tel} user_nation={item.nation}
                                            book_dt={item.bookDt} pay_cost={item.payCost}/>
                    })}
                </div>
            </Tab>

            <Tab eventKey="tab3" title={`예약취소 (${rejectArray.length}건)`} >
                <div>
                    {rejectArray.map((item,idx) => {
                        return <BookingItem key={idx} idx={item.idx} lodging_name={item.lodgingName}
                                            book_num={item.bookNum} book_check_in_dt={item.bookCheckInDt} book_check_out_dt={item.bookCheckOutDt}
                                            adult_num={item.adultNum} baby_num={item.babyNum} pet_num={item.petNum}
                                            book_state={item.bookState} user_id={item.userId} user_name={item.name} user_tel={item.tel} user_nation={item.nation}
                                            book_dt={item.bookDt} pay_cost={item.payCost}/>
                    })}
                </div>
            </Tab>
        </Tabs>
    </motion.div>
  );
}

export default HostMyPageBooking;


function BookingItem({lodging_name, book_state, book_dt, pay_cost, childValue,
                       user_name,user_tel,user_nation, idx, user_id, setKey,
                       book_check_in_dt,book_num,book_check_out_dt,adult_num,baby_num,pet_num}) {
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
          <HostUserInfoModal idx={idx} lodging_name={lodging_name} book_num={book_num}
                              book_num={book_num} book_check_in_dt={book_check_in_dt}
                              book_check_out_dt={book_check_out_dt}
                              adult_num={adult_num} baby_num={baby_num} pet_num={pet_num}
                              book_state={book_state} user_id={user_id} user_name={user_name} user_tel={user_tel}
                              user_nation={user_nation}
                              book_dt={book_dt} pay_cost={pay_cost} childValue={setKey}/>
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
