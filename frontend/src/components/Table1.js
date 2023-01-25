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
            <h4 >회원관리</h4>
            <Table className={"table table-striped table-hover table-bordered"} >
                <thead>
                <tr>
                    <th>번호</th>
                    <th>캐릭터</th>
                    <th>이름</th>
                    <th>아이디</th>
                    <th>전화번호</th>
                    <th>이메일</th>
                    <th>상태</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>호스트/게스트</td>
                    <td>이나라</td>
                    <td>bbb</td>
                    <td>010-111-4444</td>
                    <td>nara@gmail.com</td>
                    <td>활동중</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>게스트</td>
                    <td>박진수</td>
                    <td>ccc</td>
                    <td>010-111-2222</td>
                    <td>gingin@gmail.com</td>
                    <td>탈퇴</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>게스트</td>
                    <td>박진수</td>
                    <td>ccc</td>
                    <td>010-111-2222</td>
                    <td>gingin@gmail.com</td>
                    <td>활동중</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>게스트</td>
                    <td>박진수</td>
                    <td>ccc</td>
                    <td>010-111-2222</td>
                    <td>gingin@gmail.com</td>
                    <td>탈퇴</td>
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