import React, {useEffect, useState} from 'react'
import { Modal,Button } from 'react-bootstrap'
import axios from "axios";

const DetailTable2 = ({ show, onHide }) =>{

    const [detailModalOn, setDetailModalOn] = useState(false);


    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/adminLodgingList')
            .then((req) => {
                const {data} = req;
                console.log(data);
                setData(data);

            })
            .catch((err) => {
                console.log("통신 오류");
            })
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
                    숙소관리
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>

                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DetailTable2;