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
            size="md">
            <div>
                <Modal.Body>
                    <div className={"container"}>
                        <CloseButton onClick={props.onHide} className={"mt-2"}></CloseButton>
                    </div>

                    <div className={"row p-4"}>
                        <div className={"mt-2 mb-4"}>
                            <h4><sapn className="fw-bold">상세 내역</sapn></h4>

                            {data.map((item)=> {
                                return (
                                    <BookingModalItem data={item} />
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
        <div className={""}>
            <ul className={"mt-4"}>
                <li>예약번호 : {props.data.idx}</li>
                <li>숙소명 : {props.data.lodging_name}</li>
                <li>날짜 : {props.data.book_check_in_dt} ~ {props.data.book_check_out_dt}</li>
                <li>인원 수 : 성인{props.data.adult_num}명, </li>
                <li>예약 날짜 : {props.data.book_dt}</li>
                <li>결제 금액 : {props.data.book_price}</li>
            </ul>
        </div>
    )
}




