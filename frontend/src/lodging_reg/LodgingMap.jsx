import React from "react";
import {Link} from "react-router-dom";

function LodgingMap(){

    return(
        <div>
            <h2>지도페이지</h2>
            <Link to ={"/lodgingConcept"}><button className={"btn btn-light position-absolute start-0 bottom-0 ms-5 mb-3"} >이전</button></Link>
            <Link to = {"/lodgingLocationDetail"}><button className={"btn btn-primary position-absolute end-0 bottom-0 me-5 mb-3"}>다음</button></Link>
        </div>
    )

}
export default LodgingMap;