import React from "react";
import ReviewComment from "./ReviewComment";

function DetailReview(){
  return(
    <div className={'CommentStyleBox'}>
      <ReviewComment/>
      <ReviewComment/>
      <ReviewComment/>
      <ReviewComment/>
      <ReviewComment/>
      <ReviewComment/>
    </div>
  )
}

export default DetailReview;