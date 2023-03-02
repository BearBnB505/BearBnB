import React, {useEffect, useState} from "react";
import {Breadcrumb, FloatingLabel, Tabs} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faPencil, faStar} from "@fortawesome/free-solid-svg-icons";
import Anima from "./animaData";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import "./Style.css";
import Form from "react-bootstrap/Form";
import ReviewPagenation from "./ReviewPagenation";
import axios from "axios";
import Swal from "sweetalert2";
import {useLocation} from "react-router";



function Review() {

  // const location = useLocation();
  //여기에요 여기!! 유저 아이디 넣어야 할 부분 !!!

  const userId = location.state.userId;


  // 리뷰 DB 가져와서 리스트 형식으로 담길 배열
  const [data, setData] = useState([]);
  // 페이지당 게시물 수
  const [limit, setLimit] = useState(5);
  // 현재 페이지 번호(page)
  const [page, setPage] = useState(1);
  // 첫 게시물의 위치(offset)
  const offset = (page - 1) * limit;


  useEffect(() => {
    axios.get('http://localhost:8080/MemberReviewList/', {params:{userId: userId}})
      .then((req) => {
        const {data} = req;
        setData(data);
        // console.log(data);
      })
      .catch((err) => {
        console.log("통신 오류");
        console.log(err);
      })
  }, []);

  return (
    <motion.div variants={Anima}
                initial="hidden"
                animate="visible"
                exit="exit" className={"container mt-5"}>
      <div className={"mb-5"}>
        <Breadcrumb>
          <Breadcrumb.Item><Link to={"../mypage"}>마이페이지</Link></Breadcrumb.Item>
          <Breadcrumb.Item active>내가 작성한 후기</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className={"fw-bold"}>내가 작성한 후기</h2>
      </div>

      <div className={"row"}>
        <div>
          {data.slice(offset, offset + limit).map((item) => {
            return <ReviewItem lodging_name={item.lodging_name}
                               idx={item.idx} user_id={item.userId}
                               comment={item.comment} name={item.name}
                               review_create_dt={item.reviewCreateDt}
                               clean_grade={item.cleanGrade} accuracy_grade={item.accuracyGrade}
                               communication_grade={item.communicationGrade} location_grade={item.locationGrade}
                               check_in_grade={item.checkInGrade} cost_grade={item.costGrade}/>
          })}
        </div>
        <ReviewPagenation
          total={data.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>


    </motion.div>
  )
}


export default Review;


function ReviewItem({
                      name, comment, review_create_dt, idx,
                      clean_grade, accuracy_grade,
                      communication_grade, location_grade,
                      check_in_grade, cost_grade
                    }) {

  const [view, setView] = useState(true);
  const [view2, setView2] = useState(false);
  const [review, setReview] = useState(comment)
  const [grade, setGrade] = useState()


  const ReviewBtn1 = () => {
    setView(false)
    setView2(true)
    setReview(comment)
    // console.log(view);
  }

  const ReviewBtn2 = () => {
    setView(true)
    setView2(false)
    console.log(view);
    axios.put('http://localhost:8080/UpdateReview/', null, {params: {idx: idx, comment: review}})

      .then((response) => {
        console.log(response);
        Swal.fire("후기를 수정하였습니다","　","success")

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const CancelBtn = () => {
    setView(true)
    setView2(false)
    console.log(view);
  }

  const DeleteBtn = () => {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '후기를 삭제하시겠습니까?',
      text: "삭제 후 되돌릴 수 없습니다!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '네',
      cancelButtonText: '아니요',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          '삭제하였습니다!',
          '　',
          'success',
          axios.put('http://localhost:8080/DeleteReview/', null, {params: {idx: idx}})
            .then((response) => {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            }),
          window.location.reload("/review")
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          '취소하였습니다',
          '　',
          'error'
        )
      }
    })
  }


  function onChange(e) {
    setReview(e.target.value);
  }
  return (
    <ul className={"list-group mb-4"} style={style.ul}>
      <li className={"list-group-item p-4"} style={style.li}>
        <div className={"mb-3"}>
          <span className={"fs-5 fw-bold me-2"}>{name}</span>
          <span className={"me-2 blueColor"}>
                         <FontAwesomeIcon icon={faStar} size="1x" className={"me-2 blueColor"}/>
            {((clean_grade + accuracy_grade + communication_grade + location_grade + check_in_grade + cost_grade) / 6).toFixed(1)} / 5
                    </span>
          <small className={"text-secondary"}>{review_create_dt}</small>
        </div>
        {view &&
          <div className={"mb-2"} id={'text'}>{review}</div>
        }
        {view2 &&
          <Form.Control
            type="text"
            as="textarea"
            style={{width: "fit-content", height: 100}}
            onChange={onChange}
            value={review}
          />

        }


        {view && <div>
          <button type="button" className="btn btn-outline-secondary btn-sm my-2 me-2" title="Edit"
                  onClick={ReviewBtn1}>
                        <span>
                            <FontAwesomeIcon icon={faPencil} size="1x"/> 후기수정
                        </span>
          </button>
          <button type="button" className="btn btn-outline-secondary btn-sm my-2" title="Edit" onClick={DeleteBtn}>
            <span><FontAwesomeIcon icon={faClose} size="1x"/> 후기삭제</span>
          </button>
        </div>}
        {view2 && <div>
          <button type="button" className="btn btn-outline-secondary btn-sm my-2 me-2" title="Edit"
                  onClick={ReviewBtn2}>
                        <span>
                            <FontAwesomeIcon icon={faPencil} size="1x"/> 수정완료
                        </span>
          </button>
          <button type="button" className="btn btn-outline-secondary btn-sm my-2" title="Edit" onClick={CancelBtn}>
            <span><FontAwesomeIcon icon={faClose} size="1x"/> 취소</span>
          </button>
        </div>}
      </li>
    </ul>
  );
}

const style = {
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