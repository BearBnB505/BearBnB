import React, {useState} from "react";
import {Link} from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import moment from "moment/moment";
import {basicInfo} from "./Reducers/LodgingbedReducer";
import {useDispatch} from "react-redux";
import {chooseDates} from "./Reducers/ChooseDateReducder";

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
    const dispatch = useDispatch();

    let [chooseDate, setChooseDate] = useState([]);

    let startDate = moment(chooseDate[0]).format('M월 D일');
    let endDate = moment(chooseDate[1]).format('M월 D일');

    let insertStartDate = moment(chooseDate[0]).format('YYYY-MM-DD 10:00:00')
    let insertEndDate = moment(chooseDate[1]).format('YYYY-MM-DD 14:00:00')
    console.log(insertStartDate);
    console.log(insertEndDate);

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
                <Link to ={"/reg/lodgingThirdWelcome"}><button className={"btn btn-white position-absolute start-0 bottom-0"} style={{marginBottom:"70px", marginLeft:"120px", width:"200px", fontSize:"25px", padding:"8px", }} >이전</button></Link>
                <Link to = {"/reg/lodgingCost"}><button className={"btn btn-primary position-absolute end-0 bottom-0"} style={{marginBottom:"70px", marginRight:"120px", width:"200px", fontSize:"25px", padding:"8px", }} onClick={() => {
                    dispatch(chooseDates({startDate:insertStartDate, endDate: insertEndDate}))
                }}>다음</button></Link>
            </footer>
        </div>
    )
}
export default LodgingChooseDate;