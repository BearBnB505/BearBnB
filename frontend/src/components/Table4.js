import React from "react";
import Table from 'react-bootstrap/Table';
import {Container} from "react-bootstrap";
import Navbar from "./Navbar";

function Table1() {

    return (
        <Container className="panel" style={styles.container}>
            <Navbar />
            <h4>매출관리</h4>
            <Table className={"table table-striped table-hover table-bordered"} >
                <thead>
                <tr>
                    <th>년도</th>
                    <th>월</th>
                    <th>수익</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>

                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
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