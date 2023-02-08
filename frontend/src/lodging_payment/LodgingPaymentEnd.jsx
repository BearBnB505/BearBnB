import React from "react";
import {Link} from "react-router-dom";

//결제 완료 후 보여지는 페이지

function LodgingPaymentEnd(){

    const styles={
        mainBox : {
            border : "1px solid",
            borderColor : "#DDDDDD" ,
            marginTop : "20px",
            marginLeft : "10px",
            borderRadius: "20px",
            width : "1100px",

        },
        photoBox :{
            border : "1px solid",
            borderColor : "#DDDDDD" ,
            borderRadius : "15px",
            height : "200px",
            width : "500px",
            marginTop : "28px",
            // backgroundColor :"#fafafa"
        },
    }

    return(
        <div className={'container mb-5'}>
            <div style={styles.mainBox} className={"mx-auto"}>
                <div className={'row'}>
                    <div className={'col-6 mx-auto'}>
                        <p style={{textAlign : 'center', fontSize:"40px", marginTop:"20px"}}>예약이 완료되었습니다.</p>
                        <p style={{textAlign : "center", color : "gray", fontSize:"25px"}}>아래 내용을 확인해주세요</p>
                    </div>
                </div>
                <div className = {'row'}>
                    {/*숙소 박스(이미지 + 숙소명 + 별점)
                    클릭하면 상세페이지로 이동할 수 있다.*/}
                    <Link to = {"#"}>
                        <div className={'row'}>
                            <div className={'col-6 my-auto mt-5 mx-auto'}>
                                <img src = '/concept/background.jpg' style={{width : "200px", height:"140px", borderRadius :"20px"}}/>
                            </div>
                            <div className = {"col-5 my-auto" }>
                                <p className={'fs-5'}>숙소이름 뭐시기뭐시기</p>
                                <p>★ 5.0</p>
                            </div>
                        </div>
                    </Link>
                    <div className={'col-8 ms-5'}>
                        <p style={{fontSize:"27px", fontWeight : "bold", paddingTop :"40px"}}>결제 정보</p>
                        <div className={'row'}>
                            <div className={'col-10'}>
                                <p style={{fontSize:"20px", fontWeight : "bold", marginTop : "10px"}}>날짜</p>
                                <p style={{fontSize:"20px", marginTop : "-10px"}}>5월 17일 ~ 5월 19일</p>
                            </div>
                            <div className={'col-10'}>
                                <p style={{fontSize:"20px", fontWeight : "bold", marginTop : "10px"}}>게스트</p>
                                <p style={{fontSize:"20px", marginTop : "-10px"}}>게스트4명, 유아1명, 반려동물 1마리</p>
                            </div>
                        </div>
                        <p style={{fontSize:"20px", fontWeight : "bold", paddingTop :"10px"}}>요금</p>
                        <div className={'row'}>
                            <div className={'col-9'}>
                                <p style={{fontSize:"23px", color:"gray"}}> &#8361; 50000 x 3박 </p>
                            </div>
                            <div className={'col-3'}>
                                <p style={{fontSize:"23px"}}> &#8361; 150000 </p>
                            </div>
                            <p style={{fontSize:"20px", fontWeight : "bold", paddingTop :"10px"}}>결제날짜</p>
                            <p style={{fontSize:"22px", color:'gray'}}>2023-01-19</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LodgingPaymentEnd;
