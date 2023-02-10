
import React, {useState} from "react";

import {Breadcrumb, Tabs} from "react-bootstrap";
import Anima from "../Mypage/animaData";
import {motion} from "framer-motion";
import ReviewList from "./ReviewList";


function Review() {

    // 리뷰 DB 가져와서 리스트 형식으로 담길 배열
    const [data, setData] = useState([]);
    // 페이지당 게시물 수
    const [limit, setLimit] = useState(5);
    // 현재 페이지 번호(page)
    const [page, setPage] = useState(1);
    // 첫 게시물의 위치(offset)
    const offset = (page - 1) * limit;


    return (
        <motion.div variants={Anima}
                    initial="hidden"
                    animate="visible"
                    exit="exit" className={"container mt-5"}>
            <div className={"mb-5"}>
                <Breadcrumb>
                    <Breadcrumb.Item href="/hostMyPageMain">호스트마이페이지</Breadcrumb.Item>
                    <Breadcrumb.Item active>숙소에 작성된 후기</Breadcrumb.Item>
                </Breadcrumb>
                <h2 className={"fw-bold"}>숙소에 작성된 후기</h2>
            </div>
            <ReviewList/>

        </motion.div>
    )
}

export default Review;
