import React, {useState} from "react";
import {Link} from "react-router-dom";
import ReactPlayer from 'react-player'

function LodgingWelcome(){

    return(
        <div className={"container"}>
            <div className = {"row justify-content-lg-between"} >
                <div className={"col-5 my-auto"}>
                    <div style={{marginTop : "180px"}}>
                        <p>3단계</p>
                        <p id={"title"} style = {{fontSize : "50px", fontWeight : "bold",}}>등록을 완료하세요</p><br/>
                        <p className={"lh-base fs-5"}>마지막 단계에서는 첫 예약에서 에어비앤비 이용 경험이 풍부한 게스트를 맞이할지 여부를 선택하고 1박 요금을 설정하실 수 있습니다. 몇 가지 간단한 질문에 답하고 난 후 준비가 되면 숙소 등록을 완료하세요.</p>
                    </div>
                </div>
                <div className={"col-5"} style={{marginRight:"155px"}}>
                    <div style={{marginTop : "180px"}}>
                        <video autoPlay muted loop style = {{width : "700px"}} >
                            <source src="https://stream.media.muscache.com/KeNKUpa01dRaT5g00SSBV95FqXYkqf01DJdzn01F1aT00vCI.mp4?v_q=high" type={"video/mp4"} />
                        </video>
                    </div>
                </div>
            </div>
            <footer>
                <Link to ={"/lodgingHostInfo"}><button className={"btn btn-light position-absolute start-0 bottom-0 ms-5 mb-3"} >이전</button></Link>
                <Link to = {"/lodgingCost"}><button className={"btn btn-primary position-absolute end-0 bottom-0 me-5 mb-3"}>다음</button></Link>
            </footer>
        </div>
    )
}
export default LodgingWelcome;