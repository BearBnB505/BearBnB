import React, {useState} from "react";
import ReviewTitle from "./ReviewTitle";
import ReviewAverageForm from "./ReviewAverageForm";
import ReviewComment from "./ReviewComment";
import {Button} from "react-bootstrap";
import DetailReview from "./DetailReview";
import ModalReview from "./ModalReview";



function ReviewAverage(props){
    const [modalShow, setModalShow] = useState(false);
  return(
    <div>
      <hr style={{marginTop:60}}/>
      <ReviewTitle/>
      <ReviewAverageForm/>
      <DetailReview/>
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