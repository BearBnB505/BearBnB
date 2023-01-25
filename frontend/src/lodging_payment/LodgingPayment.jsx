import React from "react";
import {Link} from "react-router-dom";
// 확인 및 결제 페이지
function LodgingPayment(){

    const styles={
        box :{

            border : "1px solid",
            borderColor : "#DDDDDD" ,
            borderRadius : "15px",
            height : "200px",
            width : "500px",
            marginTop : "28px",
            // backgroundColor :"#fafafa"
        }
    }

    return(
        <div className={'container'} style={{marginLeft : "600px"}}>
            <div className={'row align-items-start'}>
                <div className = {'col-1'} style={{display:"block", marginTop:"100px"}}>
                    {/*누르면 상세페이지로 이동*/}
                    <Link to={'#'}>
                        <img src='/leftArrow.png' style={{width :"20px"}}/>
                    </Link>
                </div>
                <div className={'col-3'}>
                    <p style={{fontSize:"35px", fontWeight:"bold", marginTop:"85px"}}>확인 및 결제</p>
                </div>
            </div>
            <div className={'row align-items-start'} style={styles.box}>
                <div className={'col-5 my-auto mx-auto'}>
                    <img src = '/concept/background.jpg' style={{width : "200px", height:"140px", borderRadius :"20px", padding:0}}/>
                </div>
                <div className = {"col-6 my-auto" }>
                    <p className={'fs-5'}>숙소이름 뭐시기뭐시기</p>
                    <p>★ 5.0</p>
                </div>
            </div>

            <div className={'col-8'}>
                <p style={{fontSize:"27px", fontWeight : "bold", paddingTop :"40px"}}>예약 정보</p>
                <div className={'row'}>
                    <div className={'col-10'}>
                        <p style={{fontSize:"20px", fontWeight : "bold", marginTop : "10px"}}>날짜</p>
                        <p style={{fontSize:"20px", marginTop : "-10px"}}>5월 17일 ~ 5월 19일</p>
                    </div>
                    <div className={'col-2'}>
                        <p style={{fontSize:"20px", fontWeight : "bold", textDecoration: "underline",}}>수정</p>
                    </div>
                    <div className={'col-10'}>
                        <p style={{fontSize:"20px", fontWeight : "bold", marginTop : "10px"}}>게스트</p>
                        <p style={{fontSize:"20px", marginTop : "-10px"}}>게스트4명, 유아1명, 반려동물 1마리</p>
                    </div>
                    <div className={'col-2'}>
                        <p style={{fontSize:"20px", fontWeight : "bold", textDecoration: "underline",}}>수정</p>
                    </div>
                    <hr style={{width:"810px"}} />
                </div>
                <p style={{fontSize:"27px", fontWeight : "bold", paddingTop :"20px"}}>요금 정보</p>
                <div className={'row'}>
                    <div className={'col-9'}>
                        <p style={{fontSize:"23px", color:"gray"}}> &#8361; 50000 x 3박 </p>
                    </div>
                    <div className={'col-3'}>
                        <p style={{fontSize:"23px"}}> &#8361; 150000 </p>
                    </div>
                    <button className={'btn btn-danger mt-5 col-3 mx-6 fs-5'} style={{marginLeft : "600px"}}>예약하기</button>
                </div>
            </div>
        </div>

    )

}

export default LodgingPayment;