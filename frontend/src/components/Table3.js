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

                {
                    data.map((item,index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{"게스트"}</td>
                                <td>{item.name}</td>
                                <td>{item.userId}</td>
                                <td>{item.tel}</td>
                                <td>{'이메일'}</td>
                                <td>{'활동중'}</td>
                            </tr>
                        )
                    })
                }
                {/*<tr>*/}
                {/*    <td>1</td>*/}
                {/*    <td>a24553ee</td>*/}
                {/*    <td>서울숲집</td>*/}
                {/*    <td>bbb</td>*/}
                {/*    <td>ccc</td>*/}
                {/*    <td>서울강남</td>*/}
                {/*    <td>2022-11-02</td>*/}
                {/*    <td>자세히보기</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td>2</td>*/}
                {/*    <td>a24553ee</td>*/}
                {/*    <td>서울숲집</td>*/}
                {/*    <td>bbb</td>*/}
                {/*    <td>ccc</td>*/}
                {/*    <td>서울강남</td>*/}
                {/*    <td>2022-11-02</td>*/}
                {/*    <td>자세히보기</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td>3</td>*/}
                {/*    <td>a24553ee</td>*/}
                {/*    <td>서울숲집</td>*/}
                {/*    <td>bbb</td>*/}
                {/*    <td>ccc</td>*/}
                {/*    <td>서울강남</td>*/}
                {/*    <td>2022-11-02</td>*/}
                {/*    <td>자세히보기</td>*/}
                {/*</tr>*/}

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