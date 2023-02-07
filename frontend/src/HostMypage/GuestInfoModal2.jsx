import React from "react";
import "./GuestInfoModalCss.scss";

function GuestInfoModal2(props) {

    return (
        <div className={'container pb-2'}>
            <div className={'row col-8 mx-auto pt-2 border rounded-5'}>
                <div className={'col-3'}>
                    <img src='/img/user.png' style={{width:"100px"}}/>
                </div>
                <div className={'col'}>
                    <p>이름 : {props.user_name}</p>
                    <p>아이디 : {props.user_id}</p>
                    <p>국적 : {props.user_nation}</p>
                    <p className={"mb-2"}>전화번호 : {props.user_tel}</p>
                </div>
            </div>

            <div className={'row col-8 mx-auto pt-3'}>
                <div className={'col-3 pb-2'} id={'property'}>
                    <p>예 약 번 호</p>
                    <p>숙 소 명</p>
                    <p>날 짜</p>
                    <p>인 원 수</p>
                    <p>예 약 날 짜</p>
                    <p>결 제 금 액</p>
                </div>

                <div className={'col'}>
                    <p>: {props.book_num}</p>
                    <p>: {props.lodging_name}</p>
                    <p>: {props.book_check_in_dt} - {props.book_check_out_dt}</p>
                    <p>: 성인 {props.adult_num}명, 아기 {props.baby_num}명 반려동물 {props.pet_num}마리</p>
                    <p>: {props.book_dt}</p>
                    <p>: {props.pay_cost}원</p>
                </div>
            </div>

        </div>
    );
}

export default GuestInfoModal2;