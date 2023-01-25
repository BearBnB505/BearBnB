import React from "react";

const review = [
    {
        idx: 1,
        name: "진희",
        comment: "깔끔하고 좋았습니다. 픽업서비스를 요청하면 불러주시고요. 크리스마스에 맞춰서 가서 파티도 열어주시고 분위기있는 숙소였어요.",
        review_create_dt: "2023-01-17",
        // clean_grade: "4.2",
        // accuracy_grade: "4.6",
        // communication_grade: "4.8",
        // location_grade: "4.9",
        // check_in_grade: "4.5",
        // cost_grade: "4.2",
    },
    {
        idx: 2,
        name: "경오",
        comment: "생각했던 것 이상으로 매우 깔끔하고 좋앗다. 호스트가 영어도 잘해 의사소통도 잘되엇고 너무 좋앗다",
        review_create_dt: "2023-01-17",
    },
    {
        idx: 3,
        name: "Dustin",
        comment: "넓고 정원이 예쁘다 수영장은 사진과 똑같은데 생각보다 작다 직원이 정말정말정말 친절하고 지도도 보여주면서 소개를 해줬다 영어를 잘해서 의사소통이 원활했다 조식도 정말맛있었다 욕실이 조금 좁았다 침대 정말 푹신해서 좋았다 굿",
        review_create_dt: "2023-01-17",
    },

]

function ModalReviewList() {
    return (
        <div className={"row"}>
            <div>
                <input className={"form-control mb-5"} id="search" placeholder = "후기 검색" style={styles.search}></input>
            </div>
            <div>
                {review.map((item) => {
                    return <ModalReviewItem idx={item.idx} name={item.name} review_create_dt={item.review_create_dt}
                                            comment={item.comment}/>
                })}
            </div>
        </div>
    )
}

function ModalReviewItem({name, comment, review_create_dt}) {
    return (
        <div className={"row"}>
            <ul className={"col d-flex align-items-start list-unstyled"}>
                <div className={"icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"}>
                    <img className="ReviewUserImg" src="/hostImg/1.png" alt="hostImg"/>
                </div>
                <li>
                    <div>
                        <strong>{name}</strong>
                    </div>
                    <div>
                        <p className={"commentLine2"}>{review_create_dt}</p>
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