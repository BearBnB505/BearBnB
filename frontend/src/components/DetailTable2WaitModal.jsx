import React from "react";
import Modal from 'react-bootstrap/Modal';

function DetailTable2WaitModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Body>
                {/*<div className="modal-content rounded-3 shadow">*/}
                    <div className="modal-body p-4 text-center">
                        <h5 className="mb-0">정말 승인 확정 하시겠습니까?</h5>
                        <p className="mb-0">한번 승인된 숙소는 취소 하실수 없습니다.</p>
                    </div>
                    <div className="modal-footer flex-nowrap p-0">
                        <button type="button" onClick={props.onHide}
                                className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-end">
                            <strong>취소</strong></button>

                        <button type="button"
                                className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0"
                                data-bs-dismiss="modal"> <strong>승인 확정</strong>
                        </button>
                    </div>
                {/*</div>*/}
            </Modal.Body>
        </Modal>
    )
}

export default DetailTable2WaitModal;
