import React, {useState} from "react";
import {Link} from "react-router-dom";
import ReactPlayer from 'react-player'
import {useDispatch, useSelector} from "react-redux";
import {lodgingRealNames} from "./Reducers/LodgingRealNameReducer";
import {lodgingNums} from "./Reducers/LodgingNumReducer";

function LodgingWelcome(){
    const hostIdUrl = useSelector((state) => state.realHostId.value);
    // console.log(hostIdUrl);

    const dispatch = useDispatch();
    const now = new Date();
    let year = (now.getFullYear()).toString();
    // 년 두 글자
    let removeYear = year.slice(2, 4);
    let month = (now.getMonth() + 1).toString();

    // 월이 10이하일 경우 앞에 0을 붙인다
    const newMonth = (month < 10) ? 0 + month : month


    let day = (now.getDate()).toString();

    const newDay = (day<10)? 0 + day : day

    //년월일 6자리 글자
    let dayday = removeYear + newMonth + newDay;


    //랜덤 숫자 11자리(예약번호용)
    const random = [];

    for (let i = 0; i < 10; i++) {
        const randomNum = Math.floor(Math.random() * 10);
        random.push(randomNum)
    }

    const dayPlusRandom = dayday + random;
    // 숙소번호=> 날짜6자리 + 랜덤 숫자 10자리
    const lodgingNum = dayPlusRandom.split(',').join("");
    // console.log(lodgingNum);


    return(
        <div className={"container"}>
            <div className = {"row justify-content-lg-between"} >
                <div className={"col-6 my-auto"}>
                    <div >
                        <p>1단계</p>
                        <p id={"title"} style = {{fontSize : "50px", fontWeight : "bold",}}>숙소 정보를 알려주세요</p><br/>
                        <p className={"lh-base fs-5"}>먼저 숙소 유형을 선택하고, 게스트가 예약할 수 있는 숙소가 공간 전체<br />인지 개인실 또는 다인실인지 알려주세요. 그런 다음 숙소 위치와<br /> 수용 가능 인원을 알려주세요.</p>
                    </div>
                </div>
                <div className={"col-5"} style={{marginRight:"110px"}}>
                    <div style={{marginTop : "90px"}}>
                        <video autoPlay muted loop style = {{width : "700px"}} >
                            <source src="https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?
                            v_q=high" type={"video/mp4"} />
                        </video>
                    </div>
                </div>
            </div>
            <footer>
                <Link to ={"/lodgingHostId"}>
                    <button className={"btn btn-white position-absolute start-0 bottom-0"} style={{marginBottom:"70px", marginLeft:"120px", width:"200px", fontSize:"25px", padding:"8px", }}>이전</button></Link>
                <Link to = {"/reg/lodgingConcept"}>
                    <button className={"btn btn-primary position-absolute end-0 bottom-0"} style={{marginBottom:"70px", marginRight:"120px", width:"200px", fontSize:"25px", padding:"8px", }} onClick={()=>{
                    dispatch(lodgingNums({num:lodgingNum}))}}>다음</button></Link>
            </footer>
        </div>
    )
}
export default LodgingWelcome;