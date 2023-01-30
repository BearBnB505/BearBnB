import React from "react";

function GuestInfoModalButton(){
    const onClickReject = () => {
        if (window.confirm("정말 거절하시겠습니까?")) {
            alert("거절되었습니다.");
        }
    };

    const onClickConfirm = () => {
        alert('승인되었습니다.')
    };

    return(
        <div className={'container'}>
            <div className={'row'}>
            <button className={'col-3 btn btn-primary'} onClick={onClickConfirm}>승인</button>
            <button className={'col-3 btn btn-danger ms-3'} onClick={onClickReject}>거절</button>
        </div>
        </div>
    )
}
export default GuestInfoModalButton
