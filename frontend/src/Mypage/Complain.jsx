import React, {useEffect, useState} from "react";
import {Breadcrumb, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faPencil} from "@fortawesome/free-solid-svg-icons";
import Anima from "./animaData";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import axios from "axios";
import ComplainPagenation from "./ComplainPagenation";

// const complain = [
//     {idx: 1, lodging_num: "1521", reason: "잘못된 정보", reason_detail: "객실 정보, 이미지 오류", complain_dt: "2023-01-17"},
//     {idx: 2, lodging_num: "1521", reason: "잘못된 정보", reason_detail: "객실 정보, 이미지 오류", complain_dt: "2023-01-17"},
//     {idx: 3, lodging_num: "1521", reason: "잘못된 정보", reason_detail: "객실 정보, 이미지 오류", complain_dt: "2023-01-17"},
//     {idx: 4, lodging_num: "1521", reason: "잘못된 정보", reason_detail: "객실 정보, 이미지 오류", complain_dt: "2023-01-17"},
// ]

function Complain() {

  const [data, setData] = useState([]);
  // 페이지당 게시물 수
  const [limit, setLimit] = useState(10);
  // 현재 페이지 번호(page)
  const [page, setPage] = useState(1);
  // 첫 게시물의 위치(offset)
  const offset = (page - 1) * limit;

  const [checkYN, setCheckYN] = useState(false);
  const [checkIdx, setCheckIdx] = useState(0);


  const deleteBtn=()=>{
    axios.put('http://localhost:8080/complainDelete/', null, {params:{idx: checkIdx}} )
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    axios.get('http://localhost:8080/complainList/')
      .then((req) => {
        const {data} = req;
        setData(data)
        console.log(data);
      })
      .catch((err) => {
        console.log("통신 오류");
        console.log(err);
      })
  }, []);


    return (
        <motion.div variants={Anima}
                    initial="hidden"
                    animate="visible"
                    exit="exit" className={"container mx-auto mt-5"}>
            <div className={"mb-5"}>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to={"../mypage"}>마이페이지</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>신고내역 확인</Breadcrumb.Item>
                </Breadcrumb>
                <h2 className={"fw-bold"}>신고내역 확인</h2>
            </div>


            <table className={"table table-hover table-striped"}>
                <thead>
                <tr>
                    <th>선택</th>
                    <th>신고번호</th>
                    <th>숙소번호</th>
                    <th>신고사유</th>
                    <th>상세사유</th>
                    <th>등록날짜</th>
                </tr>
                </thead>
                <tbody>
                {data.slice(offset, offset + limit).map((item) => {
                    return <ComplainList idx={item.idx} lodging_num={item.lodgingNum} reason={item.reason} reason_detail={item.reasonDetail} complain_dt={item.complainDt} setCheckYN={setCheckYN} checkYN={checkYN} setCheckIdx={setCheckIdx}/>
                })}
                </tbody>
            </table>

            <div>
                <button type="button" className="btn btn-outline-secondary btn-sm my-2 me-2" title="Edit">
                    <span><FontAwesomeIcon icon={faPencil} size="1x"/> 신고수정</span>
                </button>
                <button type="button" className="btn btn-outline-secondary btn-sm my-2" title="Edit" onClick={deleteBtn}>
                    <span><FontAwesomeIcon icon={faClose} size="1x"/> 신고삭제</span>
                </button>
            </div>

          <ComplainPagenation
            total={data.length}
            limit={limit}
            page={page}
            setPage={setPage}/>

        </motion.div>
    )
}

export default Complain;

function ComplainList({idx, lodging_num, reason, reason_detail, complain_dt, setCheckYN, checkYN,setCheckIdx}) {
  const [isChecked, setIsChecked] = useState(false);

  function CheckboxChange(event) {
    console.log(isChecked);
    setIsChecked(event.target.checked);
    console.log(isChecked);
    setCheckYN(!checkYN)
    setCheckIdx(idx)
  }
  // console.log(isChecked);
  // console.log(checkYN);





  // const [checkedItems, setCheckedItems] = useState([]);

  // const handleCheckboxChange = (event) => {
  //   if (event.target.checked) {
  //     setCheckedItems([...checkedItems, event.target.name]);
  //   } else {
  //     setCheckedItems(checkedItems.filter((item) => item !== event.target.name));
  //   }
  // };



    return (
        <tr>
            <td>
                <Form>
                    {/*{['checkbox'].map((type) => (*/}
                    {/*    <div key={`default-${type}`}>*/}
                    {/*        <Form.Check*/}
                    {/*            type={type}*/}
                    {/*            onChange={handleCheckboxChange}*/}
                    {/*            checked={checkedItems.includes(type)}*/}
                    {/*        />*/}
                          {['checkbox'].map((type) => (
                            <div key={`default-${type}`}>
                              <Form.Check
                                type={type}
                                onChange={CheckboxChange}
                              />
                        </div>
                    ))}
                </Form>


            </td>
            <td>{idx}</td>
            <td>{lodging_num}</td>
            <td>{reason}</td>
            <td>{reason_detail}</td>
            <td>{complain_dt}</td>
        </tr>
    )
}