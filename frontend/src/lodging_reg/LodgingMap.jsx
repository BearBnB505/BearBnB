import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import Search from "../GoogleMap/Search";

function LodgingMap(){

    return(
        <div>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col'}>
                        <div className={'col-7 mx-auto pt-5'} style={{marginTop : "80px"}}>
                            <p style={{fontSize : "35px", fontWeight:"bold"}}>숙소 주소를 검색해주세요</p>
                            <p style={{fontSize : "20px", color:"gray"}}>검색 후 정확한 위치로 마커를 이동시켜주세요</p>
                        </div>
                        <Search/>
                    </div>

                    {/*<Link to ={"/reg/lodgingConcept"}>*/}
                    {/*    <button className={"btn btn-white position-absolute start-0 bottom-0"} style={{marginBottom:"70px", marginLeft:"120px", width:"200px", fontSize:"25px", padding:"8px", }}>이전</button></Link>*/}
                    {/*<Link to = {"/reg/lodgingLocationDetail"}>*/}
                    {/*    <button className={"btn btn-primary position-absolute end-0 bottom-0"} style={{marginBottom:"70px", marginRight:"120px", width:"200px", fontSize:"25px", padding:"8px", }}>다음</button></Link>*/}
                </div>
            </div>
        </div>
    )
}
export default LodgingMap;