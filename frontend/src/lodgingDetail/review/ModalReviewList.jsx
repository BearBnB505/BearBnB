import React, {useContext} from "react";
import ReviewContext from "../Context/ReviewContext";

function ModalReviewList() {

    const review = useContext(ReviewContext);
    return (
        <div className={"row mt-3"}>
            <div>
                {review.map((item) => {
                    return <ModalReviewItem idx={item.idx} userId={item.userId} reviewCreateDt={item.reviewCreateDt} comment={item.comment}/>
                })}
            </div>
        </div>
    )
}

function ModalReviewItem({userId, comment, reviewCreateDt}) {
    return (
        <div className={"row"}>
            <ul className={"col d-flex align-items-start list-unstyled mb-0"}>
                <div className={"icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"}>
                    <img className="ReviewUserImg" src="/hostImg/1.png" alt="hostImg"/>
                </div>
                <li>
                    <div>
                        <strong>{userId}</strong>
                    </div>
                    <div>
                        <p className={"commentLine2"}>{reviewCreateDt}</p>
                    </div>
                </li>
            </ul>

            <div className={"mb-5"}>
                {comment}
            </div>

        </div>
    )
}

const styles = {
    search: {
        border: "solid 1px",
        cursor: "text",
        paddingTop: "12px",
        paddingBottom: "12px",
        borderRadius: "100px",
        borderColor: "grey",
        marginTop: "20px",
        marginBottom: "20px",
    }
}

export default ModalReviewList;