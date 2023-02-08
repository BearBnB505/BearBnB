import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import HostModalReview from "./HostModalReview";
import {Link} from "react-router-dom";


function ReviewItem({user_id, comment, review_create_dt}) {

  // 리뷰 모달창 온 오프
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };



  return (
    <ul className={"list-group mb-4"} style={styles.ul} >
    {/*<ul className={"list-group mb-4"} style={styles.ul} >*/}
      <li className={"list-group-item p-4"} style={styles.li}>
        <div>
          <span className={"fs-5 fw-bold me-1"}>{user_id}</span>
          <span className="me-2">
            <FontAwesomeIcon icon={faStar} size="1x"/> 4.97/5
          </span>
          <small className={"text-secondary"}>{review_create_dt}</small>
        </div>
        {/*<a href="/Review"></a>*/}
        <Link to={`/ReviewContent`} className={'text'}>
          {comment}
        </Link>
      </li>
      {/*{modalOpen && <HostModalReview modalOpen={modalOpen} setModalOpen={setModalOpen}/>}*/}
    </ul>);
}

export default ReviewItem;

  //
  // function ReviewItem({user_id, comment, review_create_dt}) {
  //
  //   // 리뷰 모달창 온 오프
  //   const [modalOpen, setModalOpen] = useState(false);
  //
  //   // 모달창 노출
  //   const showModal = () => {
  //     setModalOpen(true);
  //   };
  //
  //
  //   return (
  //     <ul className={"list-group mb-4"} style={styles.ul} onClick={showModal}>
  //       {/*<ul className={"list-group mb-4"} style={styles.ul} >*/}
  //       <li className={"list-group-item p-4"} style={styles.li}>
  //         <div>
  //           <span className={"fs-5 fw-bold me-1"}>{user_id}</span>
  //           <span className="me-2">
  //           <FontAwesomeIcon icon={faStar} size="1x"/> 4.97/5
  //         </span>
  //           <small className={"text-secondary"}>{review_create_dt}</small>
  //         </div>
  //         <div>{comment}</div>
  //       </li>
  //       {modalOpen && <HostModalReview modalOpen={modalOpen} setModalOpen={setModalOpen}/>}
  //     </ul>);
  // }
  //
  // export default ReviewItem;



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


