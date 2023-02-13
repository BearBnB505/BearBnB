import React from "react";
import Modal from 'react-bootstrap/Modal';
import {CloseButton} from "react-bootstrap";

function BookingModalDetail(props) {
    const data = [
        {
            idx:'as22',
            lodging_num:123123,
            lodging_name:'제주도 신라호텔',
            book_check_in_dt:'2022.12.30',
            book_check_out_dt:'2022.12.31',
            adult_num:2,
            baby_num:1,
            pet_num:1,
            book_dt: '2022.12.04',
            book_price: '130,000원',
        }
    ]
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
                            <h4><sapn className="fw-bold">상세 내역</sapn></h4>

                            {/*{data.map((item)=> {*/}
                            {/*    return (*/}
                            {/*        <BookingModalItem data={item} />*/}
                            {/*    )*/}
                            {/*})}*/}
                            {data.map((item)=> {
                                return (
                                  <BookingModalItem idx={props.idx} lodging_name={props.lodging_name} book_num={props.book_num} user_nation={props.user_nation}
                                                    book_num={props.book_num} book_check_in_dt={props.book_check_in_dt} book_check_out_dt={props.book_check_out_dt}
                                                    adult_num={props.adult_num} baby_num={props.baby_num} pet_num={props.pet_num}
                                                    book_state={props.book_state} user_id={props.user_id} user_name={props.user_name} user_tel={props.user_tel} user_nation={props.user_nation}
                                                    book_dt={props.book_dt} pay_cost={props.pay_cost}  tel={props.tel} />
                                )
                            })}

                        </div>
                    </div>
                </Modal.Body><br/>
            </div>
        </Modal>
    )
}

export default BookingModalDetail;


function BookingModalItem(props) {

    return(

      <div className={'container pb-2'} >
          <div className={'row col-8 mx-auto pt-2 border rounded-5'}>
              <div className={'col-3'}>
                  <img src='/img/user.png' style={{width:"100px"}}/>
              </div>
              <div className={'col'}>
                  <p>이름 : {props.user_name}</p>
                  <p>아이디 : {props.user_id}</p>
                  <p>국적 : {props.user_nation}</p>
                  <p className={"mb-2"}>전화번호 : {props.tel}</p>
              </div>
          </div>

          <div className={'row col-8 mx-auto pt-3'}>
              <div className={'col-3 pb-2'} id={'property'}>
                  <p>예 약 번 호</p>
                  <p>숙 소 명</p>
                  <p>날 짜</p>
                  <p>인 원 수</p>
                  <p>예 약 날 짜</p>
                  <p>결 제 금 액</p>
              </div>

              <div className={'col'}>
                  <p>: {props.book_num}</p>
                  <p>: {props.lodging_name}</p>
                  <p>: {props.book_check_in_dt} - {props.book_check_out_dt}</p>
                  <p>: 성인 {props.adult_num}명 아기 {props.baby_num}명 반려동물 {props.pet_num}마리</p>
                  <p>: {props.book_dt}</p>
                  <p>: {props.pay_cost}원</p>
              </div>
          </div>

      </div>
    )
}




