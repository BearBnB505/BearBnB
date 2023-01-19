import React from "react";
import ReviewTitle from "./ReviewTitle";
import ReviewAverageForm from "./ReviewAverageForm";
import ReviewComment from "./ReviewComment";
import {Button} from "react-bootstrap";
import DetailReview from "./DetailReview";

function ReviewAverage(){
  return(
    <div>
      <hr style={{marginTop:60}}/>
      <ReviewTitle/>
      <ReviewAverageForm/>
      <DetailReview/>
      <Button className={'ReviewBtn'} variant="dark">후기 모두 보기</Button>
      <hr/>
    </div>
  )
}

export default ReviewAverage;