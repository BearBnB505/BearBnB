import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import store from "../Store";
import {HostIdReducer} from "./Reducers/HostIdReducer";
import {LodgingConceptReducer} from "./Reducers/LodgingConceptReducer";
import {LodgingNumReducer, lodgingNums} from "./Reducers/LodgingNumReducer";
// import lodgingConcept from "./LodgingConcept";

function LodgingMap(){
    let storeA = configureStore({reducer:LodgingNumReducer.reducer});
    const lodgingNum2 = storeA.getState().num;
    console.log("welcome : " + lodgingNum2);

    // let store = configureStore({reducer: LodgingConceptReducer.reducer});
    // const lodgingConcept = store.getState().value;
    // console.log(lodgingConcept);

    return(
        <div>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col'}>
                        <div className={'col-7 mx-auto p-5'} style={{marginTop : "80px"}}>
                            <p style={{fontSize : "35px", fontWeight:"bold"}}>숙소 주소를 검색해주세요</p>
                            <p style={{fontSize : "20px", color:"gray"}}>검색 후 정확한 위치로 마커를 이동시켜주세요</p>
                        </div>
                    </div>
                    <Link to ={"/reg/lodgingConcept"}>
                        <button className={"btn btn-white position-absolute start-0 bottom-0"} style={{marginBottom:"70px", marginLeft:"120px", width:"200px", fontSize:"25px", padding:"8px", }}>이전</button></Link>
                    <Link to = {"/reg/lodgingLocationDetail"}>
                        <button className={"btn btn-primary position-absolute end-0 bottom-0"} style={{marginBottom:"70px", marginRight:"120px", width:"200px", fontSize:"25px", padding:"8px", }}>다음</button></Link>
                </div>
            </div>
        </div>
    )
}
export default LodgingMap;