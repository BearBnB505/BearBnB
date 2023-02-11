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
                    <GuestInfoModal idx={props.idx} lodging_name={props.lodging_name} book_num={props.book_num}
                                    book_num={props.book_num} book_check_in_dt={props.book_check_in_dt}
                                    book_check_out_dt={props.book_check_out_dt}
                                    adult_num={props.adult_num} baby_num={props.baby_num} pet_num={props.pet_num}
                                    book_state={props.book_state} user_id={props.user_id} user_name={props.user_name} user_tel={props.user_tel}
                                    user_nation={props.user_nation}
                                    book_dt={props.book_dt} pay_cost={props.pay_cost} childValue={props.setKey} />
                </ModalBody>
            </Modal>
        </div>
    );
};

export default HostUserInfoModal;