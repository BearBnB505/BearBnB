import React, {useState} from "react";
import {Link} from "react-router-dom";

function LodgingCost(){

    const [cost, setCost] = useState(50000);

    const styles = {
        img :{
            width : "50px",

        }
    }
    function plusOnclick(){
        // alert("플러스버튼")
        setCost(cost+5000)
    }
    function minusOnclick(){
        if(cost<=0){
            setCost(0);
        }
        else {
            setCost(cost-5000);
        }
    }

    return(
        <div className={"container"}>
            <div className={"row"}>
                <div className={'col-7 mx-auto'} style={{marginTop : "120px"}}>
                    <p style={{fontSize :"35px", fontWeight:"bold"}}>이제 요금을 설정하세요</p>
                    <p style={{fontSize : "20px", color : "gray"}}>언제든지 변경하실 수 있습니다.</p>
                    <div style={{border : "1px solid", borderRadius : "15px", height : "300px", marginTop : "28px", backgroundColor :"#EAE0DA"}}>
                        <div className="row align-items-center mt-5" style={{marginLeft : "30px"}}>
                            <div className="col">
                                <img src='/concept/minusIcon.png' style={styles.img} onClick={minusOnclick}/>
                            </div>
                            <div className="col">
                                <input type={'text'} value={cost} className={'me-4'} style={{borderRadius : "10px", height : "100px", width: "450px"}}/>
                            </div>
                            <div className="col">
                                <img src='/concept/plusIcon.png' style={styles.img} onClick={plusOnclick} />
                            </div>
                            <p style={{textAlign : "center", fontSize :"20px", marginTop:"10px"}}>/박</p>
                        </div>
                    </div>
                </div>
            <footer>
                <Link to ={"/lodgingThirdWelcome"}><button className={"btn btn-light position-absolute start-0 bottom-0 ms-5 mb-3"} >이전</button></Link>
                <Link to = {"/lodgingCheck"}><button className={"btn btn-primary position-absolute end-0 bottom-0 me-5 mb-3"}>다음</button></Link>
            </footer>
        </div>
        </div>
    )
}
export default LodgingCost;