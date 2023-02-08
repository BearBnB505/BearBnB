import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import {Container} from "react-bootstrap";
import Navbar from "./Navbar";
import axios from "axios";
import {Link} from "react-router-dom";
import DetailTable2 from "./DetailTable2";
import { Modal,Button } from 'react-bootstrap'


function Table2() {
    const [detailModalOn, setDetailModalOn] = useState(false);


    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/adminLodgingList')
            .then((req) => {
                const {data} = req;
                console.log(data);
                setData(data);

            })
            .catch((err) => {
                console.log("통신 오류");
            })
    }, []);

    return (


        <Container className="panel" style={styles.container}>
            <br />
            <br />
            <br />
            <h4>숙소관리</h4>
            <Table className={"table table-striped table-hover table-bordered"} >
                <thead>
                <tr>
                    <th>번호</th>
                    <th>숙소 번호</th>
                    <th>숙소명</th>
                    <th>호스트아이디</th>
                    <th>전화번호</th>
                    <th>이메일</th>
                    <th>신청날짜</th>
                    <th>별점</th>
                    <th>신고건수</th>
                    <th>신분증사진</th>
                    <th>상태</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((item,index) => {
                        return (
                            <tr key={item.idx}>
                                {/*<td>{index + 1}</td>*/}
                                <td>{item.idx}</td>
                                <td>{item.lodgingNum}</td>
                                <td>
                                    <Button key={item.idx} variant="secondary" onClick={()=>setDetailModalOn(true)}>{item.lodgingName}</Button>
                                </td>
                                <td>{item.userId}</td>
                                <td>{item.tel}</td>
                                <td>{'이메일'}</td>
                                <td>{'신청날짜'}</td>
                                <td>{'별점'}</td>
                                <td>{'신고건수'}</td>
                                <td>{'확인하기'}</td>
                                <td>{'영업중'}</td>
                            </tr>
                        )
                    })
                }



                </tbody>
            </Table>

            <DetailTable2 show={detailModalOn} onHide={()=>setDetailModalOn(false)}/>
        </Container>

    );

}

export default Table2;

const styles ={
    container:{
        width:1300,
    }
}
