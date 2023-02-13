import React, {useEffect, useState} from "react";
import {Breadcrumb, Tab, Tabs} from "react-bootstrap";
import {faPencil, faList, faClose} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Anima from "./animaData";
import { motion } from "framer-motion";
import BookingModalReview from "./BookingConfirm/BookingModalReview";
import BookingModalDetail from "./BookingConfirm/BookingModalDetail";
import axios from "axios";
import ReviewPagenation from "./ReviewPagenation";
import BookingPagenation from "./BookingPagenation";

function BookingConfirm() {


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

    const [waitArray, setWaitArray] = useState([]);
    const [agreeArray, setAgreeArray] = useState([]);
  // 페이지당 게시물 수
  const [limit, setLimit] = useState(5);
  // 현재 페이지 번호(page)
  const [page, setPage] = useState(1);
  // 첫 게시물의 위치(offset)
  const offset = (page - 1) * limit;


    useEffect(() => {
        axios.get('http://localhost:8080/bookingList/')
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


          })
          .catch((err) => {
              console.log("통신 오류");
              console.log(err);
          })
    }, []);


    return (

        <motion.div variants={Anima}
                     initial="hidden"
                     animate="visible"
                     exit="exit" className={"container mt-5"}>
            <div className={"mb-5"}>
                <Breadcrumb>
                    <Breadcrumb.Item href="../mypage">마이페이지</Breadcrumb.Item>
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

                <Tab eventKey="tab1" title={`예약승인 대기 (${waitArray.length}건)`}>
                    <div>
                        {waitArray.slice(offset, offset + limit).map((item) => {
                            return <BookingWait idx={item.idx} lodging_name={item.lodgingName}
                                                book_state={item.bookState}
                                                book_dt={item.bookDt} pay_cost={item.payCost}
                                                book_num={item.bookNum} book_check_in_dt={item.bookCheckInDt} book_check_out_dt={item.bookCheckOutDt}
                                                adult_num={item.adultNum} baby_num={item.babyNum} pet_num={item.petNum}
                                                tel={item.tel} book_state={item.bookState} user_id={item.userId} user_name={item.name} user_nation={item.nation}/>
                        })}
                    </div>
                  <BookingPagenation
                    total={waitArray.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                  />
                </Tab>

                <Tab eventKey="tab2" title={`예약완료 (${agreeArray.length}건)`}>
                    <div>
                        {agreeArray.slice(offset, offset + limit).map((item) => {
                            return <BookingItem idx={item.idx} lodging_name={item.lodgingName}
                                                book_state={item.bookState} lodging_num={item.lodgingNum}
                                                book_dt={item.bookDt} pay_cost={item.payCost}
                                                book_num={item.bookNum} book_check_in_dt={item.bookCheckInDt} book_check_out_dt={item.bookCheckOutDt}
                                                adult_num={item.adultNum} baby_num={item.babyNum} pet_num={item.petNum}
                                                tel={item.tel} book_state={item.bookState} user_id={item.userId} user_name={item.name} user_nation={item.nation}/>
                        })}
                    </div>
                  <BookingPagenation
                    total={agreeArray.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                  />
                </Tab>

            </Tabs>




        </motion.div>

    )
}


export default BookingConfirm;

function BookingWait({idx, lodging_name, book_state, book_dt, pay_cost,
                         book_num, book_check_in_dt, book_check_out_dt,
                         adult_num, baby_num, pet_num,
                         user_id, user_name, user_tel, user_nation, tel}) {
    const [modalDetail, setModalDetail] = useState(false);

    return (
        <ul className={"list-group mb-4"} style={styles.ul}>
            <li className={"list-group-item p-4"} style={styles.li}>
                <div><span className={"fs-5 fw-bold"}>{book_state}</span> <small
                    className={"text-secondary"}>{book_dt}</small></div>
                <div>{lodging_name}</div>
                <div>결제 금액 : {pay_cost}</div>
                <div>
                    <button type="button" className="btn btn-outline-secondary btn-sm my-2" title="Edit" onClick={()=> setModalDetail(true)}>
                        <span><FontAwesomeIcon icon={faList} size="1x"/> 상세내역</span>
                    </button>

                    {/*<BookingModalDetail*/}
                    <BookingModalDetail
                      show={modalDetail}
                      onHide = {() => setModalDetail(false)}
                      idx={idx} lodging_name={lodging_name}
                      book_num={book_num} book_check_in_dt={book_check_in_dt} book_check_out_dt={book_check_out_dt}
                      adult_num={adult_num} baby_num={baby_num} pet_num={pet_num}
                      book_state={book_state} user_id={user_id} user_name={user_name} user_tel={user_tel} user_nation={user_nation}
                      book_dt={book_dt} pay_cost={pay_cost} tel={tel}/>

                    <button type="button" className="btn btn-outline-secondary btn-sm my-2 me-2" title="Edit">
                        <span><FontAwesomeIcon icon={faClose} size="1x"/> 취소신청</span>
                    </button>
                </div>
            </li>
        </ul>
    );
}

function BookingItem({idx, lodging_name, book_state, book_dt, pay_cost,
                         book_num, book_check_in_dt, book_check_out_dt,
                         adult_num, baby_num, pet_num, lodging_num,
                         user_id, user_name, user_tel, user_nation, tel}) {
    const [modalReview, setModalReview] = useState(false);
    const [modalDetail, setModalDetail] = useState(false);
    return (
        <ul className={"list-group mb-4"} style={styles.ul}>
            <li className={"list-group-item p-4"} style={styles.li}>
                <div><span className={"fs-5 fw-bold"}>{book_state}</span> <small
                    className={"text-secondary"}>{book_dt}</small></div>
                <div>{lodging_name}</div>
                <div>결제 금액 : {pay_cost}</div>
                <div>
                    <button type="button" className="btn btn-outline-secondary btn-sm my-2 me-2" title="Edit" onClick={() => setModalReview(true)}>
                        <span><FontAwesomeIcon icon={faPencil} size="1x"/> 후기작성</span>
                    </button>

                    <BookingModalReview
                            show={modalReview}
                            onHide={() => setModalReview(false)}
                            lodging_num={lodging_num}
                            user_id={user_id}
                    />

                    <button type="button" className="btn btn-outline-secondary btn-sm my-2" title="Edit" onClick={()=> setModalDetail(true)}>
                        <span><FontAwesomeIcon icon={faList} size="1x"/> 상세내역</span>
                    </button>

                    <BookingModalDetail
                      show={modalDetail}
                      onHide = {() => setModalDetail(false)}
                      idx={idx} lodging_name={lodging_name} lodging_name={lodging_name}
                      book_num={book_num} book_check_in_dt={book_check_in_dt} book_check_out_dt={book_check_out_dt}
                      adult_num={adult_num} baby_num={baby_num} pet_num={pet_num}
                      book_state={book_state} user_id={user_id} user_name={user_name} user_tel={user_tel} user_nation={user_nation}
                      book_dt={book_dt} pay_cost={pay_cost} tel={tel}/>

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
