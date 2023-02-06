import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React, {useState} from "react";
import {Modal, ModalBody, ModalHeader, ModalTitle} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";

import * as AuthenticationService from "../Auth/AuthenticationService"

import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";

import {loginUser} from "../Api/Users";
import {setRefreshToken} from "../Storage/Cookie";
import {SET_TOKEN} from "../Store/Auth";

function Login() {
    const [show, setShow] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userId, setUserId] = useState();
    const [userPwd, setUserPwd] = useState();
    
    const handleIdInput = (e) => {
        setUserId(e.target.value);
    }

    const handlePwdInput = (e) => {
        setUserPwd(e.target.value);
    }

    // const loginClicked = () => {
    //     // if (userId === 'tester2' && userPwd === '1111') {
    //     //     console.log('로그인 성공');
    //     // }
    //
    //     // AuthenticationService
    //     //     .executeJwtAuthenticationService(userId, userPwd)
    //     //     .then((response) => {
    //     //         AuthenticationService.registerSuccessfulLoginForJwt(userId, response.data.token);
    //     //         setShow(false);
    //     //     })
    //     //     .catch(() => {
    //     //         console.log('로그인 실패');
    //     //     })
    // }

    // 백으로 유저 정보 전달
    const loginClicked = async ({userId, userPwd}) => {

        const response = await loginUser({userId, userPwd});

        if (response.status) {
            setRefreshToken(response.json.refresh_token);
            dispatch(SET_TOKEN(response.json.accessToken));

            return navigate("/");
        } else {
            console.log(response.json);
        }
        setUserPwd("");
    }
    
    return (
        <>
            <DropdownItem onClick={() => setShow(true)}>
                로그인
            </DropdownItem>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ModalHeader className={'d-flex'} closeButton={true}>
                    <ModalTitle className={'flex-grow-1 text-center ps-4'}>로그인</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Container className="container d-flex justify-content-center my-3">
                        <Form className={"w-75"}>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextUserId">
                                <Col sm>
                                    <Form.Control
                                        type="text" placeholder="UserID"
                                        onChange={handleIdInput}
                                        value={userId}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Col sm>
                                    <Form.Control
                                        type="password" placeholder="Password"
                                        onChange={handlePwdInput}
                                        value={userPwd}
                                    />
                                </Col>
                            </Form.Group>
                            <br/>

                            <div className="d-grid gap-1">
                                <button className={"btn btn-primary"} onClick={loginClicked}>Login</button>
                            </div>
                        </Form>
                    </Container>
                </ModalBody>
            </Modal>

        </>
    );
}

export default Login;