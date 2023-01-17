import React from "react";
import {Breadcrumb, Tabs} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faPencil} from "@fortawesome/free-solid-svg-icons";

const review = [
    {idx: 1, lodging_name: "해운대 신라 호텔", comment: "숙소가 정말 멋지네요! 접근이 용이하며, 아무 문제 없이 도착했습니다. 오두막은 잘 꾸며져 있을 뿐만 아니라 매우 아늑합니다. 단점은 침대가 있는 침실에 창문을 가리는 커튼이나 그런게 없고 채광이 좋다는 점입니다. 그 외에는 침대가 매우 편안합니다. 수영장, 주방, 월풀이 있는 공용 공간은 말할 것도 없이 우리를 놀라게 했습니다. 조식은 품질이 훌륭합니다. 잔디밭을 아주 잘 즐긴 반려견을 데리고 갔어요. 어서 돌아가고 싶어요.", review_create_dt: "2023-01-17"},
    {idx: 1, lodging_name: "서울 신라 호텔", comment: "맛있고 아늑한 숙소. 편안한 침대, 샤워 시설, 온수 욕조가 완벽하게 작동합니다. 시설이 잘 갖춰진 주방! 매일 업데이트되는 완벽한 조식! 방금 헤어드라이어를 놓쳤습니다 (전에 그 정보를 요청하거나 찾는 것도 괜찮았습니다!). 하지만 조용한 오두막은 여행의 별도의 장이었습니다! 특별해요!", review_create_dt: "2023-01-17"},
    {idx: 1, lodging_name: "제주도 신라 호텔", comment: "오두막에서 즐거운 하루를 보냈습니다!\n" +
            "아파레치다 (Aparecida) 는 사람을 사랑합니다\n" +
            "놀라운 🤍조식!\n" +
            "오두막은 자연과 기술로 100% 포함되어 있으며 필요한 모든 것을 갖추고 있습니다!\n" +
            "매일 점심과 저녁을 만들어서 통나무집에 있는 모든 식기를 사용했어요.\n" +
            "곧 다시 찾아뵙겠습니다!", review_create_dt: "2023-01-17"},

]

function Review() {
    return (
        <div className={"container mt-5"}>
            <div className={"mb-5"}>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">마이페이지</Breadcrumb.Item>
                    <Breadcrumb.Item active>내가 작성한 후기</Breadcrumb.Item>
                </Breadcrumb>
                <h2 className={"fw-bold"}>내가 작성한 후기</h2>
            </div>

            <div className={"row"}>
                <div>
                    {review.map((item) => {
                        return <ReviewItem idx={item.idx} lodging_name={item.lodging_name}
                                           comment={item.comment}
                                           review_create_dt={item.review_create_dt}/>
                    })}
                </div>
            </div>


        </div>
    )
}

export default Review;

function ReviewItem({lodging_name, comment, review_create_dt}) {
    return (
        <ul className={"list-group mb-4"} style={styles.ul}>
            <li className={"list-group-item p-4"} style={styles.li}>
                <div><span className={"fs-5 fw-bold"}>{lodging_name}</span> <small
                    className={"text-secondary"}>{review_create_dt}</small></div>
                <div>{comment}</div>
                <div>
                    <button type="button" className="btn btn-outline-secondary btn-sm my-2 me-2" title="Edit">
                        <span><FontAwesomeIcon icon={faPencil} size="1x"/> 후기수정</span>
                    </button>
                    <button type="button" className="btn btn-outline-secondary btn-sm my-2" title="Edit">
                        <span><FontAwesomeIcon icon={faClose} size="1x"/> 후기삭제</span>
                    </button>
                </div>
            </li>
        </ul>
    );
}

const styles = {
    ul: {
        border: "none",
        display: "block",
        listStyleType: "disc",
        marginBlockStart: "1em",
        marginBlockEnd: "1em",
        marginInlineStart: 0,
        marginInlineEnd: 0,
        paddingInlineStart: 0,
    },
    li: {}
}