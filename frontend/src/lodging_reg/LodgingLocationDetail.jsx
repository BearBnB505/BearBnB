import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {locationDetails} from "./Reducers/LodgingLocationDetailReducer";
import {FloatingLabel} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Profile from "./redux_test/Profile";
import Login from "../Login";

function LodgingLocationDetail(){

    // lodging 테이블에 새로 추가한 값 nation, address1, address2 값 넣는다.
    // nation,address1, address2, zipcode
    const dispatch = useDispatch();
    const [nationA, setNation] = useState('');
    const [address1A, setAddress1] = useState('');
    const [address2A, setAddress2] = useState('');
    const [zipCodeA, setZipCode] = useState();

    const onChangeNation = (e) =>{
        setNation(e.target.value)
        console.log("nation");
        console.log(nationA);
        // dispatch(locationDetails({nation:nationA}))
    }
    const onChangeAddress1 = (e) =>{
        setAddress1(e.target.value)
        console.log("address1");
        console.log(address1A);
        // dispatch(locationDetails({address1:address1A}))
    }
    const onChangeAddress2 = (e) =>{
        setAddress2(e.target.value)
        console.log("address2");
        console.log(address2A);
        // dispatch(locationDetails({address2:address2A}))
    }
    const onChangeZipCode = (e) =>{
        setZipCode(e.target.value)
        console.log("zipCode");
        console.log(zipCodeA);
        // dispatch(locationDetails({zipCode:zipCodeA}))
    }

    return(
        <div>
            <div className={'container'}>
                {/*<p>상세주소를 적어주세요</p>*/}
                {/*<p>정확한 기입을 해야 합니다</p>*/}
                <div className={'row'}>
                    <div className={'col'}>
                        <div className={'col-7 mx-auto p-5'} style={{marginTop : "100px"}}>
                            <p style={{fontSize : "35px", fontWeight:"bold"}}>숙소의 상세주소를 입력해주세요</p>
                            <p style={{fontSize : "20px", color:"gray"}}>주소를 정확하고 명확하게 넣었는지 확인해주세요</p>
                            <div className={'col-12'}>
                                {/*<div className={'mt-4'}>*/}
                                {/*    <label className="form-label" htmlFor="nation">국가명</label>*/}
                                {/*    <input type="text" className="form-control" id="nation" name="nation" defaultValue={nationA}*/}
                                {/*        placeholder="국가명" onChange={onChangeNation}/>*/}
                                {/*</div>*/}
                                <div className={'mt-5'}>
                                    <label className="form-label" htmlFor="nation">주소</label>
                                    <input type="text" className="form-control" id="address1" name="address1" defaultValue={address1A}
                                           placeholder="주소" onChange={onChangeAddress1}/>
                                </div>
                                <div className={'mt-3'}>
                                    <label className="form-label" htmlFor="nation">상세주소</label>
                                    <input type="text" className="form-control" id="address2" name="address2" defaultValue={address2A}
                                           placeholder="상세주소" onChange={onChangeAddress2}/>
                                </div>
                                <div className={'mt-3'}>
                                    <label className="form-label" htmlFor="nation">우편번호</label>
                                    <input type="text" className="form-control" id="zipcode" name="nation" defaultValue={zipCodeA}
                                           placeholder="우편번호" onChange={onChangeZipCode}/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            <Link to ={"/reg/lodgingMap"}><button className={"btn btn-white position-absolute start-0 bottom-0"} style={{marginBottom:"70px", marginLeft:"120px", width:"200px", fontSize:"25px", padding:"8px", }} >이전</button></Link>
            <Link to = {"/reg/lodgingBasicInfo"}><button className={"btn btn-primary position-absolute end-0 bottom-0"} style={{marginBottom:"70px", marginRight:"120px", width:"200px", fontSize:"25px", padding:"8px", }} onClick={() => {
                dispatch(locationDetails({nation: nationA, addr1:address1A, addr2:address2A, zipCode:zipCodeA}))
            }}>다음</button></Link>
            </div>
        </div>
    )
}
export default LodgingLocationDetail;