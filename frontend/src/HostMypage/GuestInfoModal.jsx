import React from "react";
import "./GuestInfoModalCss.scss";

function GuestInfoModal(props) {

    return (
        <div className={'container pb-2'}>
            <div className={'row col-8 mx-auto pt-2 border rounded-5'}>
                <div className={'col-3'}>
                    <img src='/img/user.png' style={{width:"100px"}}/>
                </div>
                <div className={'col'}>
                    <p>이름 : 김김김</p>
                    <p>아이디 : 1234</p>
                    <p>국적 : 한국</p>
                    <p className={"mb-2"}>전화번호 : 010-1111-1111</p>
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
                    <p>: as22</p>
                    <p>: 바다가 보이는 콘도</p>
                    <p>: 2022.12.30 - 2022.12.31</p>
                    <p>: 성인 2명, 반려동물 1마리</p>
                    <p>: 2022.12.04</p>
                    <p>: 130,000원</p>
                </div>
            </div>

        </div>
    );
}

export default GuestInfoModal;