import React from "react";
import {Link, useNavigate} from "react-router-dom";

// 결제 실패시 뜨는 페이지
function LodgingPaymentFailure(){
    const navigate = useNavigate();
    return(
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12'} style={{textAlign : 'center', marginTop :"240px"}}>
                    <p style={{fontSize :"45px", color : "gray"}}>결제 도중 오류가 발생했습니다. 다시 시도해주세요</p>
                     <button className={'btn btn-danger mt-5'} onClick={()=>navigate(-1)}>예약페이지로 가기</button>
                </div>
            </div>
        </div>
    )
}

export default LodgingPaymentFailure;