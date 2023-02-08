import React, {useEffect, useState} from "react";
import {Breadcrumb, Tabs} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faPencil, faStar} from "@fortawesome/free-solid-svg-icons";
import Anima from "../Mypage/animaData";
import {motion} from "framer-motion";
import ReviewItem from "./ReviewItem";
import axios from "axios";
import ReviewList from "./ReviewList";


function Review() {

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
