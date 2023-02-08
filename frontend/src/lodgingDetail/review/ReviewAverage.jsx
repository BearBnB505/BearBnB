import React, {useState} from "react";
import {Button} from "react-bootstrap";
import DetailReview from "./DetailReview";
import ModalReview from "./ModalReview";

function ReviewAverage(props) {

    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <hr style={{marginTop: 60}}/>
            {/*<ReviewAverageForm/>*/}
            {/*<ReviewTitle/>*/}
            <DetailReview />

            <Button className={'ReviewBtn'} variant="dark" onClick={() => setModalShow(true)}>후기 {props.reviewCount}개 모두보기</Button>
            <ModalReview
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <hr/>
        </div>
    )
}

export default ReviewAverage;