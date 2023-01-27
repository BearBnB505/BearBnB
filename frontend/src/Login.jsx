import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React, {useState} from "react";
import {Modal, ModalBody, ModalHeader, ModalTitle} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import DropdownMenu from "react-bootstrap/DropdownMenu";

function Login() {
    const [show, setShow] = useState(false);

    return (
        <>
            <DropdownItem href={"#"} onClick={() => setShow(true)}>
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
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Col sm>
                                    <Form.Control type="password" placeholder="UserID" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Col sm>
                                    <Form.Control type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>
                            <br/>

                            <div className="d-grid gap-1">
                                <button className={"btn btn-primary"}>Login</button>
                            </div>
                        </Form>
                    </Container>
                </ModalBody>
            </Modal>

        </>
    );
}

export default Login