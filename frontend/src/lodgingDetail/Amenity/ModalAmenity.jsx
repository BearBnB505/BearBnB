import React from "react";
import Modal from 'react-bootstrap/Modal';
import {CloseButton} from "react-bootstrap";
import AmenityItem from "../Amenity/AmenityItem";

function ModalAmenity(props) {
    return (
        <Modal
            {...props}
            size="lg">
            <div>
                <Modal.Body>
                    <div className={"container"}>

                        <CloseButton onClick={props.onHide} className={"mt-2"}></CloseButton>

                        <div className={"row p-1"}>
                            <div className={"col-sm-12 col-lg-12 me-5"}>
                                {/*<h5 className={"mt-4"}><strong>숙소 편의시설</strong></h5>*/}
                                <div className={'AmenityLine'}>숙소 편의시설</div>
                            </div>

                            <div className={'row'}>
                                {AmenityItem('B&B.jpg', '따뜻한 아메리카노')}
                            </div>

                        </div>
                    </div>
                </Modal.Body><br/>

            </div>

        </Modal>
    )
}

export default ModalAmenity;