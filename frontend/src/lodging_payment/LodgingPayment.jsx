import React, {useState} from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {Link} from "react-router-dom";
import Popover from "react-bootstrap/Popover";
import GuestCount from "../GuestCount";
import Overlay from "react-bootstrap/Overlay";

import {Modal, ModalBody, ModalHeader, ModalTitle} from "react-bootstrap";
import LodgingPayPal from "./LodgingPayPal";
import PaypalApp from "./LodgingPayPal";
// 확인 및 결제 페이지
function LodgingPayment(props){

    const styles={
        box :{

            border : "1px solid",
            borderColor : "#DDDDDD" ,
            borderRadius : "15px",
            height : "200px",
            width : "500px",
            marginTop : "28px",
            // backgroundColor :"#fafafa"
        }
    }

    // const initialOptions = {
    //     "client-id": "AelKrwx59EQIuE4_2aa69nqfooRHj2Q41Ko9IDTlD72BtjVbT_p3jaawmaQ16ciIL6m86So_MRYxxY4t",
    //     currency: "USD",
    //     intent: "capture",
    //     "data-client-token": "BiIyB3=O",
    // };

    const initialOptions = {
        "client-id": "test",
        currency: "USD",
        intent: "capture",
        "data-client-token": "abc123xyz==",
    };

    //모달창 띄우기 안띄우기
    const [showGuestCount, setShowGuestCount] = useState(false);
    // 성인수
    const [adult, setAdult] = useState(props.adultCount);
    // 유아수
    const [kids, setKids] = useState(0);
    // 반려동물수
    const [pet, setPet] = useState(1);


    return(
        <div className={'container'} style={{marginLeft : "600px"}}>
            <div className={'row align-items-start'}>
                <div className = {'col-1'} style={{display:"block", marginTop:"100px"}}>
                    {/*누르면 상세페이지로 이동*/}
                    <Link to={'#'}>
                        <img src='/leftArrow.png' style={{width :"20px"}}/>
                    </Link>
                </div>
                <div className={'col-3'}>
                    <p style={{fontSize:"35px", fontWeight:"bold", marginTop:"85px"}}>확인 및 결제</p>
                </div>
            </div>
            <div className={'row align-items-start'} style={styles.box}>
                <div className={'col-5 my-auto mx-auto'}>
                    <img src = '/concept/background.jpg' style={{width : "200px", height:"140px", borderRadius :"20px", padding:0}}/>
                </div>
                <div className = {"col-6 my-auto" }>
                    <p className={'fs-5'}>숙소이름 뭐시기뭐시기</p>
                    <p>★ 5.0</p>
                </div>
            </div>

            <div className={'col-8'}>
                <p style={{fontSize:"27px", fontWeight : "bold", paddingTop :"40px"}}>예약 정보</p>
                <div className={'row'}>
                    <div className={'col-10'}>
                        <p style={{fontSize:"20px", fontWeight : "bold", marginTop : "10px"}}>날짜</p>
                        <p style={{fontSize:"20px", marginTop : "-10px"}}>5월 17일 ~ 5월 19일</p>
                    </div>
                    <div className={'col-2'}>
                        <p style={{fontSize:"20px", fontWeight : "bold", textDecoration: "underline",  cursor:'default'}}>수정</p>
                    </div>
                    <div className={'col-10'}>
                        <p style={{fontSize:"20px", fontWeight : "bold", marginTop : "10px",  cursor:'default'}}>게스트</p>
                        <p style={{fontSize:"20px", marginTop : "-10px"}}>
                            {adult !==0 ?  "성인" + adult +"명 " : ""}
                            {kids !==0 ? "유아" + kids + "명 " : ""}
                            {pet !==0 ? "반려동물" + pet + "마리" : ""}
                        </p>
                    </div>
                    <div className={'col-2'}>
                        <p style={{fontSize:"20px", fontWeight : "bold", textDecoration: "underline", cursor:'default'}} onClick={()=>setShowGuestCount(true)}>수정</p>
                        {/*게스트 수 수정*/}
                        <Modal
                            show={showGuestCount}
                            onHide={()=> setShowGuestCount(false)}
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                        <ModalHeader closeButton={true}>
                        </ModalHeader>
                            <ModalBody>
                            <GuestCount>

                            </GuestCount>
                                <button className={'btn btn-primary'} onClick={()=>{
                                    setShowGuestCount(false)
                                }}>저장</button>
                            </ModalBody>
                        </Modal>

                    </div>
                    <hr style={{width:"810px"}} />
                </div>
                <p style={{fontSize:"27px", fontWeight : "bold", paddingTop :"20px"}}>요금 정보</p>
                <div className={'row'}>
                    <div className={'col-9'}>
                        <p style={{fontSize:"23px", color:"gray"}}> &#8361; 50000 x 3박 </p>
                    </div>
                    <div className={'col-3'}>
                        <p style={{fontSize:"23px"}}> &#8361; 150000 </p>
                    </div>
                    <button className={'btn btn-danger mt-5 col-3 mx-6 fs-5'} style={{marginLeft : "600px"}}>예약하기</button>
                    <PayPalScriptProvider options={{ "client-id": "AelKrwx59EQIuE4_2aa69nqfooRHj2Q41Ko9IDTlD72BtjVbT_p3jaawmaQ16ciIL6m86So_MRYxxY4t" }}>
                        <PayPalButtons style={{ layout: "horizontal" }} />
                    </PayPalScriptProvider>


                    {/*<PaypalApp/>*/}
                </div>
            </div>
        </div>

    )

}

export default LodgingPayment;