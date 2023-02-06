import React, {useState} from 'react';
import GuestInfoModal from "./GuestInfoModal";
import {Modal, ModalBody, ModalHeader, ModalTitle} from "react-bootstrap";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList} from "@fortawesome/free-solid-svg-icons";

const HostUserInfoModal = (props) => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <button type="button" className="btn btn-outline-secondary btn-sm my-2" title="Edit" onClick={() => setShow(true)}>
                <span><FontAwesomeIcon icon={faList} size="1x"/> 상세내역</span>
            </button>

            <Modal
                size={"lg"}
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ModalHeader className={'d-flex'} closeButton={true}>
                    <ModalTitle className={'flex-grow-1 text-center ps-4'}>예약내역</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <GuestInfoModal />
                </ModalBody>
            </Modal>
        </div>
    );
};

export default HostUserInfoModal;