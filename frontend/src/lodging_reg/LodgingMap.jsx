import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function LodgingMap(){

    const concept = useSelector((state)=>state.lodgingConcept.value);
    const user = useSelector((state) => state.locationDetail.value)

    return(
        <div>
            <p>{concept.concept}</p>
            <h2>지도페이지</h2>
            <Link to ={"/reg/lodgingConcept"}>
                <button className={"btn btn-white position-absolute start-0 bottom-0"} style={{marginBottom:"70px", marginLeft:"120px", width:"200px", fontSize:"25px", padding:"8px", }}>이전</button></Link>
            <Link to = {"/reg/lodgingLocationDetail"}>
                <button className={"btn btn-primary position-absolute end-0 bottom-0"} style={{marginBottom:"70px", marginRight:"120px", width:"200px", fontSize:"25px", padding:"8px", }}>다음</button></Link>
        </div>
    )

}
export default LodgingMap;