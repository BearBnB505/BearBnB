import React, {useState} from "react";
import {Link} from "react-router-dom";

function Guest(){

    const [adultCount , setAdultCount] = useState(0);
    const [childCount , setChildCount] = useState(0);
    const [petCount , setPetCount] = useState(0);

    const styles = {
        con : {
            marginLeft : "250px",
            marginTop: "200px"
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
            // marginTop: "-10px",
            width :"420px",
            textAlign: "center",
            margin:"auto",

        }
    }

    //성인 수
    function AdultPlus(){
        setAdultCount(adultCount+1);
    }
    function AdultMinus(){
        if(adultCount<=0){
            setAdultCount(0);
        }
        else {
            setAdultCount(adultCount - 1);
        }
    }

    // 유아 수
    function ChildPlus(){
        setChildCount(childCount+1);
    }
    function ChildMinus(){
        if(childCount<=0){
            setChildCount(0);
        }
        else {
            setChildCount(childCount - 1);
        }
    }
    // 반려동물 수
    function PetPlus(){
        setPetCount(petCount+1);
    }
    function PetMinus(){
        if(petCount<=0){
            setPetCount(0);
        }
        else {
            setPetCount(petCount - 1);
        }
    }

    return(
        <div className ={"container"}>
            <div className={"row"} >
                <div className={"col-4"} style={styles.con}>
                    {/*<p className={"fw-bold"} style={styles.font}>숙소 기본 정보를 알려주세요</p>*/}
                    {/*<p className={"fs-5 fw-light"}>숙소에 머물 수 있는 게스트 수, 침실 수, 침대 수, 욕실 수를 지정해주세요 </p>*/}
                    <div className = "col-sm-12">
                        {/*성인*/}
                        <div className="row justify-content-between mt-5 p-1 mb-3">
                                <div className="col-6 fs-5" >
                                    성인<br/> <p style={{color:"gray", fontSize:"17px"}}>만 2세 미만</p>
                                </div>
                            <div className = "col-1">
                                    <img src="/concept/minusIcon.png" style={styles.img} onClick={AdultMinus}/>
                            </div>
                            <div className={"col-1"}>
                                <input type={"text"} value={adultCount} style={styles.input} />
                            </div>
                            <div className={"col-1"}>
                                <img src="/concept/plusIcon.png" style={styles.img} onClick={AdultPlus}/>
                            </div>

                        </div>

                        <hr style={styles.hr}/>

                        {/*유아*/}
                        <div className="row justify-content-between mt-3 p-1 mb-3">
                            <div className="col-6 fs-5" >
                                유아 <br/> <p style={{color:"gray", fontSize:"17px"}}>만 2세 미만</p>
                            </div>
                            <div className="col-1">
                                <img src="/concept/minusIcon.png" style={styles.img} onClick={ChildMinus}/>
                            </div>
                            <div className="col-1">
                                <input type={"text"} value={childCount} style={styles.input} />
                            </div>
                            <div className="col-1">
                                <img src="/concept/plusIcon.png" style={styles.img} onClick={ChildPlus}/>
                            </div>
                        </div>
                        <hr style={styles.hr}/>

                        {/*반려동물*/}
                        <div className="row justify-content-between mt-3 p-1 mb-3">
                            <div className="col-6 fs-5" >
                                반려동물<p style={{color:"gray", fontSize:"15px", textDecorationLine: "underline"}}>반려동물을 동반하시나요?</p>
                            </div>
                            <div className="col-1">
                                <img src="/concept/minusIcon.png" style={styles.img} onClick={PetMinus}/>
                            </div>
                            <div className="col-1">
                                <input type={"text"} value={petCount} style={styles.input} />
                            </div>
                            <div className="col-1">
                                <img src="/concept/plusIcon.png" style={styles.img} onClick={PetPlus}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to ={"/lodgingLocationDetail"}><button className={"btn btn-light position-absolute start-0 bottom-0 ms-5 mb-3"} >이전</button></Link>
                        <Link to = {"/lodgingBedSelect"}><button className={"btn btn-primary position-absolute end-0 bottom-0 me-5 mb-3"}>다음</button></Link>
                    </div>
                </div>
            </div>
        </div>

    );

}
export default Guest;