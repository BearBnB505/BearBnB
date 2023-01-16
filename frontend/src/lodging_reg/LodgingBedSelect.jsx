import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "react-native";



const styles = {
    font : {
        display: "block",
        textAlign : "center",
        fontSize : '50px',
        marginTop : "100px"

    },
    img :{
        width : "100px",
        height : "100px"
    },
    con : {
        textAlign : "center",

    },
    button :{
        width : "100px"
    }

}

function LodgingBedSelect(){
    const [bedSelect, setBedSelect] = useState(false);
    const notPreferArr =['싱글', '슈퍼싱글', '더블', '퀸사이즈', '킹사이즈'];


    const handleClick = (idx) => {
        const newArr = Array(notPreferArr.length).fill(false);
        newArr[idx] = true;
        setBedSelect(newArr[idx]);
    };



    function btnClick() {
        if(bedSelect===false){
            setBedSelect(true)
            // alert("true됨")
        }
        else if(bedSelect === true){
            setBedSelect(false)
            // alert("false됨")
        }
    }

    return(
        <div className = "container">
            <div className="row">
                <div className={'row align-items-center'} style={styles.con}>
                    <p style={styles.font}>침대 사이즈를 선택해주세요</p>
                    <div className = 'col-2' >
                        <img src='https://cdn-icons-png.flaticon.com/128/3159/3159436.png'/>
                    </div>
                    {/*<div className = 'col-2'>*/}
                    {/*    <button className = "btn btn-light" style={styles.button} onClick={btnClick}>싱글</button>*/}
                    {/*</div>*/}
                    {/*<div className = 'col-2'>*/}
                    {/*    <button className = "btn btn-light" style={styles.button}>슈퍼싱글</button>*/}
                    {/*</div>*/}
                    {/*<div className = 'col-2'>*/}
                    {/*    <button className = "btn btn-light" style={styles.button}>더블</button>*/}
                    {/*</div>*/}
                    {/*<div className = 'col-2'>*/}
                    {/*    <button className = "btn btn-light" style={styles.button}>퀸사이즈</button>*/}
                    {/*</div>*/}
                    {/*<div className = 'col-2'>*/}
                    {/*    <button className = "btn btn-light" style={styles.button}>킹사이즈</button>*/}
                    {/*</div>*/}
                    <div >
                        {notPreferArr.map((elm, index) => {
                            return (
                                <Button
                                    key={index}
                                    isSelected={setBedSelect[index]}
                                    handleClick={handleClick}
                                    elementIndex={index}
                                    content={elm}
                                />
                            );
                        })}
                    </div>

                </div>
                <div>
                    <Link to ={"/lodgingBasicInfo"}><button className={"btn btn-light position-absolute start-0 bottom-0 ms-5 mb-3"} >이전</button></Link>
                    <Link to = {"/lodgingSecondWelcome"}><button className={"btn btn-primary position-absolute end-0 bottom-0 me-5 mb-3"}>다음</button></Link>
                </div>
            </div>
        </div>
    )
}
export default LodgingBedSelect;