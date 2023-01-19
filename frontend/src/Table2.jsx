import React from "react";
import Table from 'react-bootstrap/Table';
import {Container} from "react-bootstrap";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function Table1() {

    return (
        <Container className="panel" style={styles.container}>
            <Router>
            <Navbar />
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>번호</th>
                    <th>캐릭터2</th>
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
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>

                </tbody>
            </Table>
            </Router>
        </Container>

    );

}

export default Table1;

const styles ={
    container:{
        width:1300,
    }
}