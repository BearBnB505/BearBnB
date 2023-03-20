import React, {useEffect, useState} from "react";
import {Breadcrumb, Tab, Tabs} from "react-bootstrap";
import {faPencil, faList, faClose} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Anima from "./animaData";
import { motion } from "framer-motion";
import {useLocation} from "react-router";
import axios from "axios";
import BookingPagenation from "./BookingPagenation";
import BookingModalDetail from "./BookingConfirm/BookingModalDetail";
import Swal from "sweetalert2";
import {Auth} from "../Auth/Auth";
import {Link} from "react-router-dom";

function BookingCancel() {

    // const bookingCancle = [
    //     {idx: 1, lodging_name: "해운대 신라 호텔", book_state: "취소완료", book_dt: "2023-01-17", pay_cost: "560,200원"},
    //     {idx: 2, lodging_name: "제주도 신라 호텔", book_state: "취소완료", book_dt: "2023-01-17", pay_cost: "560,200원"},
    //     {idx: 3, lodging_name: "해운대 신라 호텔", book_state: "취소완료", book_dt: "2023-01-17", pay_cost: "560,200원"},
    //     {idx: 4, lodging_name: "제주도 신라 호텔", book_state: "취소완료", book_dt: "2023-01-17", pay_cost: "560,200원"},
    //     {idx: 5, lodging_name: "제주도 신라 호텔", book_state: "취소완료", book_dt: "2023-01-17", pay_cost: "560,200원"},
    //     {idx: 6, lodging_name: "해운대 신라 호텔", book_state: "취소완료", book_dt: "2023-01-17", pay_cost: "560,200원"},
    // ]
    //
    // const bookingCancleWait = [
    //     {idx: 1, lodging_name: "해운대 신라 호텔", book_state: "취소대기", book_dt: "2023-01-17", pay_cost: "560,200원"},
    //     {idx: 2, lodging_name: "제주도 신라 호텔", book_state: "취소대기", book_dt: "2023-01-17", pay_cost: "560,200원"},
    // ]


    const [isLoaded, setIsLoaded] = useState(false);
    const { userId } = Auth();
    const check = sessionStorage.getItem('check');

    const [cancelArray, setCancelArray] = useState([]);
    const [agreeCancelArray, setAgreeCancelArray] = useState([]);
    // 페이지당 게시물 수
    const [limit, setLimit] = useState(5);
    // 현재 페이지 번호(page)
    const [page, setPage] = useState(1);
    // 첫 게시물의 위치(offset)
    const offset = (page - 1) * limit;


    useEffect(() => {
        axios.get('http://localhost:8080/bookingList/', {params: {userId: userId}})
            .then((req) => {
                const {data} = req;
                // console.log(data);
                // setData(data);

                // dbArray를 기반으로 새로운 배열을 만듭니다.
                const cancelList = data.filter(item => item.bookState === "취소대기");
                setCancelArray(cancelList);
                // console.log(cancelArray);

                const agreeCancelList = data.filter(item => item.bookState === '취소완료');
                setAgreeCancelArray(agreeCancelList);
                // console.log(agreeCancelArray);


            })
            .catch((err) => {
                console.log("통신 오류");
                console.log(err);
            })
    }, []);

    const getBookingCancelList = () => {
        setTimeout(() => {
            axios.get('http://localhost:8080/bookingList/', {params: {userId: userId}})
                .then((req) => {
                    const {data} = req;
                    // console.log(data);
                    // setData(data);

                    // dbArray를 기반으로 새로운 배열을 만듭니다.
                    const cancelList = data.filter(item => item.bookState === "취소대기");
                    setCancelArray(cancelList);
                    // console.log(cancelArray);

                    const agreeCancelList = data.filter(item => item.bookState === '예약취소');
                    setAgreeCancelArray(agreeCancelList);
                    // console.log(agreeCancelArray);

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
            getBookingCancelList();
            return () => clearTimeout(getBookingCancelList);
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
                {/*<Tab eventKey="tab1" title="취소 승인 대기 (2건)">*/}
                <Tab eventKey="tab1" title={`취소 승인 대기 (${cancelArray.length}건)`}>
                    <div>
                        {cancelArray.slice(offset, offset + limit).map((item) => {
                            {/*{bookingCancleWait.map((item) => {*/}
                            return <BookingCancleWait idx={item.idx} lodging_name={item.lodgingName}
                                                      book_state={item.bookState}
                                                      book_dt={item.bookDt} pay_cost={item.payCost}
                                                      book_num={item.bookNum} book_check_in_dt={item.bookCheckInDt} book_check_out_dt={item.bookCheckOutDt}
                                                      adult_num={item.adultNum} baby_num={item.babyNum} pet_num={item.petNum}
                                                      tel={item.tel} book_state={item.bookState} user_id={item.userId} user_name={item.name} user_nation={item.nation}/>
                        })}
                    </div>
                    <BookingPagenation
                        total={cancelArray.length}
                        limit={limit}
                        page={page}
                        setPage={setPage}
                    />
                </Tab>

                {/*<Tab eventKey="tab2" title="취소완료 확인 (10건)">*/}
                <Tab eventKey="tab2" title={`취소완료 확인 (${agreeCancelArray.length}건)`}>
                    <div>
                        {agreeCancelArray.slice(offset, offset + limit).map((item) => {
                            // {bookingCancle.map((item) => {
                            return <BookingCancleItem idx={item.idx} lodging_name={item.lodgingName}
                                                      book_state={item.bookState} lodging_num={item.lodgingNum}
                                                      book_dt={item.bookDt} pay_cost={item.payCost}
                                                      book_num={item.bookNum} book_check_in_dt={item.bookCheckInDt} book_check_out_dt={item.bookCheckOutDt}
                                                      adult_num={item.adultNum} baby_num={item.babyNum} pet_num={item.petNum}
                                                      tel={item.tel} book_state={item.bookState} user_id={item.userId} user_name={item.name} user_nation={item.nation}/>
                        })}
                    </div>
                    <BookingPagenation
                        total={agreeCancelArray.length}
                        limit={limit}
                        page={page}
                        setPage={setPage}
                    />
                </Tab>

            </Tabs>


        </motion.div>
    ) : <></>
}


export default BookingCancel;

// function BookingCancleWait({lodging_name, book_state, book_dt, pay_cost}) {
function BookingCancleWait({idx, lodging_name, book_state, book_dt, pay_cost,
                               book_num, book_check_in_dt, book_check_out_dt,
                               adult_num, baby_num, pet_num, lodging_num,
                               user_id, user_name, user_tel, user_nation, tel}) {

    const [modalDetail, setModalDetail] = useState(false);

    const [bookingState, setBookingState] =useState('상태값대기중');

    // const bookingStateBtn = () => {
    //     console.log(bookingState)
    //     axios.put('http://localhost:8080/updateState/',null,{params: {idx: idx, bookState: '승인대기'}})
    //         .then((response) => {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    const bookingStateBtn = () => {
        Swal.fire({
            title: '취소을 취소하시겠습니까?',
            text: "승인대기 상태가 됩니다.",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: '아니요',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '네'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.put('http://localhost:8080/updateState/',null,{params: {idx: idx, bookState: '승인대기'}})
                    .then((response) => {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                // Swal.fire(
                //     '취소를 취소하였습니다',
                //     '　',
                //     'success'
                // )

            }
            window.location.replace(`http://localhost:3000/bookingCancel/`+user_id)

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
                    <button type="button" style={{marginRight:5}} className="btn btn-outline-secondary btn-sm my-2" title="Edit" onClick={()=> setModalDetail(true)}>
                        <span><FontAwesomeIcon icon={faList} size="1x"/> 상세내역</span>
                    </button>

                    <button type="button" className="btn btn-outline-secondary btn-sm my-2 me-2" title="Edit" onClick={bookingStateBtn}>
                        <span><FontAwesomeIcon icon={faClose} size="1x"/> 취소철회</span>
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

// function BookingCancleItem({lodging_name, book_state, book_dt, pay_cost}) {
function BookingCancleItem({idx, lodging_name, book_state, book_dt, pay_cost,
                               book_num, book_check_in_dt, book_check_out_dt,
                               adult_num, baby_num, pet_num, lodging_num,
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
                </div>

                <BookingModalDetail
                    show={modalDetail}
                    onHide = {() => setModalDetail(false)}
                    idx={idx} lodging_name={lodging_name} lodging_name={lodging_name}
                    book_num={book_num} book_check_in_dt={book_check_in_dt} book_check_out_dt={book_check_out_dt}
                    adult_num={adult_num} baby_num={baby_num} pet_num={pet_num}
                    book_state={book_state} user_id={user_id} user_name={user_name} user_tel={user_tel} user_nation={user_nation}
                    book_dt={book_dt} pay_cost={pay_cost} tel={tel}/>
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
