import React, {useEffect, useState} from "react";
import Modal from 'react-bootstrap/Modal';
import TextArea from "./TextArea";
import {Button, CloseButton} from "react-bootstrap";
import StarRating from "./StarRating";
import Form from "react-bootstrap/Form";
import axios from "axios";

function log(value) {
    console.log(value);
}




function BookingModalReview(props) {

    //idx 끝자리 뽑기
    const [lastIdx, setLastIdx] = useState(0);
    const [data, setData] =useState([]);




    useEffect(() => {
        axios.get('http://localhost:8080/allReviewList/')
          .then((req) => {
              const {data} = req;
              setData(data);
              console.log("마지막 숫자"+data[0].idx);
              console.log("마지막 숫자"+ data.length);
              setLastIdx((data[0].idx)+1);

              // console.log(waitArray);

          })
          .catch((err) => {
              console.log("통신 오류");
              console.log(err);
          })
    }, []);






    // 점수 영역
    const [cleanGrade, setCleanGrade] = useState(0);
    const [accuracyGrade, setAccuracyGrade] = useState(0);
    const [communicationGrade, setCommunicationGrade] = useState(0);
    const [locationGrade, setLocationGrade] = useState(0);
    const [checkInGrade, setCheckInGrade] = useState(0);
    const [costGrade, setCostGrade] = useState(0);

    function clean(value) {
        setCleanGrade(value)
    }

    function accuracy(value) {
        setAccuracyGrade(value)
    }

    function communication(value) {
        setCommunicationGrade(value)
    }

    function location(value) {
        setLocationGrade(value)
    }

    function checkIn(value) {
        setCheckInGrade(value)
    }

    function cost(value) {
        setCostGrade(value)
    }

    // 후기 콘텐츠 영역
    const [review, setReview] = useState('후기를 써주세요!');
    const [reviewLength, setReviewLength] = useState(0);

    function onChange(e) {
        setReview(e.target.value);
        setReviewLength(e.target.value.length);
    }


    function reviewBtn() {
        axios.put('http://localhost:8080/writeReview/',null,{params: {cleanGrade: cleanGrade, accuracyGrade: accuracyGrade, idx: lastIdx,
                                                                                        communicationGrade:communicationGrade, locationGrade:locationGrade, lodgingNum: props.lodging_num,
                                                                                        checkInGrade:checkInGrade, costGrade: costGrade, comment: review, userId: props.user_id}})

          .then((response) => {
              console.log(response);
              window.location.replace("http://localhost:3000/bookingConfirm")

          })
          .catch(function (error) {
              console.log(error);
          });
    }

    return (
        <Modal
            {...props}
            size="xl">
            <div>
                <Modal.Body>
                    <div className={"container"}>
                        <CloseButton onClick={props.onHide} className={"mt-2"}></CloseButton>
                    </div>

                    <div className={"row p-4"}>
                        <div className={"mt-2 mb-4"}>
                            <h4><sapn className="fw-bold">후기 등록</sapn></h4>
                        </div>

                        <div className={"col-6"}>
                            <ul className="list-group list-group-horizontal">
                                <li className="list-group item col-sm-4 col-md-4 my-1">
                                    <div className="mb-1 py-1">청결도</div>
                                    <div className="mb-1 py-1">정확성</div>
                                    <div className="mb-1 py-1">의사소통</div>
                                </li>
                                <li className="list-group item col-sm-7 col-md-7">
                                    <StarRating onChange={clean}/>
                                    <StarRating onChange={accuracy}/>
                                    <StarRating onChange={communication}/>
                                </li>
                            </ul>
                        </div>

                        <div className={"col-6"}>
                            <ul className="list-group list-group-horizontal">
                                <li className="list-group item col-sm-4 col-md-4 my-1">
                                    <div className="mb-1 py-1">위치</div>
                                    <div className="mb-1 py-1">체크인</div>
                                    <div className="mb-1 py-1">가격대비 만족도</div>
                                </li>
                                <li className="list-group item col-sm-7 col-md-7">
                                    <StarRating onChange={location}/>
                                    <StarRating onChange={checkIn}/>
                                    <StarRating onChange={cost}/>
                                </li>
                            </ul>
                        </div>



                        <div className={"col-12 mt-3"}>
                            <Form.Control
                                type={'textarea'}
                                onChange={onChange}
                                // aria-describedby="TextCapacity"
                                style={{height:130}}
                                // threshold={200}
                                maxLength={'200'}
                                // value={review}
                                // className="textarea-max"
                            />
                            <Form.Text id="HouseInfoText" muted>
                                {reviewLength}/200
                            </Form.Text>
                            <Button className={"mt-4 w-100"} style={{height:50}} onClick={reviewBtn}>후기 작성하기</Button>
                        </div>

                    </div>

                </Modal.Body><br/>

            </div>



        </Modal>
    )
}

export default BookingModalReview;