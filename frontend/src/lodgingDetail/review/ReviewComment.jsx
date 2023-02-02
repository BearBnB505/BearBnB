import React, {useContext} from "react";
import ReviewContext from "../Context/ReviewContext";

function ReviewComment() {

    const review = useContext(ReviewContext);

    return (
        <>
            {review.map((item) => (
                <div className={'CommentBox'}>
                    <img className={'ReviewUserImg'} src={"/hostImg/1.png"} alt={"hostImg"}></img>
                    <div className={'commentLine1'}>{item.userId}</div>
                    <div className={'commentLine2'}>{item.reviewCreateDt}</div>
                    <div></div>
                    <div className={'CommentText'}>{item.comment}
                    </div>
                </div>
            ))}
        </>
    )
}

export default ReviewComment;