import React from "react";
import ReviewComment from "./ReviewComment";
import contextData from "../LodgingDetail";

function DetailReview(props) {

    return (
        <div className={'CommentStyleBox'}>
            <ReviewComment />
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