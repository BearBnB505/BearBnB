import React, {useState} from "react";
import {Link} from "react-router-dom";
import {lodgingBasicInfo} from "./Reducers/HostIdReducer";
import {useDispatch, useSelector} from "react-redux";
import Profile from "./redux_test/Profile";
import Login from "../Login";
import {login} from "./redux_test/user";
import {basicInfo} from "./Reducers/LodgingbedReducer";

function LodgingBasicInfo(){

    const [guestCount , setGuestCount] = useState(1);
    const [bedroomCount , setBedroomCount] = useState(1);
    const [bedCount , setBedCount] = useState(1);
    const [bathroomCount , setBathroomCount] = useState(1);

    const dispatch = useDispatch();
    const locationDetail = useSelector((state) => state.locationDetail.value)
    const user = useSelector((state) => state.locationDetail.value)
    const styles = {
        con : {
            marginLeft : "250px"
        },
        font : {
            position : "flex",
            display:"block",
            textAlign: "left",
            marginTop : "200px",
            fontSize:"40px",
        },
        basicImg : {
            height : "25px",
            width : "25px",
        },
        notBasicImg : {
            height : "25px",
            width : "25px",
            opacity: 0.3,
        },
        input : {
            border : "none",
            background : "transparent",
            width :"30px",
            fontSize: "20px"
        },
        hr:{
            // marginTop: "35px",
            width :"750px",
            textAlign: "center",
            margin:"auto",

        }
    }

    //게스트 수
    function GuestPlus(){
        setGuestCount(guestCount+1);
    }
    function GuestMinus(){
        if(guestCount<=1){
            setGuestCount(1);
        }
        else {
            setGuestCount(guestCount - 1);
        }
    }

    // 침실 수
    function BedroomPlus(){
        setBedroomCount(bedroomCount+1);
    }
    function BedroomMinus(){
        if(bedroomCount<=1){
            setBedroomCount(1);
        }
        else {
            setBedroomCount(bedroomCount - 1);
        }
    }
    //침대 수
    function BedPlus(){
        setBedCount(bedCount+1);
    }
    function BedMinus(){
        if(bedCount<=1){
            setBedCount(1);
        }
        else {
            setBedCount(bedCount - 1);
        }
    }

    // 욕실
    function BathroomPlus(){
        setBathroomCount(bathroomCount+1);
    }
    function BathroomMinus(){
        if(bathroomCount<=1){
            setBathroomCount(1);
        }
        else {
            setBathroomCount(bathroomCount - 1);
        }
    }

    console.log("국가")
    console.log(locationDetail.nation)
    console.log("address1")
    console.log(locationDetail.address1)
    console.log("address2")
    console.log(locationDetail.address2)
    console.log("zipcode")
    console.log(locationDetail.zipCode)



    return(
        <div className ={"container"}>
            <div className={"row"} >
                <div className={"col-7"} style={styles.con}>
                    <p className={"fw-bold"} style={styles.font}>숙소 기본 정보를 알려주세요</p>
                    <p className={"fs-5 fw-light"}>숙소에 머물 수 있는 게스트 수, 침실 수, 침대 수, 욕실 수를 지정해주세요 </p>

                    <p>국가 : {locationDetail.nation}</p>
                    <p>주소 :{locationDetail.address1}</p>
                    <p>상세 주소 : {locationDetail.address2}</p>
                    <p>우편번호 :{locationDetail.zipCode}</p>
                    <p> Name : {user.nation} </p>
                    <p> Age : {user.addr1} </p>
                    <p> Email : {user.addr2} </p>
                    <p> Email : {user.zipCode} </p>
                    <div className = "col-sm-12">
                        <div className="row justify-content-between mt-5 p-1 mb-3">
                            <div className="col-3 fs-5" >
                                게스트
                            </div>
                            <div className="col-1">
                                <img src="/concept/minusIcon.png" style={guestCount>1 ? styles.basicImg : styles.notBasicImg} onClick={GuestMinus}/>
                            </div>
                            <div className="col-1">
                                <input type={"text"} value={guestCount} style={styles.input} />
                            </div>
                            <div className="col-1">
                                <img src="/concept/plusIcon.png" style={styles.basicImg} onClick={GuestPlus}/>
                            </div>
                        </div>

                        <hr style={styles.hr}/>

                        {/*침실*/}
                        <div className="row justify-content-between mt-3 p-1 mb-3">
                            <div className="col-3 fs-5" >
                                침실
                            </div>
                            <div className="col-1">
                                <img src="/concept/minusIcon.png" style={bedroomCount>1 ? styles.basicImg : styles.notBasicImg} onClick={BedroomMinus}/>
                            </div>
                            <div className="col-1">
                                <input type={"text"} value={bedroomCount} style={styles.input} />
                            </div>
                            <div className="col-1">
                                <img src="/concept/plusIcon.png" style={styles.basicImg} onClick={BedroomPlus}/>
                            </div>
                        </div>
                        <hr style={styles.hr}/>

                        {/*침대*/}
                        <div className="row justify-content-between mt-3 p-1 mb-3">
                            <div className="col-3 fs-5" >
                                침대
                            </div>
                            <div className="col-1">
                                <img src="/concept/minusIcon.png" style={bedCount>1 ? styles.basicImg : styles.notBasicImg} onClick={BedMinus}/>
                            </div>
                            <div className="col-1">
                                <input type={"text"} value={bedCount} style={styles.input} />
                            </div>
                            <div className="col-1">
                                <img src="/concept/plusIcon.png" style={styles.basicImg} onClick={BedPlus}/>
                            </div>
                        </div>
                        <hr style={styles.hr}/>

                        {/*욕실*/}
                        <div className="row justify-content-between mt-3 p-1 mb-3">
                            <div className="col-3 fs-5" >
                                욕실
                            </div>
                            <div className="col-1">
                                <img src="/concept/minusIcon.png" style={bathroomCount>1 ? styles.basicImg : styles.notBasicImg} onClick={BathroomMinus}/>
                            </div>
                            <div className="col-1">
                                <input type={"text"} value={bathroomCount} style={styles.input} />
                            </div>
                            <div className="col-1">
                                <img src="/concept/plusIcon.png" style={styles.basicImg} onClick={BathroomPlus}/>
                            </div>
                        </div>
                    </div>

                    {/*<Profile/>*/}
                    {/*<Login/>*/}
                    <div>
                        <Link to ={"/lodgingLocationDetail"}><button className={"btn btn-light position-absolute start-0 bottom-0 ms-5 mb-3"} >이전</button></Link>
                        <Link to = {"/lodgingBedSelect"}><button className={"btn btn-primary position-absolute end-0 bottom-0 me-5 mb-3"}onClick={() => {
                            dispatch(basicInfo({guest:guestCount, bedroom: bedroomCount, bed: bedCount, bathroom: bathroomCount}))
                        }}>다음</button></Link>
                    </div>
                </div>
            </div>
        </div>

    );

}
export default LodgingBasicInfo;