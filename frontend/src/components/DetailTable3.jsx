import React, {useEffect, useState} from 'react'
import { Modal,Button } from 'react-bootstrap'
import axios from "axios";

const DetailTable3 = ({ show, onHide }) =>{

    const [info, setInfo] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8080/adminComplainList", {})
            .then((req) => {
                const {data} = req;
                setInfo(data);
            })
            .catch((err) => {

            });
    }, []);

    return(
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    신고관리
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    <li>번호 : {info.number}</li>
                    <li>신고자아이디 : {info.userId}</li>
                    <li>숙소번호 : </li>
                    <li>사유 : </li>
                    <li>정확한 사유 : </li>
                    <li>신고날짜 : </li>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DetailTable3;