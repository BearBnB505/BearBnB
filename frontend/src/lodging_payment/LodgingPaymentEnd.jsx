import React from "react";

//결제 완료 후 보여지는 페이지

function LodgingPaymentEnd(){
    return(
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col mt-5'}>
                    <p style={{textAlign : 'center', fontSize:"40px"}}>결제가 완료되었습니다.</p>
                    <p style={{textAlign : "center", color : "gray", fontSize:"25px"}}>아래 내용을 확인해주세요</p>
                </div>

            </div>
        </div>
    )
}
export default LodgingPaymentEnd;
