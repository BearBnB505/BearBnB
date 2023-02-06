import React from "react";
import {Link} from "react-router-dom";
import {Dropdown} from "react-bootstrap";

import $ from "jquery";
import './Header.css';
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import HeaderModal from "./HeaderModal";
import Login from "../User/Login";
import Join from "../User/Join";
import * as AuthenticationService from "../Auth/AuthenticationService"

function Header(props) {

    // const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

    // console.log(isUserLoggedIn);

    return (
        <div className={"border-bottom pb-2"} id={"div-header"}>
            <nav className={"navbar navbar-expand-sm navbar-white bg-white mt-1 fixed"} id={"header_nav"}>
                <div className={"container justify-content-between"} style={{width: 1900}}>
                    <Link to={"/"}><img src="/img/BearBnB_logo.png" alt="BearBnB" style={{width:130}}/></Link>

                    <HeaderModal/>

                    <div className={"nav-item"}>
                        <Dropdown>
                            <DropdownToggle variant={"none"} bsPrefix style={{border:"none"}}>
                                {/*<a href="#" className={"nav-link"}>*/}
                                    <img src="/img/user.png" alt="user" style={{width: 35}}/>
                                {/*</a>*/}
                            </DropdownToggle>

                            <DropdownMenu align={"end"}>
                                {/*{!isUserLoggedIn && <Login />}*/}
                                {/*{isUserLoggedIn && <DropdownItem href={"/"} onClick={AuthenticationService.logout}>로그아웃</DropdownItem>}*/}
                                <Login/>
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
        </div>
    );
}

export default Header;