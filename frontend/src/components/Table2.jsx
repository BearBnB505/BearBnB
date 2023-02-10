import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import {Container} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";

function Table2() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/adminLodgingList')
            .then((req) => {
                const {data} = req;
                setData(data);
                console.log(data);
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
                <tr className={"text-center"}>
                    <th>번호</th>
                    <th>숙소 번호</th>
                    <th>숙소명</th>
                    <th>호스트아이디</th>
                    <th>신청날짜</th>
                    <th>별점</th>
                    <th>신고건수</th>
                    <th>상태</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((item,index) => {
                        return (
                            <tr>
                                {/*<td>{index + 1}</td>*/}
                                <td className={"text-center"}>{item.idx}</td>
                                <td>{item.lodgingNum}</td>
                                <td><Link to={`/admin/lodging/detail2/${item.lodgingNum}`}>{item.lodgingName}</Link></td>
                                <td>{item.userId}</td>
                                <td>{item.createDt}</td>
                                <td className={"text-center"}>{ item.review > 0 ? <>&#x2B50; {item.review}</> : <> - </> }</td>
                                <td className={"text-center"}>{ item.count > 0 ? <>{item.count}</> : <> - </> }</td>
                                <td>{item.regState}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        </Container>

    );

}

export default Table2;

const styles ={
    container:{
        width:1300,
    }
}
