import React, {useState} from "react";
import {Link} from "react-router-dom";

function LodgingBasicInfo(){

    const [guestCount , setGuestCount] = useState(1);
    const [bedroomCount , setBedroomCount] = useState(0);
    const [bedCount , setBedCount] = useState(0);
    const [bathroomCount , setBathroomCount] = useState(0);

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
        img : {
            height : "25px",
            width : "25px",

        },
        input : {
            border : "none",
            background : "transparent",
            width :"30px",
            fontSize: "20px"
        },
        hr:{
            marginTop: "35px",
            width :"750px",
            textAlign: "center",
            margin:"auto",

        }
    }

    function GuestPlus(){
        setGuestCount(guestCount+1);
    }
    function GuestMinus(){
        if(guestCount<=1){
            setGuestCount(1);
            // styles.img ={
            //     width: "80px",
            // }
        }
        else {
            setGuestCount(guestCount - 1);
        }
    }


    return(
        <div className ={"container"}>
            <div className={"row"} >
                <div className={"col-7"} style={styles.con}>
                    <p className={"fw-bold"} style={styles.font}>숙소 기본 정보를 알려주세요</p>
                    <p className={"fs-5 fw-light"}>숙소에 머물 수 있는 게스트 수, 침실 수, 침대 수, 욕실 수를 지정해주세요 </p>
                    <div className = "col-sm-12">
                        <div className="row justify-content-between mt-5 p-1">
                            <div className="col-3 fs-5" >
                                게스트
                            </div>
                            <div className="col-1">
                                <img src="/concept/minusIcon.png" style={styles.img} onClick={GuestMinus}/>
                            </div>
                            <div className="col-1">
                                <input type={"text"} value={guestCount} style={styles.input} />
                            </div>
                            <div className="col-1">
                                <img src="/concept/plusIcon.png" style={styles.img} onClick={GuestPlus}/>
                            </div>
                        </div>
                        <hr style={styles.hr}/>
                        <div className="row justify-content-between mt-5 p-1 mb-5">
                            <div className="col-3 fs-5" >
                                게스트
                            </div>
                            <div className="col-1">
                                <img src="/concept/minusIcon.png" style={styles.img} onClick={GuestMinus}/>
                            </div>
                            <div className="col-1">
                                <input type={"text"} value={guestCount} style={styles.input} />
                            </div>
                            <div className="col-1">
                                <img src="/concept/plusIcon.png" style={styles.img} onClick={GuestPlus}/>
                            </div>
                        </div>
                        <hr style={styles.hr}/>
                        <div className="row justify-content-between mt-5 p-1 mb-5">
                            <div className="col-3 fs-5" >
                                게스트
                            </div>
                            <div className="col-1">
                                <img src="/concept/minusIcon.png" style={styles.img} onClick={GuestMinus}/>
                            </div>
                            <div className="col-1">
                                <input type={"text"} value={guestCount} style={styles.input} />
                            </div>
                            <div className="col-1">
                                <img src="/concept/plusIcon.png" style={styles.img} onClick={GuestPlus}/>
                            </div>
                        </div>
                        <hr style={styles.hr}/>



                    </div>
                    <div>
                        <Link to ={"/lodgingLocationDetail"}><button className={"btn btn-light position-absolute start-0 bottom-0 ms-5 mb-3"} >이전</button></Link>
                        <Link to = {"/lodgingKategorySelect"}><button className={"btn btn-primary position-absolute end-0 bottom-0 me-5 mb-3"}>다음</button></Link>
                    </div>
                </div>
            </div>
        </div>

    );

}
export default LodgingBasicInfo;