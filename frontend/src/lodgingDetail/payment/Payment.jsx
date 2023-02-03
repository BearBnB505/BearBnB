import React, {useEffect, useRef, useState} from "react";
import {Button, Dropdown, Popover, Tooltip} from "react-bootstrap";
import moment from "moment";
import GuestCount from "../../GuestCount";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import Overlay from "react-bootstrap/Overlay";
import Calendar from "../../Calendar/Calendar";

function Payment(props) {
    const styles = {
        navDate: {
            width: 120
        },
        navInput: {
            cursor:"pointer",
            width:120,
            fontSize:14
        },
        navInputSpot: {
            // cursor:"pointer",
            width:180,
            fontSize:14
        },
        btnStyle: {
            color: "black",
            border: "1px solid lightslategray",
            borderBottomLeftRadius:0,
            borderBottomRightRadius: 0,
            width: 280
        },
        btnGuestStyle: {
            color: "black",
            border: "1px solid lightslategray",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            width:280,
            fontSize:14,
            // paddingTop: 10,
            // paddingBottom: 10,
        },
        guestInput: {
            cursor:"pointer",
            width:280,
            fontSize:14
        }
    }

    let [chooseDate, setChooseDate] = useState(props.chooseDate);
    const [nightCount, setNightCount] = useState(props.nightCount);

    let startDate = moment(chooseDate[0]).format('Y. M. D');
    let endDate = moment(chooseDate[1]).format('Y. M. D');
    // let nightCount = moment.duration(moment(chooseDate[1]).diff(moment(chooseDate[0]))).asDays();

    useEffect(() => {
        setNightCount(moment.duration(moment(chooseDate[1]).diff(moment(chooseDate[0]))).asDays());
    }, chooseDate);

    const total = props.cost * nightCount;
    // console.log(total);

    let [selectGuest, setSelectGuest] = useState([0, 0, 0]);
    let adultCount = selectGuest[0];
    let childCount = selectGuest[1];
    let petCount = selectGuest[2];


    return (
        <div id={'aside'}>
            <div className={'container border shadow rounded-4 px-5 py-4 mb-4'}>
                <div>
                    <div>
                        <span className={'fs-4 fw-bold me-1'}>&#92;{props.cost}</span>
                        <span>/박</span>
                    </div>
                    <div className={'btn-group-vertical container mx-0 px-0 my-3'}>

                        <Dropdown drop={"start"}>
                            <DropdownToggle variant={"none"} className={"text-start"} bsPrefix style={styles.btnStyle}>
                                <div className={"row"}>
                                    <div className={"col border-end"}>
                                        <div className={'row'}>
                                            <label htmlFor="checkIn" className={"fw-bold"} style={{cursor:"pointer", fontSize:13}}>체크인</label>
                                        </div>
                                        <div className={'row'}>
                                            <input type="text" id={"checkIn"} className={"border-0"} placeholder={"날짜 추가"} style={styles.navInput} value={startDate === 'Invalid date' ? '' : startDate}/>
                                        </div>
                                    </div>
                                    <div className={"col"}>
                                        <div className={'row'}>
                                            <label htmlFor="checkOut" className={"fw-bold"} style={{cursor:"pointer", fontSize:13}}>체크아웃</label>
                                        </div>
                                        <div className={'row'}>
                                            <input type="text" id={"checkOut"} className={"border-0"} placeholder={"날짜 추가"} style={styles.navInput} value={endDate === 'Invalid date' ? '' : endDate}/>
                                        </div>
                                    </div>
                                </div>
                            </DropdownToggle>
                            <DropdownMenu>
                                <Calendar dateValue={setChooseDate} countNights={setNightCount} />
                            </DropdownMenu>
                        </Dropdown>

                        <div className={'btn-group'}>

                            <Dropdown drop={"down-centered"}>
                                <DropdownToggle variant={"none"} className={"text-start"} bsPrefix style={styles.btnGuestStyle}>
                                    <div>
                                        <div className={'row'}>
                                            <label htmlFor="addGuest" className={"fw-bold"} style={{cursor:"pointer", fontSize:13}}>인원</label>
                                        </div>
                                        <div className={'row'}>
                                            <input type="text" id={"addGuest"} className={"border-0"} placeholder={"게스트 추가"} style={styles.guestInput} value={adultCount === 0 ? '' : (childCount === 0 ? `성인 ${adultCount}명` : `성인 ${adultCount}명, 유아 ${childCount}명`)}/>
                                        </div>
                                    </div>
                                </DropdownToggle>

                                <DropdownMenu>
                                    <GuestCount guestValue={setSelectGuest}/>
                                </DropdownMenu>
                            </Dropdown>

                        </div>
                    </div>


                    <Button className={'w-100 py-2 mb-2'} variant="primary">예약하기</Button>

                    <p className={'text-center'} style={{fontSize:13}}>예약 확정 전에는 요금이 청구되지 않습니다.</p>

                    <div className={'row'}>
                        <div className={'col-7'}>
                            <span>&#92;{props.cost} x {nightCount}박</span>
                        </div>
                        <div className={'col text-end'}>
                            <span>&#92;{total}</span>
                        </div>
                    </div>
                    <hr className={'my-4'}/>

                    <div className={'row fw-bold'}>
                        <div className={'col'}>
                            <p>총 합계</p>
                        </div>
                        <div className={'col text-end'}>
                            <p>&#92;{total}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'text-center'}>
                <a href="#" id={'complainBtn'}><img className={'pe-3'} src="/img/complainBtn.png" alt="complain"/>숙소 신고하기</a>
            </div>


        </div>
    )
}

export default Payment;