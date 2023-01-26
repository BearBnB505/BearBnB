import React from "react";
import ReviewComment from "./ReviewComment";

function DetailReview(props){
  return(
    <div className={'CommentStyleBox'}>
      <ReviewComment userId={props.userId}/>
      <ReviewComment/>
      <ReviewComment/>
      <ReviewComment/>
      <ReviewComment/>
      <ReviewComment/>
    </div>
  )
}

export default DetailReview;