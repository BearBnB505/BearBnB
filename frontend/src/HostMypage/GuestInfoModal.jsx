import React from "react";
import GuestInfoModalButton from "./GustInfoModalButton";

function GuestInfoModal(){

    return(
        <div className={'container'}>
            <div className={'row col-6 mx-auto'}>
                <div className={'col-3'}>
                    <img src='/img/user.png' style={{width:"100px"}}/>
                </div>
                <div className={'col'}>
                    <p>이름 : 김김김</p>
                    <p>아이디 : 1234</p>
                    <p>국적 : 한국</p>
                    <p>전화번호 : 010-1111-1111</p>
                </div>
            </div>
            <div className={'row col-6 mx-auto'}>
                <div className={'col'}>
                    <p>예약번호 : as22</p>
                    <p>숙소명 : 바다가 보이는 콘도</p>
                    <p>날짜 : 2022.12.30 - 2022.12.31</p>
                    <p>인원수 : 성인 2명, 반려동물 1마리</p>
                    <p>예약날짜 : 2022.12.04</p>
                    <p>결제금액 : 130,000원</p>
                </div>
                {/*<div className={'row mt-3'}>*/}
                {/*    <button className={'col-3 btn btn-primary'} onClick={onClickConfirm}>승인</button>*/}
                {/*    <button className={'col-3 btn btn-danger ms-3'} onClick={onClickReject}>거절</button>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default GuestInfoModal