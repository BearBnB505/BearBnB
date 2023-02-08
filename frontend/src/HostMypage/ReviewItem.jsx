import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import React from "react";

function ReviewItem({user_id, comment, review_create_dt}) {
  return (
    <ul className={"list-group mb-4"} style={styles.ul}>
      <li className={"list-group-item p-4"} style={styles.li}>
        <div>
          <span className={"fs-5 fw-bold me-1"}>{user_id}</span>
          <span className="me-2">
                         <FontAwesomeIcon icon={faStar} size="1x"/> 4.97/5
                    </span>
          <small className={"text-secondary"}>{review_create_dt}</small>
        </div>
        <div>{comment}</div>
        <div>
          {/*<button type="button" className="btn btn-outline-secondary btn-sm my-2 me-2" title="Edit">*/}
          {/*    <span><FontAwesomeIcon icon={faPencil} size="1x"/> 후기수정</span>*/}
          {/*</button>*/}
          {/*<button type="button" className="btn btn-outline-secondary btn-sm my-2" title="Edit">*/}
          {/*    <span><FontAwesomeIcon icon={faClose} size="1x"/> 후기삭제</span>*/}
          {/*</button>*/}
        </div>
      </li>
    </ul>
  );
}

export default ReviewItem;

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