import React, {useEffect, useState} from "react";
import styles from "../Mypage/Style.css";
import Card from "../Mypage/Card.jsx";
import {
    faCamera, faUser, faHeart, faCalendarCheck, faCalendarMinus, faUserCog, faList, faRightFromBracket,faHouse,faSackDollar
} from "@fortawesome/free-solid-svg-icons";
import {Link, Outlet} from "react-router-dom";
import Anima from "../Mypage/animaData.jsx";
import {motion} from "framer-motion";
import {useLocation} from "react-router";
import axios from "axios";


function HostMyPageMain(props) {
  const location = useLocation();
  const userId = location.state.userId;
  // console.log('userId: '+ userId);

  const [data, setData] = useState([]);
  const [name, setName] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/Members',{params: {userId: userId}})
      .then((req) => {
        const {data} = req;
        // console.log(data);
        setData(data);
        setName(data[0].name)
      })
      .catch((err) => {
        // console.log("통신 오류");
        // console.log(err);
      })
  }, []);

    return (
        <motion.div variants={Anima}
                    initial="hidden"
                    animate="visible"
                    exit="exit" className={"container mt-5"}>
            <div className={"row p-2 mb-5"}>
                <h2 className={"fw-bold"}>호스트 마이페이지</h2>
                <h5><strong>{name}</strong>, {userId}</h5>
            </div>
            <div className={"row"}>
                <Link className={"col-sm-4"} to={`/hostMyPageHostInfo/${userId}`} state={{userId: userId}}>
                    <Card id={"1"} icon={faUser} title={"호스트정보관리"} content={"소개, 사용언어 등을 수정합니다"}/>
                </Link>

                <Link className={"col-sm-4"} to={`/hostMyPageLodging/${userId}`} state={{userId: userId}}>
                {/*<Link style={styles.a} className={"col-sm-4"} to={"/hostMyPageLodging"}>*/}
                    <Card id={"2"} icon={faHouse} title={"숙소관리"} content={"새로운 숙소 등록, 등록된 숙소를 관리합니다."}/>
                </Link>

                <Link className={"col-sm-4"} to={`/hostMyPageBooking/${userId}`} state={{userId: userId}}>
                    <Card id={"3"} icon={faCalendarCheck} title={"예약관리"} content={"예약목록, 예약 취소 목록을 확인할 수 있습니다."}/>
                </Link>

                <div className={"mt-3"}></div>

                <Link className={"col-sm-4"} to={`/hostMyPageReview/${userId}`} state={{userId: userId}}>
                {/*<Link className={"col-sm-4"} to={"/hostMyPageReview"}>*/}
                    <Card id={"4"} icon={faCamera} title={"후기관리"} content={"숙소에 달린 후기를 확인할 수 있습니다."}/>
                </Link>

                <Link className={"col-sm-4"} to={"/hostMyPageRevenue"}><Card id={"5"} icon={faSackDollar}
                                                                         title={"매출관리"}
                                                                         content={"달 별 매출 확인과 대금 신청을 할 수 있습니다."}/></Link>
            </div>

            <Outlet/>
        </motion.div>
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

export default HostMyPageMain;


