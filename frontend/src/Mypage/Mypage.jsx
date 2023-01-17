import React from "react";
import Card from "./Card";
import {
    faCamera, faUser, faHeart, faCalendarCheck, faCalendarMinus, faUserCog, faList, faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import {Link, Outlet} from "react-router-dom";


function Mypage(props) {
    return (
        <div className={"container mt-5"}>
            <div className={"row p-2 mb-5"}>
                <h2 className={"fw-bold"}>마이페이지</h2>
                <h5><strong>주연 김</strong>, gradispo@gmail.com · <strong>프로필로 이동</strong></h5>
            </div>
            <div className={"row"}>
                <Link style={styles.a} className={"col-sm-4"} to={"/members"}><Card id={"1"} icon={faUser} title={"본인정보 수정"} content={"성별, 이메일, 전화번호를 수정합니다"}/></Link>
                <Link style={styles.a} className={"col-sm-4"} to={"/review"}><Card id={"2"} icon={faCamera} title={"후기 관리"}
                                                                   content={"후기 내역을 확인, 삭제합니다"}/></Link>
                <Link style={styles.a} className={"col-sm-4"} to={"/members"}><Card id={"3"} icon={faHeart} title={"찜한 숙소 목록"}
                                                                   content={"내가 찜한 숙소 목록을 보여줍니다"}/></Link>
                <div className={"mt-3"}></div>
                <Link style={styles.a} className={"col-sm-4"} to={"/bookingConfirm"}><Card id={"4"} icon={faCalendarCheck} title={"예약내역 확인"}
                                                                   content={"내가 예약한 숙박 내역을 확인합니다"}/></Link>
                <Link style={styles.a} className={"col-sm-4"} to={"/members"}><Card id={"5"} icon={faCalendarMinus} title={"예약취소 확인"}
                                                                   content={"내가 예약 취소한 내역을 확인합니다"}/></Link>
                <Link style={styles.a} className={"col-sm-4"} to={"/members"}><Card id={"6"} icon={faUserCog} title={"호스트"}
                                                                   content={"숙소 관리, 예약, 매출, 대금 신청"}/></Link>
                <div className={"mt-3"}></div>
                <Link style={styles.a} className={"col-sm-4"} to={"/members"}><Card id={"7"} icon={faList} title={"신고 내역 확인"}
                                                                   content={"내가 신고한 내역을 확인합니다"}/></Link>
                <Link style={styles.a} className={"col-sm-4"} to={"/members"}><Card id={"8"} icon={faRightFromBracket} title={"회원 탈퇴"}
                                                                   content={"비밀번호 확인후 회원을 탈퇴합니다"}/></Link>
            </div>
            <Outlet/>
        </div>
    )
}

function createCard(props) {
    return (<Card
        key={Card.id}
        icon={Card.icon}
        title={Card.title}
        content={Card.content}
    />)
}

const styles = {
    a: {
        textDecoration: "none",
        color: "black",
    },


}

export default Mypage;


