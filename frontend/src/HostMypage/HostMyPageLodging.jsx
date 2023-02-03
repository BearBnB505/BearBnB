import React, {useEffect, useState} from "react";
import {Breadcrumb, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faPencil} from "@fortawesome/free-solid-svg-icons";
import Anima from "../Mypage/animaData";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import axios from "axios";
import './Lodging.css'

import MainContents from "../Main/MainContents";
import {number} from "prop-types";


function HostMyPageLodging() {


  return (

    <motion.div variants={Anima}
                initial="hidden"
                animate="visible"
                exit="exit" className={"container mx-auto mt-5"}>
      <div className={"mb-5"}>
        <Breadcrumb>
          <Breadcrumb.Item href="/hostMyPageMain">호스트마이페이지</Breadcrumb.Item>
          <Breadcrumb.Item href="/HostMyPageLodging" active>숙소관리</Breadcrumb.Item>
        </Breadcrumb>
        <div className={'row'}>
          <h2 className={"fw-bold col-10"}>숙소관리</h2>
          <Link to={"/lodgingWelcome"} className={'col-2'}>
            <button className={"btn btn-primary"}>새로운 숙소 등록하기</button>
          </Link>
        </div>

      </div>

      <table className={"table table-hover table-striped"}>
        <thead className={'text-center'}>
        <tr className={'LodgingLine'}>
          <th>번호</th>
          <th>숙소명</th>
          <th>상태</th>
          <th>침실</th>
          <th>침대</th>
          <th>욕실</th>
          <th>위치</th>
          <th>최종수정일</th>
        </tr>
        </thead>
        <tbody className={'text-center'}>

        <ComplainList/>

        </tbody>
      </table>


    </motion.div>
  )
}

export default HostMyPageLodging;

function ComplainList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/lodgingList')
      .then((req) => {
        const {data} = req;
        // console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log("통신 오류");
      })
  }, []);
  return (

    data.map((item, index) => {

      return (
        <tr className={'LodgingLine'}>
          <td>{index+1}</td>
          <Link to={`/hostMyPageLodging/HouseInfoUpdate/${item.lodgingNum}`} state={{lodgingNum: `${item.lodgingNum}`}} style={{color: "black"}}>
            {item.lodgingName}
          </Link>
          {/*<a href={`HouseInfoUpdate`} style={{color: "black"}}>*/}
          {/*  ${item.lodgingName}*/}
          {/*</a>*/}
          {item.regState == '승인완료' ? <td><button className={'btn btn-primary'}>승인완료</button> </td>: <td><button className={'btn btn-danger'}>심사 중</button></td>}
          <td>{item.bedroomNum}</td>
          <td>{item.bedNum}</td>
          <td>{item.bathroomNum}</td>
          <td>{item.addr}</td>
          <td>{item.createDt}</td>
        </tr>
      )
    })

  )
}