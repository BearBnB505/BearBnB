import React, {useState} from "react";
import {Link} from "react-router-dom";
import ReactPlayer from 'react-player'
import {useSelector} from "react-redux";

function LodgingWelcome(){
    const hostIdUrl = useSelector((state) => state.realHostId.value);
    console.log(hostIdUrl)
    return(
        <div className={"container"}>
            <div className = {"row justify-content-lg-between"} >
                <div className={"col-6 my-auto"}>
                    <div style={{marginTop : "180px"}}>
                        <p>1단계</p>
                        <p id={"title"} style = {{fontSize : "50px", fontWeight : "bold",}}>숙소 정보를 알려주세요</p><br/>
                        <p className={"lh-base fs-5"}>먼저 숙소 유형을 선택하고, 게스트가 예약할 수 있는 숙소가 공간 전체<br />인지 개인실 또는 다인실인지 알려주세요. 그런 다음 숙소 위치와<br /> 수용 가능 인원을 알려주세요.</p>
                    </div>
                </div>
                <div className={"col-5"} style={{marginRight:"110px"}}>
                    <div style={{marginTop : "180px"}}>
                        <video autoPlay muted loop style = {{width : "700px"}} >
                            <source src="https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?
                            v_q=high" type={"video/mp4"} />
                        </video>
                    </div>
                </div>
            </div>
            <footer>
                <Link to ={"/lodgingHostId"}><button className={"btn btn-light position-absolute start-0 bottom-0 ms-5 mb-3"} >이전</button></Link>
                <Link to = {"/lodgingConcept"}><button className={"btn btn-primary position-absolute end-0 bottom-0 me-5 mb-3"}>다음</button></Link>
            </footer>
        </div>
    )
}
export default LodgingWelcome;