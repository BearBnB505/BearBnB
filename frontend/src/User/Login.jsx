import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React, {useState} from "react";
import {Modal, ModalBody, ModalHeader, ModalTitle} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import DropdownMenu from "react-bootstrap/DropdownMenu";

import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";

import {loginUser} from "../Api/Users";
import {setRefreshToken} from "../Storage/Cookie";
import {SET_TOKEN} from "../Store/Auth";
import axios from "axios";
import {setCookie} from "../Storage/Cookies";
import Swal from "sweetalert2";

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

    const loginClicked = () => {
        axios.post('/auth/login', {
            userId: userId,
            pwd: userPwd
        }, {
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                const token = res.data;
                const today = new Date();
                const expireDate = today.setDate(today.getDate() * 7);

                if (token.refreshToken !== undefined) {
                    setCookie('refreshToken', token.refreshToken, {
                        path: '/',
                        secure: true,
                        sameSite: 'strict',
                        expires: new Date(expireDate)
                    });
                    // console.log(token.accessToken);
                    dispatch(SET_TOKEN({ accessToken: token.accessToken }));
                    setShow(false);
                }
            })
            .catch(err => {
                Swal.fire({
                    width: 300,
                    icon: 'error',
                    title: `로그인에 
                    실패하였습니다.`,
                    showConfirmButton: false,
                    timer: 800
                }).then(() => {
                    setShow(true);
                })
            })
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

export default Login