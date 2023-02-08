import React, {useState} from "react";
import Swal from "sweetalert2";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faList} from "@fortawesome/free-solid-svg-icons";
import {Modal, ModalBody, ModalHeader, ModalTitle} from "react-bootstrap";
// import GuestInfoModal from "../GuestInfoModal";

function DetailTable2({lodging_name, book_state, book_dt, pay_cost, childValue}) {

    const [show, setShow] = useState(false);

    const onClickConfirm = () => {
        Swal.fire({
            icon: 'success',
            title: '승인되었습니다.',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            setShow(false);
            childValue('tab2');
        })
    };

    const onClickReject = () => {
        Swal.fire({
            title: '정말 거절하시겠습니까?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '거절합니다',
            cancelButtonText: '취소'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire( {
                    title: '거절되었습니다!',
                    icon: 'success'
                }).then(() => {
                    setShow(false);
                    childValue('tab3');
                })
            }
        })
    };

    const styles = {
        ul: {
            border: "none",
            display: "block",
            listStyleType: "disc",
            marginBlockStart: "1em",
            marginBlockEnd: "1em",
            marginInlineStart: 0,
            marginInlineEnd: 0,
            paddingInlineStart: 0,
        },
        li: {}
    };

    return (

        <ul className={"list-group mb-4"} style={styles.ul}>
            <li className={"list-group-item p-4"} style={styles.li}>
                <div className={"mb-2"}>
                    <span className={"fs-5 fw-bold me-2"}>{book_state}</span>
                    <small className={"text-secondary"}>{book_dt}</small>
                </div>
                <div className={"mb-1"}>{lodging_name}</div>
                <div className={"mb-2"}>결제 금액 : {pay_cost}</div>

                <div className={"row"}>
                    <div className={"col-2 pe-0"} style={{width:120}}>

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
                                {/*<GuestInfoModal />*/}

                                <div className={'row justify-content-center mb-2'}>
                                    <button className={'col-3 btn btn-primary'} onClick={onClickConfirm}>승인</button>
                                    <button className={'col-3 btn btn-danger ms-5'} onClick={onClickReject}>거절</button>
                                </div>
                            </ModalBody>
                        </Modal>
                    </div>

                    <div className={"col-1 p-0"}>
                        <button type="button" className="btn btn-outline-secondary btn-sm my-2" title="Edit" onClick={onClickReject}>
                            <span><FontAwesomeIcon icon={faClose} size="1x"/> 거절</span>
                        </button>
                    </div>
                </div>
            </li>
        </ul>
    );
}

export default DetailTable2;
