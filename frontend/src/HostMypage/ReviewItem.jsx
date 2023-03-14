import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import HostModalReview from "./HostModalReview";
import {Link} from "react-router-dom";


function ReviewItem(props) {

  // 리뷰 모달창 온 오프
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  console.log(props.data);

  return (
    <ul className={"list-group mb-4"} style={styles.ul} >
    {/*<ul className={"list-group mb-4"} style={styles.ul} >*/}
      <li className={"list-group-item p-4"} style={styles.li}>
        <div>
          <span className={"fs-5 fw-bold me-1"}>{props.data.lodgingName}</span>
        </div>
        <div>
          <span className={"fs-5 fw-bold me-1"}>{props.data.userId}</span>
          <span className="me-2">
            <FontAwesomeIcon icon={faStar} size="1x"/> {(parseFloat(props.data.cleanGrade+props.data.accuracyGrade+props.data.communicationGrade+props.data.locationGrade+props.data.checkInGrade+props.data.costGrade)/6).toFixed(1)}/5
          </span>
          <small className={"text-secondary"}>{props.data.reviewCreateDt}</small>
        </div>

        <Link to={`/ReviewContent`} className={'text'} state={{idx : props.data.idx}}>
          {props.data.comment}
        </Link>
      </li>
    </ul>);
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
    }, li: {}

  }


