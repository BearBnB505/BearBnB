import React, {useEffect, useState} from "react";
import {Table} from 'react-bootstrap';
import {Container} from "react-bootstrap";
import axios from "axios";

function Table1() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/adminMemberList')
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
                {/*    <td>호스트/게스트</td>*/}
                {/*    <td>이나라</td>*/}
                {/*    <td>bbb</td>*/}
                {/*    <td>010-111-4444</td>*/}
                {/*    <td>nara@gmail.com</td>*/}
                {/*    <td>활동중</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td>2</td>*/}
                {/*    <td>게스트</td>*/}
                {/*    <td>박진수</td>*/}
                {/*    <td>ccc</td>*/}
                {/*    <td>010-111-2222</td>*/}
                {/*    <td>gingin@gmail.com</td>*/}
                {/*    <td>탈퇴</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td>3</td>*/}
                {/*    <td>게스트</td>*/}
                {/*    <td>박진수</td>*/}
                {/*    <td>ccc</td>*/}
                {/*    <td>010-111-2222</td>*/}
                {/*    <td>gingin@gmail.com</td>*/}
                {/*    <td>활동중</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td>4</td>*/}
                {/*    <td>게스트</td>*/}
                {/*    <td>박진수</td>*/}
                {/*    <td>ccc</td>*/}
                {/*    <td>010-111-2222</td>*/}
                {/*    <td>gingin@gmail.com</td>*/}
                {/*    <td>탈퇴</td>*/}
                {/*</tr>*/}
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