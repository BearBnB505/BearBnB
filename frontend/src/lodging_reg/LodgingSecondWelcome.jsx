import React, {useState} from "react";
import {Link, Outlet} from "react-router-dom";
import ReactPlayer from 'react-player'
import {useSelector} from "react-redux";

function LodgingWelcome(){
    // const bedSelects = useSelector((state) => state.lodgingBedSelect.value)
    return(
        <div className={"container"}>
            {/*<p>침대 종류 : {bedSelects.bedSelects}</p>*/}
            <div className = {"row justify-content-lg-between"} >
                <div className={"col-5 my-auto"}>
                    <div style={{marginTop : "100px"}}>
                        <p>2단계</p>
                        <p id={"title"} style = {{fontSize : "50px", fontWeight : "bold",}}>숙소의 매력을<br /> 돋보이게 하세요</p><br/>
                        <p className={"lh-base fs-5"}>이 단계에서는 숙소에 갖춰진 편의시설과 사진 5장 이상을<br /> 추가한 후 숙소 이름과 설명을 작성하시면 됩니다.</p>
                    </div>
                </div>
                <div className={"col-5"} style={{marginRight:"155px"}}>
                    <div style={{marginTop : "100px"}}>
                        <video autoPlay muted loop style = {{width : "700px"}}>
                            <source src="https://stream.media.muscache.com/H0101WTUG2qWbyFhy02jlOggSkpsM9H02VOWN52g02oxhDVM.mp4?v_q=high" type={"video/mp4"} />
                        </video>
                    </div>
                </div>
            </div>
            <footer>
                <Link to ={"/reg/lodgingBedSelect"}><button className={"btn btn-white position-absolute start-0 bottom-0"} style={{marginBottom:"70px", marginLeft:"120px", width:"200px", fontSize:"25px", padding:"8px", }} >이전</button></Link>
                <Link to = {"/reg/lodgingCategorySelect"}><button className={"btn btn-primary position-absolute end-0 bottom-0"} style={{marginBottom:"70px", marginRight:"120px", width:"200px", fontSize:"25px", padding:"8px", }}>다음</button></Link>
            </footer>
        </div>
    )
}
export default LodgingWelcome;