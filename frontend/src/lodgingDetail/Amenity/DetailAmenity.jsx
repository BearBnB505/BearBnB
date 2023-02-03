import React, {useState} from "react";
import '../lodgingDetail.css';
import {Button} from "react-bootstrap";
import AmenityItem from "./AmenityItem";
import ModalAmenity from "../Amenity/ModalAmenity";

function DetailAmenity() {

    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <hr style={{marginTop: 80}}/>
            <div className={'AmenityLine'}>편의시설</div>
            <div className={'row'}>
                {AmenityItem('B&B.jpg', '따뜻한 아메리카노')}
            </div>
            <br/>
            <br/>

            <Button className={'AmenityBtn'} variant="dark" onClick={() => setModalShow(true)}>편의시설 모두보기</Button>
            <ModalAmenity
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </div>
    )
}

export default DetailAmenity;