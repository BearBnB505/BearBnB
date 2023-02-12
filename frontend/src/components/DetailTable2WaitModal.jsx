import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import Swal from "sweetalert2";

function DetailTable2WaitModal(props) {

    const [show, setShow] = useState('true');

    console.log('승인버튼')
    // console.log(props.userId);
    // console.log(props.lodgingNum);
    const lodgingNum = props.lodgingNum
    console.log(lodgingNum)

    const approveLodging = () => {
        
        axios.post("http://localhost:8080/approveLodging",{
            lodgingNum: lodgingNum,
        })
            .then((req)=>{
                console.log('승인 업데이트 첫번째 통신 성공')
                // alert('승인 업데이트 통신 성공')
                axios.post("http://localhost:8080/approveLodgingEmail",{
                    to : props.userId,
                    from : 'bearbnbproject@gmail.com',
                    title : '숙소가 승인되었습니다',
                    contents : '귀하의 숙소가 승인되었습니다. BearBnB 서비스를 이용해주셔서 감사합니다.'
                })
                    .then((req)=>{
                        console.log(req);
                        console.log('숙소 승인이메일보내기 통신 성공')
                        Swal.fire({
                            icon: 'success',
                            title: '숙소가 승인되었습니다',
                            showConfirmButton: false,
                            timer: 1500
                        }).then(() => {
                            setShow(false);
                        })
                    })
            })
            .catch((err)=>{
                console.log(err)
            })

        
        
        
    }

    // const rejectLodging = () => {
    //     axios.post("http://localhost:8080/rejectLodging",{
    //         to : props.userId,
    //         from : 'bearbnbproject@gmail.com',
    //         title : '숙소가 승인되지 못하였습니다',
    //         contents : '죄송합니다 귀하의 숙소가 승인되지 못하였습니다 BearBnB 서비스를 이용해주셔서 감사합니다.'
    //     })
    //         .then((req)=>{
    //             console.log(req);
    //             Swal.fire({
    //                 icon: 'success',
    //                 title: '숙소가 승인 거절되었습니다',
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             }).then(() => {
    //                 setShow(false);
    //             })
    //         })
    // }
    //{props.onHide}

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Body>
                {/*<div className="modal-content rounded-3 shadow">*/}
                    <div className="modal-body p-4 text-center">
                        <h5 className="mb-0">정말 승인 확정 하시겠습니까?</h5>
                        <p className="mb-0">한번 승인된 숙소는 취소 하실수 없습니다.</p>
                    </div>
                    <div className="modal-footer flex-nowrap p-0">
                        <button type="button" onClick={props.onHide}
                                className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-end">
                            <strong>취소</strong></button>

                        <button type="button"
                                className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0" onClick={approveLodging}
                                data-bs-dismiss="modal"> <strong>승인</strong>
                        </button>
                    </div>
                {/*</div>*/}
            </Modal.Body>
        </Modal>
    )
}

export default DetailTable2WaitModal;
