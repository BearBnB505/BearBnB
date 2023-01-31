import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Modal, ModalBody, ModalHeader} from "react-bootstrap";
import "./Header/Header.css"

function GuestCount(props) {

    const [adultCount , setAdultCount] = useState(0);
    const [childCount , setChildCount] = useState(0);
    const [petCount , setPetCount] = useState(0);
    const [showGuide , setShowGuide] = useState(false);
    const [countZero1, setCountZero1] = useState(true);
    const [countZero2, setCountZero2] = useState(true);
    const [countZero3, setCountZero3] = useState(true);

    const styles = {
        con : {
            width: 370
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
            cursor: "pointer",
        },
        input : {
            border : "none",
            background : "transparent",
            width :"30px",
            fontSize: "20px"
        },
        hr:{
            width :"340px",
            textAlign: "center",
            marginLeft: 6
        }
    }

    //성인 수
    function AdultPlus() {
        setAdultCount(adultCount + 1);
        setCountZero1(false);
        props.guestValue([adultCount + 1, childCount, petCount]);
    }
    function AdultMinus() {
        if (adultCount <= 0) {
            setCountZero1(true);
        }
        else if (adultCount == 1) {
            setAdultCount(adultCount - 1);
            props.guestValue([adultCount, childCount, petCount]);
            setCountZero1(true);
        }
        else {
            setAdultCount(adultCount - 1);
            props.guestValue([adultCount, childCount, petCount]);
            setCountZero1(false);
        }
    }

    // 유아 수
    function ChildPlus() {
        setChildCount(childCount + 1);
        setCountZero2(false);
    }
    function ChildMinus() {
        if (childCount <= 0) {
            setCountZero2(true);
        }
        else if (childCount == 1) {
            setChildCount(childCount - 1);
            setCountZero2(true);
        }
        else {
            setChildCount(childCount - 1);
            setCountZero2(false);
        }
    }
    // 반려동물 수
    function PetPlus() {
        setPetCount(petCount + 1);
        setCountZero3(false);
    }
    function PetMinus() {
        if (petCount <= 0) {
            setCountZero3(true);
        }
        else if (petCount == 1) {
            setPetCount(petCount - 1);
            setCountZero3(true);
        }
        else {
            setPetCount(petCount - 1);
            setCountZero3(false);
        }
    }

    const handleButtonClick = () => {
        setShowGuide(true);
    };

    return (
        <div className ={"ps-4"}>
            <div style={styles.con}>
                {/*<p className={"fw-bold"} style={styles.font}>숙소 기본 정보를 알려주세요</p>*/}
                {/*<p className={"fs-5 fw-light"}>숙소에 머물 수 있는 게스트 수, 침실 수, 침대 수, 욕실 수를 지정해주세요 </p>*/}
                <div className = "col-11">
                    {/* 성인 */}
                    <div className="row justify-content-between mt-4 p-2 mb-2">
                            <div className="col-6">
                                <span className={"fw-bold"} style={{fontSize:"17px"}}>성인</span>
                                <br/>
                                <p className={"mt-2 mb-0"} style={{color:"gray", fontSize:"14px"}}>만 2세 이상</p>
                            </div>
                        <div className = "col-1 p-0 align-self-center">
                                <img src="/concept/minusIcon.png" style={styles.img} onClick={AdultMinus} alt="-" className={countZero1 ? "opacity-25 disabled" : "opacity-100"}/>
                        </div>
                        <div className={"col-1 p-0 align-self-center"}>
                            <input type={"text"} value={adultCount} style={styles.input} />
                        </div>
                        <div className={"col-1 p-0 align-self-center"}>
                            <img src="/concept/plusIcon.png" style={styles.img} onClick={AdultPlus} alt="+"/>
                        </div>
                    </div>

                    <hr style={styles.hr}/>

                    {/* 유아 */}
                    <div className="row justify-content-between mt-3 p-2 mb-2">
                        <div className="col-6">
                            <span className={"fw-bold"} style={{fontSize:"17px"}}>유아</span>
                            <br/>
                            <p className={"mt-2 mb-0"} style={{color:"gray", fontSize:"14px"}}>만 2세 미만</p>
                        </div>
                        <div className="col-1 p-0 align-self-center">
                            <img src="/concept/minusIcon.png" style={styles.img} onClick={ChildMinus} alt="-" className={countZero2 ? "opacity-25 disabled" : "opacity-100"}/>
                        </div>
                        <div className="col-1 p-0 align-self-center">
                            <input type={"text"} value={childCount} style={styles.input} />
                        </div>
                        <div className="col-1 p-0 align-self-center">
                            <img src="/concept/plusIcon.png" style={styles.img} onClick={ChildPlus} alt="+"/>
                        </div>
                    </div>

                    <hr style={styles.hr}/>

                    {/* 반려동물 */}
                    <div className="row justify-content-between mt-3 p-2 mb-4">
                        <div className="col-6 pe-0">
                            <span className={"fw-bold"} style={{fontSize:"17px"}}>반려동물</span>
                            <br/>
                            <p className={"mt-2 mb-0"} style={{color:"gray", fontSize:"13px", textDecorationLine: "underline", cursor: "pointer"}} onClick={handleButtonClick}>보조동물을 동반하시나요?</p>
                        </div>
                        <div className="col-1 p-0 align-self-center">
                            <img src="/concept/minusIcon.png" style={styles.img} onClick={PetMinus} alt="-" className={countZero3 ? "opacity-25 disabled" : "opacity-100"}/>
                        </div>
                        <div className="col-1 p-0 align-self-center">
                            <input type={"text"} value={petCount} style={styles.input} />
                        </div>
                        <div className="col-1 p-0 align-self-center">
                            <img src="/concept/plusIcon.png" style={styles.img} onClick={PetPlus} alt="+"/>
                        </div>
                    </div>
                </div>
                {/*<div>*/}
                {/*    <Link to ={"/lodgingLocationDetail"}><button className={"btn btn-light position-absolute start-0 bottom-0 ms-5 mb-3"} >이전</button></Link>*/}
                {/*    <Link to = {"/lodgingBedSelect"}><button className={"btn btn-primary position-absolute end-0 bottom-0 me-5 mb-3"}>다음</button></Link>*/}
                {/*</div>*/}
            </div>

            <Modal
                show={showGuide}
                onHide={() => setShowGuide(false)}
                // animation={false}
                style={{zIndex:2000}}
                dialogClassName={"modalGuide shadow"}
            >
                <ModalHeader closeButton={true} className={"border-0"}></ModalHeader>
                <ModalBody>
                    <div className={"d-flex justify-content-center"}>
                        <img src='https://a0.muscache.com/pictures/adafb11b-41e9-49d3-908e-049dfd6934b6.jpg' alt="보조동물"/>
                    </div>
                    <div className={"px-2 mt-3"}>
                        <h4 className={"fw-bold pb-2"}>보조동물</h4>
                        <p>
                            보조동물은 반려동물이 아니므로 여기에 추가할 필요가 없습니다.
                        </p>
                    </div>
                </ModalBody>
            </Modal>
        </div>

    );

}
export default GuestCount;