import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useLocation} from "react-router";
import moment from "moment/moment";
import {now} from "moment";

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

    const location = useLocation();
    const lodgingNum = location.state.lodgingNum;
    const lodgingName = location.state.lodgingName;
    const startDate = location.state.startDate;
    const endDate = location.state.endDate;
    const adultNum = location.state.adultNum;
    const babyNum = location.state.babyNum;
    const petNum = location.state.petNum;
    const dayCost = location.state.dayCost;
    const nightCount = location.state.nightCount;
    const totalCost = location.state.totalCost;
    const today = moment();
    const payDate = today.format('YY년 MM월 DD일')

    // console.log('숙소이름')
    // console.log(lodgingName)

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
                                <p className={'fs-5'}>{lodgingName}</p>
                                <p>★ 5.0</p>
                            </div>
                        </div>
                    </Link>
                    <div className={'col-8 ms-5'}>
                        <p style={{fontSize:"27px", fontWeight : "bold", paddingTop :"40px"}}>결제 정보</p>
                        <div className={'row'}>
                            <div className={'col-10'}>
                                <p style={{fontSize:"20px", fontWeight : "bold", marginTop : "10px"}}>날짜</p>
                                <p style={{fontSize:"20px", marginTop : "-10px"}}>{startDate} ~ {endDate}</p>
                            </div>
                            <div className={'col-10'}>
                                <p style={{fontSize:"20px", fontWeight : "bold", marginTop : "10px"}}>게스트</p>
                                <p style={{fontSize:"20px", marginTop : "-10px"}}>성인{adultNum}명, 유아{babyNum}명, 반려동물 {petNum}마리</p>
                            </div>
                        </div>
                        <p style={{fontSize:"20px", fontWeight : "bold", paddingTop :"10px"}}>요금</p>
                        <div className={'row'}>
                            <div className={'col-9'}>
                                <p style={{fontSize:"23px", color:"gray"}}> &#8361; {dayCost} x {nightCount}박 </p>
                            </div>
                            <div className={'col-3'}>
                                <p style={{fontSize:"23px"}}> &#8361; {totalCost} </p>
                            </div>
                            <p style={{fontSize:"20px", fontWeight : "bold", paddingTop :"10px"}}>결제날짜</p>
                            <p style={{fontSize:"22px", color:'gray'}}>{payDate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LodgingPaymentEnd;
