import React, {useEffect, useState} from "react";
import {Breadcrumb, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faPencil} from "@fortawesome/free-solid-svg-icons";
import Anima from "../Mypage/animaData";
import {motion} from "framer-motion";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import './Lodging.css'

import PageNation from "./LodgingPagenation";
import {useLocation} from "react-router";
import {Auth} from "../Auth/Auth";


function HostMyPageLodging() {

    // const location = useLocation();
    // const userId = location.state.userId;
    const auth = Auth();
    const userId = auth.userId;

    const [lengthInfo, setLengthInfo] = useState(1);
    const [limitInfo , setLimitInfo] = useState(5);
    const [pageInfo, setPageInfo] = useState(1);

    const offset = (pageInfo - 1) * limitInfo;

    const [offsetInfo , setOffsetInfo] = useState(offset);

    const [data, setData] = useState('');
    const navigate = useNavigate();
    const onClickRegLodging = () => {
        axios.get("http://localhost:8080/checkAuthority",{
            params :{
                // userId : "gione@naver.com",
                userId : userId,
            }
        })
            .then((req)=>{
                const {data} = req;
                setData(data);
                //console.log(data)

                if(data ==='ROLE_USER'){
                    navigate("/reg/lodgingHostId")
                } else if(data ==='ROLE_HOST'){
                    navigate("/reg")
                }
            })
            .catch((err)=>{
                console.log(err);
                console.log('에러발생')
            })
    }

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
                    <button className={"btn btn-primary col-2"} onClick={onClickRegLodging}>새로운 숙소 등록하기</button>
                </div>

            </div>

            <table className={"table table-hover table-striped"}>
                <thead className={'text-center'}>
                <tr className={'LodgingLine'}>
                    <th>번호</th>
                    <th>숙소명</th>
                    <th>&nbsp;&nbsp;상태</th>
                    <th>침실</th>
                    <th>침대</th>
                    <th>욕실</th>
                    <th>위치</th>
                    <th>최종수정일</th>
                </tr>
                </thead>
                <tbody className={'text-center'}>

                <ComplainList setLengthInfo={setLengthInfo}
                              setLimitInfo={setLimitInfo}
                              setPageInfo={setPageInfo}
                              pageInfo={pageInfo}
                              offsetInfo={offsetInfo}
                              setOffsetInfo={setOffsetInfo}/>

                <PageNation total={lengthInfo}
                            limit={limitInfo}
                            page={pageInfo}
                            setPage={setPageInfo}
                            setOffsetInfo={setOffsetInfo}/>
                </tbody>
            </table>
        </motion.div>
    )
}
export default HostMyPageLodging;


function ComplainList(props) {

    // 숙소 DB 가져와서 리스트 형식으로 담길 배열
    const [data, setData] = useState([]);
    // 페이지당 게시물 수
    const [limit, setLimit] = useState(5);
    // 현재 페이지 번호(page)
    const [page, setPage] = useState(1);
    // 첫 게시물의 위치(offset)
    const offset = (page - 1) * limit;

    // 유저정보 호출
    const location = useLocation();
    const userId = location.state.userId;


    useEffect(() => {
        axios.get('http://localhost:8080/AllLodgingList/', {params:{userId:userId}})
            .then((req) => {
                const {data} = req;
                const length = data.length
                Number(length)
                //console.log(length);

                // console.log(data);
                setData(data);
                props.setLengthInfo(length)
                props.setLimitInfo(limit)
                // props.setPageInfo(page)
                props.setOffsetInfo(offset)
                setPage(props.pageInfo)
            })
            .catch((err) => {
                console.log("통신 오류");
            })
    }, []);


    return (

        data.slice(props.offsetInfo, props.offsetInfo + limit).map((item, index) => {

            return (
                <table className={"table table-striped"}>
                    <tr className={'LodgingLine'}>
                        <td>{data.length - index}</td>
                        <Link to={`/hostMyPageLodging/HouseInfoUpdate/${item.lodgingNum}`}
                              state={{lodgingNum: `${item.lodgingNum}`}} style={{color: "black"}}>
                            {item.lodgingName}
                        </Link>
                        {item.regState == '승인완료' ? <td>
                            <button className={'btn btn-primary'} style={{backgroundColor:"#0d6efd"}}>승인완료</button>
                        </td> : <td>
                            <button className={'btn btn-danger'} style={{backgroundColor:"#dc3545"}}>심사 중</button>
                        </td>}
                        <td>{item.bedroomNum}</td>
                        <td>{item.bedNum}</td>
                        <td>{item.bathroomNum}</td>
                        <td>{item.addr}</td>
                        <td style={{borderBottom:"none"}}>{item.createDt}</td>
                    </tr>
                </table>
            )
        })
    )
}
