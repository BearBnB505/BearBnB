import React from "react";
import Table from 'react-bootstrap/Table';
import {Container} from "react-bootstrap";
import Navbar from "./Navbar";

function Table1() {

    return (
        <Container className="panel" style={styles.container}>
            <br />
            <br />
            <br />
            <h4>신고관리</h4>
            <Table className={"table table-striped table-hover table-bordered"} >
                <thead>
                <tr>
                    <th>번호</th>
                    <th>숙소번호</th>
                    <th>숙소명</th>
                    <th>호스트아이디</th>
                    <th>게스트아이디</th>
                    <th>숙소주소</th>
                    <th>신고날짜</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>a24553ee</td>
                    <td>서울숲집</td>
                    <td>bbb</td>
                    <td>ccc</td>
                    <td>서울강남</td>
                    <td>2022-11-02</td>
                    <td>자세히보기</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>a24553ee</td>
                    <td>서울숲집</td>
                    <td>bbb</td>
                    <td>ccc</td>
                    <td>서울강남</td>
                    <td>2022-11-02</td>
                    <td>자세히보기</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>a24553ee</td>
                    <td>서울숲집</td>
                    <td>bbb</td>
                    <td>ccc</td>
                    <td>서울강남</td>
                    <td>2022-11-02</td>
                    <td>자세히보기</td>
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