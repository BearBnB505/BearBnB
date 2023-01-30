import React from "react";
import {Link} from "react-router-dom";

function LodgingChooseDate(){

    const styles = {
        footer : {
            position : "fixed",
            zIndex : 1,
            backgroundColor : "white",
            left :0,
            right : 0,
            bottom : 0,
            height : "5rem",
        }
    }


    return(
        <div className={'container mx-auto'}>
            <div className={'row'}>
                <div className={'col'}>
                    <p  className={'mt-5'} style={{'textAlign' :'center', fontSize:"35px", fontWeight:"bolder"}}>숙소 이용 가능 날짜를 선택해주세요</p>
                </div>
                
            </div>
            <footer style={styles.footer} className={"mt-5"}>
                <Link to ={"/lodgingThirdWelcome"}><button className={"btn btn-light position-absolute start-0 bottom-0 ms-5 mb-3"} >이전</button></Link>
                <Link to = {"/lodgingCost"}><button className={"btn btn-primary position-absolute end-0 bottom-0 me-5 mb-3"}>다음</button></Link>
            </footer>
        </div>
    )
}
export default LodgingChooseDate;