import React, {useState} from "react";
import {Link} from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import moment from "moment/moment";

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

    let [chooseDate, setChooseDate] = useState([]);

    let startDate = moment(chooseDate[0]).format('M월 D일');
    let endDate = moment(chooseDate[1]).format('M월 D일');

    return(
        <div className={'container mx-auto'}>
            <div className={'row'}>
                <div className={'col ms-5 ps-5'}>
                    <p className={'mt-5 ms-5 ps-3'} style={{'textAlign' :'left', fontSize:"35px", fontWeight:"bolder"}}>숙소 이용 가능 날짜를 선택해주세요</p>
                    <div className={"text-start ms-5 ps-3 mt-5"}>
                        <input type="text" id={"checkIn"} className={"fs-4 text-muted fw-bold border-0 p-0"} style={{width: 300}} placeholder={"날짜 추가"} value={startDate === 'Invalid date' ? '' : `${startDate} - ${endDate}`}/>
                    </div>
                </div>
                <div className={'mt-4'}>
                    <Calendar dateValue={setChooseDate}/>
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