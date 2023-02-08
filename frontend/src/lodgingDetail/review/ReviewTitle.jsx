import React, {useContext} from "react";
import ReviewContext from "../Context/ReviewContext";


function ReviewTitle({avg}) {
    // const review = useContext(ReviewContext);
    return (
            <div className={'ReviewAvgTitleBox'}>
                <div style={{position: "relative", left: -8}}>&#x2B50;</div>
                <div>{avg.reviewTotal}</div>
                <div>· 후기 :</div>
                <div>{avg.reviewCount}&nbsp;개</div>
            </div>
    )
}

export default ReviewTitle;