import React from "react";
import Modal from 'react-bootstrap/Modal';
import Anima from "../../Mypage/animaData";
import {motion} from "framer-motion";
import ModalAverageForm from "./ModalAverageForm";
import {CloseButton} from "react-bootstrap";
import ModalReviewList from "./ModalReviewList";


function ModalReview(props) {
    return (
        <motion.div variants={Anima}
                    initial="hidden"
                    animate="visible"
                    exit="exit">
            <Modal
                {...props}
                size="xl">
                <div>
                    <Modal.Body>
                        <div className={"container"}>
                            <CloseButton onClick={props.onHide} className={"mt-2"}></CloseButton>
                            <div className={"row p-1"}>
                                <div className={"col-sm-12 col-lg-4 me-5"}>
                                            <ModalAverageForm/>
                                </div>
                                <div className={"col-sm-12 col-lg-7"}>
                                            <ModalReviewList/>
                                </div>
                            </div>
                        </div>
                    </Modal.Body><br/>

                </div>

            </Modal>

        </motion.div>
    )
}

export default ModalReview;

const styles = {
    close: {
        float: "left",
    }
}