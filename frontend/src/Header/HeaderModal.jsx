import React, {useState} from "react";
import {Dropdown, Modal, ModalBody} from "react-bootstrap";

import './Header.css';
import Header from "./Header";
import {Link} from "react-router-dom";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import GuestCount from "../GuestCount";

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
            borderTopRightRadius: 25,
            borderBottomRightRadius: 25,
            width: 200
        },
    }

    const [show, setShow] = useState(false);

    return (
        <>
            <div className={"nav-item"} id={"nav-first"}>
                <div className={"btn-group"} role={"group"}>

                    <button type={"button"} id={"btn-where"} className={"btn btn-outline-secondary px-3 py-1"} style={styles.pillStart} onClick={() => setShow(true)}>어디든지</button>
                    <button type={"button"} className={"btn btn-outline-secondary px-3 py-1"} onClick={() => setShow(true)}>언제든 일주일</button>
                    <button type={"button"} className={"btn btn-outline-secondary px-3 py-1"} style={styles.nav1PillEnd} onClick={() => setShow(true)}>
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
                show={show}
                onHide={() => setShow(false)}
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
                                        <DropdownItem href={"#"}>로그인</DropdownItem>
                                        <DropdownItem href={"/join"}>회원가입</DropdownItem>
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
                            <div className={"btn-group sidenav"} role={"group"}  id={"menu"}>
                                <button type={"button"} className={"btn btn-outline-secondary px-3 py-2"} style={styles.pillStart}>여행지</button>
                                <button type={"button"} className={"btn btn-outline-secondary px-3 py-2"}>체크인</button>
                                <button type={"button"} className={"btn btn-outline-secondary px-3 py-2"}>체크아웃</button>
                                <button type={"button"} className={"btn btn-outline-secondary px-3 py-2"} style={styles.nav2PillEnd}>
                                    <div className={"row"}>
                                        <div className={"col px-0 py-2"}>
                                            <Dropdown drop={"down-centered"}>
                                                <DropdownToggle variant={"none"} bsPrefix style={{border:"none"}}>
                                                    <a href="#" className={"nav-link"}>여행자</a>
                                                </DropdownToggle>

                                                <DropdownMenu>
                                                    <GuestCount />
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                        <div className={"col-8"} style={{paddingTop:1}}>
                                            <button type={"button"} className={"btn btn-primary"} style={{borderRadius:25}}>
                                                <div className={"row px-1"}>
                                                    <div className={"col-1"}>
                                                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{width: 12, paddingTop: 4}}/>
                                                    </div>
                                                    <div className={"col-6 p-0 ms-1 me-2"}>
                                                        <span>검색</span>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </nav>
                </ModalBody>
            </Modal>
        </>
    );
}

export default HeaderModal;