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
                // console.log(data[0].name)
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
                    <th>번호</th>
                    <th>년도</th>
                    <th>결제방법</th>
                    <th>수익</th>
                </tr>
                </thead>
                <tbody>

                {
                    data.map((item,index) => {
                        return (
                            <tr>
                                <td>{item.idx}</td>
                                <td>{item.bookDt}</td>
                                <td>{item.payType}</td>
                                <td>{item.payCost}</td>
                            </tr>
                        )
                    })
                }

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

