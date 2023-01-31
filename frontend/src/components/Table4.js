import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import {Container} from "react-bootstrap";
import Navbar from "./Navbar";
import axios from "axios";

function Table4() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/adminBookingList')
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

                {
                    data.map((item,index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{"게스트"}</td>
                                <td>{item.name}</td>
                            </tr>
                        )
                    })
                }
                {/*<tr>
                    <td>2022</td>
                    <td>1월</td>
                    <td>10,000</td>
                </tr>
                <tr>
                    <td>2022</td>
                    <td>2월</td>
                    <td>10,000</td>
                </tr>
                <tr>
                    <td>2022</td>
                    <td>3월</td>
                    <td>10,000</td>
                </tr>
                <tr>
                    <td>2022</td>
                    <td>4월</td>
                    <td>10,000</td>
                </tr>
                <tr>
                    <td>2022</td>
                    <td>5월</td>
                    <td>10,000</td>
                </tr>
                <tr>
                    <td>2022</td>
                    <td>6월</td>
                    <td>10,000</td>
                </tr>
                <tr>
                    <td>2022</td>
                    <td>7월</td>
                    <td>10,000</td>
                </tr>
                <tr>
                    <td>2022</td>
                    <td>8월</td>
                    <td>10,000</td>
                </tr>
                <tr>
                    <td>2022</td>
                    <td>9월</td>
                    <td>10,000</td>
                </tr>
                <tr>
                    <td>2022</td>
                    <td>10월</td>
                    <td>10,000</td>
                </tr>
                <tr>
                    <td>2022</td>
                    <td>11월</td>
                    <td>10,000</td>
                </tr>
                <tr>
                    <td>2022</td>
                    <td>12월</td>
                    <td>10,000</td>
                </tr>*/}

                </tbody>
            </Table>
        </Container>
    );

}

export default Table4;

const styles ={
    container:{
        width:1300,
    }
}