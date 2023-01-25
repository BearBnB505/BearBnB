import React from "react";
import Table from 'react-bootstrap/Table';
import {Container} from "react-bootstrap";
import Navbar from "./Navbar";

function Table1() {

    return (
        <Container className="panel" style={styles.container}>
            <Navbar />
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
                <tr>
                    <td>1</td>
                    <td>a24553ee</td>
                    <td>서울숲집</td>
                    <td>bbb</td>
                    <td>010-111-4444</td>
                    <td>nara@gmail.com</td>
                    <td>2022-11-02</td>
                    <td>3.1</td>
                    <td>7</td>
                    <td>확인하기</td>
                    <td>영업중</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>a24553ee</td>
                    <td>서울숲집</td>
                    <td>bbb</td>
                    <td>010-111-4444</td>
                    <td>nara@gmail.com</td>
                    <td>2022-11-02</td>
                    <td>4.8</td>
                    <td>1</td>
                    <td>확인하기</td>
                    <td>승인대기</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>a24553ee</td>
                    <td>서울숲집</td>
                    <td>bbb</td>
                    <td>010-111-4444</td>
                    <td>nara@gmail.com</td>
                    <td>2022-11-02</td>
                    <td>3.9</td>
                    <td>3</td>
                    <td>확인하기</td>
                    <td>영업정지</td>
                </tr>

                </tbody>
            </Table>
        </Container>

    );

}

export default Table1;

const styles ={
    container:{
        width:1300,
    }
}