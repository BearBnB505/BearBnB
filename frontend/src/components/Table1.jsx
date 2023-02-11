import React, {useEffect, useState} from "react";
import {Table} from 'react-bootstrap';
import {Container} from "react-bootstrap";
import axios from "axios";
import Table1PageList from "./Table1PageList";
import {useParams} from "react-router";

function Table1() {

    const [data, setData] = useState([]);
    const [members, setMembers] = useState([]);

    const [firstPage, setFirstPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    // const [pageNum, setPageNum] = useState(1);

    useEffect(() => {
        axios.get('http://localhost:8080/admin/')
            .then((req) => {
                const {data} = req;
                console.log(data);
                setData(data);
                setMembers(data.page.list);
                setFirstPage(data.firstPage);
                setCurrentPage(data.currentPage);
                setLastPage(data.lastPage);
                // setPageNum(data.page.pageNum);
            })
            .catch((err) => {
                console.log("통신 오류");
            })
    }, []);

    return (
        <Container className="panel" style={styles.container}>
            <br/>
            <br/>
            <br/>
            <h4>회원관리</h4>
            <Table className={"table table-striped table-hover table-bordered"}>
                <thead>
                <tr>
                    <th>번호</th>
                    {/*<th>사용자</th>*/}
                    <th>이름</th>
                    <th>아이디</th>
                    <th>전화번호</th>
                    {/*<th>이메일</th>*/}
                    {/*<th>상태</th>*/}
                </tr>
                </thead>

                <tbody>
                {
                    members.map((item, index) => {
                        return (
                            <tr>
                                {/*<td>{index + 1}</td>*/}
                                <td>{item.idx}</td>
                                {/*<td>{"게스트"}</td>*/}
                                <td>{item.name}</td>
                                <td>{item.userId}</td>
                                <td>{item.tel}</td>
                                {/*<td>{'이메일'}</td>*/}
                                {/*<td>{'활동중'}</td>*/}
                            </tr>
                        )
                    })
                }
                </tbody>

                <div className={"mt-5"}>
                <Table1PageList firstPage={firstPage} currentPage={currentPage} lastPage={lastPage} members={members}/>
                </div>
            </Table>

        </Container>
    );
}

export default Table1;

const styles = {
    container: {
        width: 1300,
    }
}

