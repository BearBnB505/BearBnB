import React, {useState, useRef} from "react";
import {ButtonGroup, Dropdown, Modal, ModalBody, NavDropdown} from "react-bootstrap";

import './Header.css';
import {Link} from "react-router-dom";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import GuestCount from "../GuestCount";
import Login from "../Login";
import Join from "../Join";
import Calendar from "../Calendar/Calendar";
import DatePicker from "react-datepicker";
import moment from "moment";

function HeaderModal(props) {
    const styles = {
        nav1PillStart: {
            borderTopLeftRadius: 25,
            borderBottomLeftRadius: 25,
            width: 120,
        },
        nav2PillStart: {
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            width: 250
        },
        nav1PillEnd: {
            borderTopRightRadius: 25,
            borderBottomRightRadius: 25,
            width: 160
        },
        nav2PillEnd: {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            borderLeft: "none",
            width: 220,
            // position: "absolute"
        },
        navDate: {
            width: 120
        },
        navInput: {
            cursor:"pointer",
            width:90,
            fontSize:14
        },
    }


    const target = useRef(null);

    const [showExpandedHeader, setShowExpandedHeader] = useState(false);
    const [showGuestCount, setShowGuestCount] = useState(false);
    const [showChooseDate, setShowChooseDate] = useState(false);

    const selectSpot = () => {
        setShowExpandedHeader(true);
        setShowGuestCount(false);
        setShowChooseDate(false);
    }

    const selectDate = () => {
        setShowExpandedHeader(true);
        setShowGuestCount(false);
        setShowChooseDate(true);
    }

    const selectGuest1 = () => {
        setShowExpandedHeader(true);
        selectGuest2();
    }

    const selectGuest2 = () => {
        setShowGuestCount(true);
        setShowChooseDate(false);
    }

    let [chooseDate, setChooseDate] = useState([]);
    let [selectGuest, setSelectGuest] = useState([0, 0, 0]);

    console.log(chooseDate);
    // let startDate = null;
    // let endDate = null;



    let startDate = moment(chooseDate[0]).format('M월 D일');
    let endDate = moment(chooseDate[1]).format('M월 D일');

    console.log(startDate);

    let adultCount = selectGuest[0];
    let childCount = selectGuest[1];
    let petCount = selectGuest[2];


    return (
        <>
            <div className={"nav-item"} id={"nav-first"}>
                <div className={"btn-group"} role={"group"}>
                    <button type={"button"} id={"btn-where"} className={"btn-nav btn px-3 py-1"} style={styles.nav1PillStart} onClick={selectSpot}>어디든지</button>
                    <button type={"button"} className={"btn-nav btn px-3 py-1"} onClick={selectDate}>언제든 일주일</button>
                    <button type={"button"} id={"btn-who"} className={"btn-nav btn px-3 py-1"} style={styles.nav1PillEnd} onClick={selectGuest1}>
                        <div className={"row"}>
                            <div className={"col-8 m-0 px-0 py-2"}>
                                게스트 추가
                            </div>
                            <div className={"col-1 m-0"}>
                                <button type={"button"} className={"btn btn-primary "} style={{borderRadius: 30, paddingLeft: 10, paddingRight: 10, height: 34, marginTop:3}}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{width: 12, paddingBottom:2}}/>
                                </button>
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            <Modal
                show={showExpandedHeader}
                onHide={() => setShowExpandedHeader(false)}
                dialogClassName={"header-modal"}
                animation={false}
            >
                <ModalBody>
                    <nav className={"navbar navbar-expand-sm navbar-white bg-white mt-1 fixed"} id={"header_nav"}>
                        <div className={"container justify-content-between"} style={{width: 1900}}>
                            <Link to={"/"}><img src="/img/BearBnB_logo.png" alt="BearBnB" style={{width:130}}/></Link>

                            <div className={"border-bottom border-2 border-dark pb-1"}>
                                <span style={{fontSize: 18}}>숙소</span>
                            </div>

                            <div className={"nav-item"}>
                                <Dropdown>
                                    <DropdownToggle variant={"none"} bsPrefix style={{border:"none"}}>
                                        <a href="#" className={"nav-link"}><img src="/img/user.png" alt="user" style={{width: 35}}/></a>
                                    </DropdownToggle>

                                    <DropdownMenu align={"end"}>
                                        <Login />
                                        <Join />
                                        <DropdownItem href={"/message"}>
                                            <span>메세지알림</span>
                                            <span className="badge bg-primary rounded-pill float-end">2</span>
                                        </DropdownItem>
                                        <DropdownItem href={"/mypage"}>마이페이지</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                    </nav>
                    <nav className={"mb-2"} id={"nav-second"}>
                        <div className={"container d-flex justify-content-center"}>
                            <div className={"btn-group sidenav dropdown"} role={"group"} id={"menu"}>
                                <button type={"button"} className={"btn-nav btn px-3 py-2"} style={styles.nav2PillStart} onClick={selectSpot}>
                                    <div className={"text-start"}>
                                        <div className={"row ps-3"}>
                                            <label htmlFor="chooseSpot" className={"fw-bold p-0"} style={{cursor:"pointer", fontSize:13}}>여행지</label>
                                        </div>
                                        <div className={"row ps-3"}>
                                            <input type="text" id={"chooseSpot"} className={"border-0 p-0 disabled"} placeholder={"여행지 검색"} style={styles.navInput}/>
                                        </div>
                                    </div>
                                </button>

                                <button type={"button"} className={"btn-nav btn px-3 py-2"} onClick={selectDate} style={styles.navDate}>
                                    <div className={"text-start"}>
                                        <label htmlFor="checkIn" className={"fw-bold"} style={{cursor:"pointer", fontSize:13}}>체크인</label>
                                        <input type="text" id={"checkIn"} className={"border-0 p-0 disabled"} placeholder={"날짜 추가"} style={styles.navInput} value={startDate === 'Invalid date' ? '' : startDate}/>
                                    </div>
                                </button>
                                <button ref={target} type={"button"} className={"btn-nav btn px-3 py-2"} onClick={selectDate} style={styles.navDate}>
                                    <div className={"text-start"}>
                                        <label htmlFor="checkOut" className={"fw-bold"} style={{cursor:"pointer", fontSize:13}}>체크아웃</label>
                                        <input type="text" id={"checkOut"} className={"border-0 p-0"} placeholder={"날짜 추가"} style={styles.navInput} value={endDate === 'Invalid date' ? '' : endDate}/>
                                    </div>
                                </button>

                                <button ref={target} type={"button"} className={"btn-nav btn py-2"} style={styles.nav2PillEnd} onClick={selectGuest2}>
                                    <div className={"row"}>
                                        <div className={"col-4 my-auto ms-2"}>
                                            <div className={"text-start"}>
                                                <label htmlFor="checkIn" className={"fw-bold"} style={{cursor:"pointer", fontSize:13}}>여행자</label>
                                                <input type="text" id={"checkIn"} className={"border-0 p-0 disabled"} placeholder={"게스트 추가"} style={styles.navInput} value={adultCount === 0 ? '' : (childCount === 0 ? `성인 ${adultCount}명` : `성인 ${adultCount}명, 유아 ${childCount}명`)}/>
                                            </div>
                                        </div>
                                        <div className={"col-6 ms-4 d-flex align-content-center"}>
                                            <a type={"button"} className={"btn btn-primary"} style={{borderRadius:25}}>
                                                <div className={"row px-1 pt-1"}>
                                                    <div className={"col-1"}>
                                                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{width: 12, paddingTop: 4}}/>
                                                    </div>
                                                    <div className={"col-6 p-0 ms-1 me-2 "}>
                                                        <span>검색</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </button>

                                <Overlay
                                    show={showGuestCount}
                                    onHide={() => setShowGuestCount(false)}
                                    placement={"bottom"}
                                    target={target.current}
                                >
                                    <Popover className={"shadow-lg"} style={{width:403, borderRadius:30, maxWidth:800, marginLeft:170}}>
                                        <GuestCount guestValue={setSelectGuest}/>
                                    </Popover>
                                </Overlay>

                                <Overlay
                                    show={showChooseDate}
                                    onHide={() => setShowChooseDate(false)}
                                    placement={"bottom"}
                                    target={target.current}
                                >
                                    <Popover className={"shadow-lg"} style={{width: 800, height: 460, borderRadius:30, maxWidth:800, marginLeft:-170}}>
                                        <Calendar dateValue={setChooseDate} />
                                    </Popover>
                                </Overlay>


                            </div>
                        </div>
                    </nav>
                </ModalBody>
            </Modal>


        </>
    );
}

export default HeaderModal;