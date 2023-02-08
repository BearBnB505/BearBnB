import React from "react";
import Modal from 'react-bootstrap/Modal';
import TextArea from "./TextArea";
import {Button, CloseButton} from "react-bootstrap";
import StarRating from "./StarRating";

function log(value) {
    console.log(value);
}

function BookingModalReview(props) {
    return (
        <Modal
            {...props}
            size="xl">
            <div>
                <Modal.Body>
                    <div className={"container"}>
                        <CloseButton onClick={props.onHide} className={"mt-2"}></CloseButton>
                    </div>

                    <div className={"row p-4"}>
                        <div className={"mt-2 mb-4"}>
                            <h4><sapn className="fw-bold">후기 등록</sapn></h4>
                        </div>

                        <div className={"col-6"}>
                            <ul className="list-group list-group-horizontal">
                                <li className="list-group item col-sm-4 col-md-4 my-1">
                                    <div className="mb-1 py-1">청결도</div>
                                    <div className="mb-1 py-1">정확성</div>
                                    <div className="mb-1 py-1">의사소통</div>
                                </li>
                                <li className="list-group item col-sm-7 col-md-7">
                                    <StarRating onChange={log}/>
                                    <StarRating onChange={log}/>
                                    <StarRating onChange={log}/>
                                </li>
                            </ul>
                        </div>

                        <div className={"col-6"}>
                            <ul className="list-group list-group-horizontal">
                                <li className="list-group item col-sm-4 col-md-4 my-1">
                                    <div className="mb-1 py-1">위치</div>
                                    <div className="mb-1 py-1">체크인</div>
                                    <div className="mb-1 py-1">가격대비 만족도</div>
                                </li>
                                <li className="list-group item col-sm-7 col-md-7">
                                    <StarRating onChange={log}/>
                                    <StarRating onChange={log}/>
                                    <StarRating onChange={log}/>
                                </li>
                            </ul>
                        </div>



                        <div className={"col-12 mt-3"}>
                            <TextArea
                                type="max"
                                threshold={200}
                                className="textarea-max"
                            />
                            <Button className={"mt-4 w-100"} style={{height:50}}>후기 작성하기</Button>
                        </div>

                    </div>

                </Modal.Body><br/>

            </div>



        </Modal>
    )
}

export default BookingModalReview;