import React, {useEffect, useState} from "react";
import ReviewTitle from "./ReviewTitle";
import ReviewAverageForm from "./ReviewAverageForm";
import {Button} from "react-bootstrap";
import DetailReview from "./DetailReview";
import ModalReview from "./ModalReview";

function ReviewAverage() {

    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <hr style={{marginTop: 60}}/>
            {/*<ReviewAverageForm/>*/}
            {/*<ReviewTitle/>*/}
            <DetailReview />

            <Button className={'ReviewBtn'} variant="dark" onClick={() => setModalShow(true)}>후기 모두 보기</Button>
            <ModalReview
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <hr/>
        </div>
    )
}

export default ReviewAverage;