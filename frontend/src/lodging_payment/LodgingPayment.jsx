import React, {useState, useEffect} from "react";
import {PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";
import {Link} from "react-router-dom";
import Popover from "react-bootstrap/Popover";
import GuestCount from "../GuestCount";
import {useNavigate} from 'react-router-dom';
import Overlay from "react-bootstrap/Overlay";

import {Modal, ModalBody, ModalHeader, ModalTitle} from "react-bootstrap";
import LodgingPayPal from "./LodgingPayPal";
import PaypalApp from "./LodgingPayPal";
import axios from "axios";
import {useLocation} from "react-router";
import moment from "moment";
import Calendar from "../Calendar/Calendar";





// 확인 및 결제 페이지
function LodgingPayment(props) {
    // const amount = {totalCost}; //계산되는 달러가격 여기에 표시된다.
    const amount = 0.01;
    const inputAmount = amount * 1000;
    console.log(inputAmount)

    const currency = "USD";
    const style = {"layout": "vertical"};

    // <div className={'row align-items-start mt-4'}>*/}
    //     <div className = {'col-1'} style={{display:"block"}}>
    //         {/*누르면 상세페이지로 이동*/}
    //         <Link to={'#'}>
    //             <img src='/leftArrow.png' style={{width :"20px", marginTop:15}}/>
    //         </Link>
    //     </div>
    //     <div className={'col-3'}>
    //         <p style={{fontSize:"35px", fontWeight:"bold"}}>확인 및 결제</p>
    //     </div>
    // </div>

    const location = useLocation();

    const lodgingNum = location.state.lodgingNum;
    const lodgingName = location.state.lodgingName;

    const [chooseDate, setChooseDate] = useState(location.state.chooseDate);
    // const chooseDate = location.state.chooseDate;
    let startDate = moment(chooseDate[0]).format('Y년 M월 D일');
    let endDate = moment(chooseDate[1]).format('Y년 M월 D일');

    let startDt = moment(chooseDate[0]).format('YYYY-MM-DD 14:00:00');
    let endDt = moment(chooseDate[0]).format('YYYY-MM-DD 10:00:00');

    const dayCost = location.state.dayCost;

    const [nightCount, setNightCount] = useState(location.state.nightCount);
    const totalCost = location.state.totalCost;

    // const selectGuest = location.state.selectGuest;
    const [guestCount, setGuestCount] = useState(location.state.selectGuest);
    let adultCount = guestCount[0];
    let childCount = guestCount[1];
    let petCount = guestCount[2];



    const styles = {
        box: {
            border: "1px solid",
            borderColor: "#DDDDDD",
            borderRadius: "15px",
            height: "200px",
            width: "500px",
            marginTop: "10px",
            marginLeft: 0,
            // backgroundColor :"#fafafa"
        }
    }

    const now = new Date();
    let year = (now.getFullYear()).toString();
    // 년 두 글자
    let removeYear = year.slice(2, 4);
    let month = (now.getMonth() + 1).toString();

    // 월이 10이하일 경우 앞에 0을 붙인다
    const newMonth = (month < 10) ? 0 + month : month

    let day = (now.getDate()).toString();

    //년월일 6자리 글자
    let dayday = removeYear + newMonth + day;


    //랜덤 숫자 11자리(예약번호용)
    const random = [];

    for (let i = 0; i < 11; i++) {
        const randomNum = Math.floor(Math.random() * 10);
        random.push(randomNum)
    }

    const dayPlusRandom = dayday + random;
    // 예약번호 BookNum=> 날짜6자리 + 랜덤 숫자 11자리
    const BookNum = dayPlusRandom.split(',').join("");
    console.log(BookNum);

    const navigate = useNavigate();

    //모달창 띄우기 안띄우기
    const [showCalendar, setShowCalendar] = useState(false);
    const [showGuestCount, setShowGuestCount] = useState(false);

    useEffect(() => {
        setNightCount(moment.duration(moment(chooseDate[1]).diff(moment(chooseDate[0]))).asDays());
    }, chooseDate);

    return (
        <div className={'container mx-auto'}>
                            <div className={'row align-items-start mt-3'}>
                                <div className={'col-1'} style={{display: "block", marginTop: 15, cursor: "pointer"}} onClick={()=>{navigate(-1)}}>
                                    {/*누르면 상세페이지로 이동*/}
                                    <img src='/leftArrow.png' style={{width: "20px"}}></img>
                                </div>
                                <div className={'col-3 mt-2'}>
                                    <p style={{fontSize: "28px", fontWeight: "bold"}}>확인 및 결제</p>
                                </div>
                            </div>

            <div className={'row mt-5'}>
                <div className={'col-6 ps-5 border-end'}>
                    <div className={'row'} style={styles.box}>
                        <div className={'col-5 my-auto mx-auto'}>
                            <img src='/concept/background.jpg'
                                 style={{width: "200px", height: "140px", borderRadius: "20px", padding: 0}}/>
                        </div>
                        <div className={"col-6 my-auto"}>
                            <p className={'fs-5'}>{lodgingName}</p>
                            <p>★ 5.0</p>
                        </div>
                    </div>

                    <p style={{fontSize: "27px", fontWeight: "bold", paddingTop: "40px"}}>예약 정보</p>
                    <div className={'row mt-4'}>
                        <div className={'col-9'}>
                            <p style={{fontSize: "22px", fontWeight: "bold", cursor: 'default'}}>날짜</p>
                            <p style={{fontSize: "20px", marginTop: "-10px"}}>{startDate} ~ {endDate}</p>
                        </div>
                        <div className={'col-2'}>
                            <p style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                textDecoration: "underline",
                                cursor: 'pointer'
                            }} onClick={() => setShowCalendar(true)}>수정</p>
                            <Modal
                                show={showCalendar}
                                onHide={() => setShowCalendar(false)}
                                size="xl"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >
                                <ModalHeader closeButton={true}>
                                </ModalHeader>
                                <ModalBody>
                                    <div className={"container"}>
                                        <Calendar dateValue={setChooseDate} countNights={setNightCount} />

                                        <div className={"d-flex justify-content-end me-5 pe-2 mb-3"}>
                                            <button className={'btn btn-primary px-4 py-2'} onClick={() => {
                                                setShowCalendar(false)
                                            }}>저장
                                            </button>
                                        </div>
                                    </div>
                                </ModalBody>
                            </Modal>
                        </div>
                        <div className={'col-9'}>
                            <p style={{
                                fontSize: "22px",
                                fontWeight: "bold",
                                cursor: 'default'
                            }}>게스트</p>
                            <p style={{fontSize: "20px", marginTop: "-10px"}}>
                                {adultCount !== 0 ? "성인 " + adultCount + "명" : ""}
                                {childCount !== 0 ? ", 유아 " + childCount + "명" : ""}
                                {petCount !== 0 ? ", 반려동물 " + petCount + "마리" : ""}
                            </p>
                        </div>
                        <div className={'col-2'}>
                            <p style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                textDecoration: "underline",
                                cursor: 'pointer'
                            }} onClick={() => setShowGuestCount(true)}>수정</p>
                            {/*게스트 수 수정*/}
                            <Modal
                                show={showGuestCount}
                                onHide={() => setShowGuestCount(false)}
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >
                                <ModalHeader closeButton={true}>
                                </ModalHeader>
                                <ModalBody>
                                    <div className={"container ms-3 ps-3"}>
                                        <GuestCount guestValue={setGuestCount}/>

                                        <div className={"d-flex justify-content-end me-5 pe-2 mb-2"}>
                                            <button className={'btn btn-primary'} onClick={() => {
                                                setShowGuestCount(false);
                                            }}>저장
                                            </button>
                                        </div>
                                    </div>
                                </ModalBody>
                            </Modal>

                        </div>
                    </div>
                </div>
                <div className={'col-5 ps-5'} style={{marginTop:100}}>
                        <p style={{fontSize: "27px", fontWeight: "bold", paddingTop: "12px"}}>요금 정보</p>
                        <div className={'row'}>
                            <div className={'col-9'}>
                                <p style={{fontSize: "23px", color: "gray"}}> &#8361; {dayCost} x {nightCount}박 </p>
                            </div>
                            <div className={'col text-end'}>
                                <p style={{fontSize: "23px"}}> &#8361; {totalCost} </p>
                            </div>



                            <PayPalScriptProvider
                                options={{"client-id": "AelKrwx59EQIuE4_2aa69nqfooRHj2Q41Ko9IDTlD72BtjVbT_p3jaawmaQ16ciIL6m86So_MRYxxY4t"}}>
                                <PayPalButtons
                                    style={style}
                                    disabled={false}
                                    forceReRender={[amount, currency, style]}
                                    fundingSource={undefined}
                                    createOrder={(data, actions) => {
                                        return actions.order
                                            .create({
                                                purchase_units: [
                                                    {
                                                        amount: {
                                                            currency_code: currency,
                                                            value: amount,
                                                        },
                                                    },
                                                ],
                                            })
                                            .then((orderId) => {
                                                // Your code here after create the order
                                                return orderId;
                                            });
                                    }}


                                    onApprove={function (data, actions) {
                                        return actions.order.capture().then(function () {

                                            // 결제 완료 확인 페이지로 전환
                                            {
                                                navigate("/lodgingPaymentEnd")
                                            }
                                            axios.post("http://localhost:8080/paymentInsert", null,
                                                {
                                                    params: {
                                                        userId: "예약번호테스트",
                                                        lodgingNum: "9023013111111111",
                                                        bookNum: BookNum,
                                                        payType: "PAYPAL",
                                                        payCost: {totalCost},
                                                        bookState: "예약중",
                                                        bookCheckInDt: "",
                                                        bookCheckOutDt: "2023-02-10",
                                                        adultNum: adultCount,
                                                        babyNum: childCount,
                                                        petNum: petCount,
                                                    }
                                                }
                                            )
                                                .then((req) => {
                                                    console.log("post방식으로 통신성공")
                                                    console.log(req); //데이터 넘어오는지 확인
                                                })
                                                .catch((err) => {
                                                    console.log('error발생')
                                                });
                                        });
                                    }}

                                    // 주문 중 취소를 했을 때 오류 발생 페이지로 이동한다.
                                    onCancel={function (data) {
                                        {
                                            navigate("/lodgingPaymentFailure")
                                        }
                                    }}
                                    onError={function (err) {
                                        alert('결제 중 에러발생')
                                        window.location.href = "/lodgingPaymentFailure";
                                    }}
                                />
                            </PayPalScriptProvider>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default LodgingPayment;