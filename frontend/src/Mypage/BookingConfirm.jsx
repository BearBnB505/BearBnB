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
import {useLocation} from "react-router";
import Swal from "sweetalert2";
import {Auth} from "../Auth/Auth";
import {Link} from "react-router-dom";

function BookingConfirm() {

    const [isLoaded, setIsLoaded] = useState(false);
    const { userId } = Auth();
    const check = sessionStorage.getItem('check');

    const [waitArray, setWaitArray] = useState([]);
    const [agreeArray, setAgreeArray] = useState([]);
  // 페이지당 게시물 수
  const [limit, setLimit] = useState(5);
  // 현재 페이지 번호(page)
  const [page, setPage] = useState(1);
  // 첫 게시물의 위치(offset)
  const offset = (page - 1) * limit;


    const getBookingList = () => {
        setTimeout(() => {
            axios.get('http://localhost:8080/bookingList/', {params: {userId: userId}})
                .then((req) => {
                    const {data} = req;

                    // dbArray를 기반으로 새로운 배열을 만듭니다.
                    const waitArray = data.filter(item => item.bookState === "승인대기");
                    setWaitArray(waitArray);
                    // console.log(waitArray);

                    const agreeArray = data.filter(item => item.bookState === '예약완료');
                    setAgreeArray(agreeArray);
                    // console.log(agreeArray);

                    sessionStorage.setItem('check', 'pause');
                })
                .catch((err) => {
                    console.log("통신 오류");
                    console.log(err);
                })
        }, 50);
    }

    useEffect(() => {
        if (check == 'done') {
            getBookingList();
            return () => clearTimeout(getBookingList);
        }
    }, [check]);


    useEffect(()=>{
        const timer = setTimeout(() => {
            setIsLoaded(true);
        },450);
        return () => clearTimeout(timer);
    }, []);


    return isLoaded ? (

        <motion.div variants={Anima}
                     initial="hidden"
                     animate="visible"
                     exit="exit" className={"container mt-5"}>
            <div className={"mb-5"}>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to={"../mypage"}>마이페이지</Link></Breadcrumb.Item>
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

    ) : <></>
}


export default BookingConfirm;

function BookingWait({idx, lodging_name, book_state, book_dt, pay_cost,
                         book_num, book_check_in_dt, book_check_out_dt,
                         adult_num, baby_num, pet_num,
                         user_id, user_name, user_tel, user_nation, tel}) {
    const [modalDetail, setModalDetail] = useState(false);

    const bookingStateBtn = () => {
        Swal.fire({
            title: '예약을 취소하시겠습니까?',
            text: "호스트의 확인 후 취소 처리됩니다.",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: '아니요',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '네'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.put('http://localhost:8080/updateState/',null,{params: {idx: idx, bookState: '취소대기'}})
                    .then((response) => {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                // Swal.fire(
                //     '예약을 취소하였습니다',
                //     '　',
                //     'success'
                // )

            }
            window.location.replace(`http://localhost:3000/bookingConfirm/`+user_id)

        })

    }




    return (
        <ul className={"list-group mb-4"} style={styles.ul}>
            <li className={"list-group-item p-4"} style={styles.li}>
                <div><span className={"fs-5 fw-bold"}>{book_state}</span> <small
                    className={"text-secondary"}>{book_dt}</small></div>
                <div>{lodging_name}</div>
                <div>결제 금액 : {pay_cost}</div>
                <div>
                    <button type="button" className="btn btn-outline-secondary btn-sm my-2" style={{marginRight:5}} title="Edit" onClick={()=> setModalDetail(true)}>
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

                    <button type="button" className="btn btn-outline-secondary btn-sm my-2 me-2" title="Edit" onClick={bookingStateBtn}>
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
