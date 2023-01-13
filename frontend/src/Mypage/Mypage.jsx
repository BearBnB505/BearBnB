import React from "react";
import Card from "./Card";

function Mypage(props) {
    return (
        <div className={"container mt-5"}>
            <div className={"row"}>
                <Card id={"1"} title={"본인정보 수정"} content={"성별, 이메일, 전화번호를 수정합니다"}/>
                <Card id={"2"} title={"후기 관리"} content={"후기 내역을 확인, 삭제합니다"}/>
                <Card id={"3"} title={"찜한 숙소 목록"} content={"내가 찜한 숙소 목록을 보여줍니다"}/>
                <div className={"mt-3"}></div>
                <Card id={"4"} title={"예약내역 확인"} content={"내가 예약한 숙박 내역을 확인합니다"}/>
                <Card id={"5"} title={"예약취소 확인"} content={"내가 예약 취소한 내역을 확인합니다"}/>
                <Card id={"6"} title={"호스트"} content={"숙소 관리, 예약, 매출, 대금 신청"}/>
                <div className={"mt-3"}></div>
                <Card id={"7"} title={"신고 내역 확인"} content={"내가 신고한 내역을 확인합니다"}/>
                <Card id={"8"} title={"회원 탈퇴"} content={"비밀번호 확인후 회원을 탈퇴합니다"}/>
            </div>
        </div>
    )
}

export default Mypage;


function createCard(props) {
    return (
        <Card
            key={Card.id}
            title={Card.title}
            content={Card.content}
        />
    )
}