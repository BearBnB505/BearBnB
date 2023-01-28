import React, {useState, useRef} from "react";
import {ButtonGroup, Dropdown, Modal, ModalBody, NavDropdown} from "react-bootstrap";

import './Header.css';
import {Link} from "react-router-dom";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import Overlay from 'react-bootstrap/Overlay';

import Popover from 'react-bootstrap/Popover';

// import "rsuite/dist/rsuite.min.css";
// import {
//     Button,
//     Popover,
//     Whisper
// } from "rsuite";

import $ from "jquery";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import GuestCount from "../GuestCount";
import Login from "../Login";
import Join from "../Join";
import {setTranslate3d} from "rsuite/cjs/List/helper/utils";

function HeaderModal(props) {
    const styles = {
        pillStart: {
            borderTopLeftRadius: 25,
            borderBottomLeftRadius: 25
        },
        nav1PillEnd: {
            borderTopRightRadius: 25,
            borderBottomRightRadius: 25,
            width: 160
        },
        nav2PillEnd: {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderTopRightRadius: 25,
            borderBottomRightRadius: 25,
            borderLeft: "none",
            width: 220,
            // position: "absolute"
        },
    }

    const target = useRef(null);

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    const selectSpot = () => {
        setShow1(true);
        setShow2(false);
        setShow3(false);
    }

    const selectDate = () => {
        setShow1(true);
        setShow2(false);
        setShow3(true);
    }

    const selectGuest1 = () => {
        setShow1(true);
        selectGuest2();
    }

    const selectGuest2 = () => {
        setShow2(true);
        setShow3(false);
    }

    // $(document).ready(function () {
    //     $('#btn-who').on('click', function () {
    //         $('#selectGuest2').addClass('');
    //     })
    // })

    return (
        <>
            <div className={"nav-item"} id={"nav-first"}>
                <div className={"btn-group"} role={"group"}>

                    <button type={"button"} id={"btn-where"} className={"btn btn-outline-secondary px-3 py-1"} style={styles.pillStart} onClick={selectSpot}>어디든지</button>
                    <button type={"button"} className={"btn btn-outline-secondary px-3 py-1"} onClick={selectDate}>언제든 일주일</button>
                    <button type={"button"} id={"btn-who"} className={"btn btn-outline-secondary px-3 py-1"} style={styles.nav1PillEnd} onClick={selectGuest1}>
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
                show={show1}
                onHide={() => setShow1(false)}
                dialogClassName={"header-modal"}
                animation={false}
            >
                <ModalBody>
                    <nav className={"navbar navbar-expand-sm navbar-white bg-white mt-1 fixed"} id={"header_nav"}>
                        <div className={"container justify-content-between"} style={{width: 1900}}>
                            <Link to={"/"}><img src="/img/BearBnB_logo.png" alt="BearBnB" style={{width:130}}/></Link>

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
                                <button type={"button"} className={"btn btn-outline-secondary px-3 py-2"} style={styles.pillStart} onClick={selectSpot}>여행지</button>
                                <button type={"button"} className={"btn btn-outline-secondary px-3 py-2"} onClick={selectDate}>체크인</button>
                                <button ref={target}  type={"button"} className={" btn btn-outline-secondary px-3 py-2"} onClick={selectDate}>체크아웃</button>

                                <button ref={target} type={"button"} className={" btn btn-outline-secondary py-2"} style={styles.nav2PillEnd} onClick={selectGuest2}>
                                    <div className={"row"}>
                                        <div className={"col-4 my-auto ms-3"}>
                                            여행자
                                        </div>
                                        <div className={"col-6 ms-3"}>
                                            <a type={"button"} className={"btn btn-primary"} style={{borderRadius:25}}>
                                                <div className={"row px-1"}>
                                                    <div className={"col-1"}>
                                                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{width: 12, paddingTop: 4}}/>
                                                    </div>
                                                    <div className={"col-6 p-0 ms-1 me-2"}>
                                                        <span>검색</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </button>

                                <Overlay
                                    show={show2}
                                    onHide={() => setShow2(false)}
                                    placement={"bottom"}
                                    target={target.current}
                                >
                                    <Popover className={"shadow-lg"} style={{width:403, borderRadius:30, maxWidth:800, marginLeft:200}}>
                                        <GuestCount/>
                                    </Popover>
                                </Overlay>

                                <Overlay
                                    show={show3}
                                    onHide={() => setShow3(false)}
                                    placement={"bottom"}
                                    target={target.current}
                                >
                                    <Popover className={"shadow-lg"} style={{width:800, borderRadius:30, maxWidth:800}}>
                                        <div>
                                            test
                                        </div>
                                    </Popover>
                                </Overlay>

                                {/*<Whisper*/}
                                {/*    trigger="active"*/}
                                {/*    placement={"bottom"}*/}
                                {/*    speaker={*/}
                                {/*        <Popover arrow={false} style={{marginTop:20, borderRadius:30}}>*/}
                                {/*            <GuestCount/>*/}
                                {/*        </Popover>*/}
                                {/*    }>*/}
                                {/*    <button id={"selectGuest2"} type={"button"} className={"btn btn-outline-secondary py-2"} style={styles.nav2PillEnd} onClick={selectGuest2}>*/}
                                {/*        <div className={"row"}>*/}
                                {/*            <div className={"col-4 my-auto ms-3"}>*/}
                                {/*                여행자*/}
                                {/*            </div>*/}
                                {/*            <div className={"col-6 ms-3"}>*/}
                                {/*                <a type={"button"} className={"btn btn-primary"} style={{borderRadius:25}}>*/}
                                {/*                    <div className={"row px-1"}>*/}
                                {/*                        <div className={"col-1"}>*/}
                                {/*                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{width: 12, paddingTop: 4}}/>*/}
                                {/*                        </div>*/}
                                {/*                        <div className={"col-6 p-0 ms-1 me-2"}>*/}
                                {/*                            <span>검색</span>*/}
                                {/*                        </div>*/}
                                {/*                    </div>*/}
                                {/*                </a>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </button>*/}
                                {/*</Whisper>*/}


                            </div>
                        </div>
                    </nav>
                </ModalBody>
            </Modal>


        </>
    );
}

export default HeaderModal;