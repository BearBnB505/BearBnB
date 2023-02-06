import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import {Container} from "react-bootstrap";
import Navbar from "./Navbar";
import axios from "axios";

function Table3() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/adminComplainList')
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
            <h4>신고관리</h4>
            <Table className={"table table-striped table-hover table-bordered"} >
                <thead>
                <tr>
                    <th>번호</th>
                    <th>신고자아이디</th>
                    <th>숙소번호</th>
                    <th>사유</th>
                    <th>정확한 사유</th>
                    <th>신고날짜</th>
                    <th>해결여부</th>
                </tr>
                </thead>
                <tbody>

                {
                    data.map((item,index) => {
                        return (
                            <tr>
                                {/*<td>{index + 1}</td>*/}
                                <td>{item.idx}</td>
                                <td>{item.userId}</td>
                                <td>{item.lodgingNum}</td>
                                <td>{item.reason}</td>
                                <td>{item.reasonDetail}</td>
                                <td>{item.complainDt}</td>
                                <td>{item.deleteYn}</td>
                            </tr>
                        )
                    })
                }


                </tbody>
            </Table>
        </Container>

    );

}

export default Table3;

const styles ={
    container:{
        width:1300,
    }
}

