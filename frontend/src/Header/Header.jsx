import React from "react";
import {Link} from "react-router-dom";
import {Dropdown} from "react-bootstrap";

import $ from "jquery";
import './Header.css';
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import HeaderModal from "./HeaderModal";
import Login from "../Login";

function Header(props) {

    return (
        <div className={"border-bottom pb-2"} id={"div-header"}>
            <nav className={"navbar navbar-expand-sm navbar-white bg-white mt-1 fixed"} id={"header_nav"}>
                <div className={"container justify-content-between"} style={{width: 1900}}>
                    <Link to={"/"}><img src="/img/BearBnB_logo.png" alt="BearBnB" style={{width:130}}/></Link>

                    <HeaderModal/>

                    <div className={"nav-item"}>
                        <Dropdown>
                            <DropdownToggle variant={"none"} bsPrefix style={{border:"none"}}>
                                <a href="#" className={"nav-link"}><img src="/img/user.png" alt="user" style={{width: 35}}/></a>
                            </DropdownToggle>

                            <DropdownMenu align={"end"}>
                                <DropdownItem href={"#"}>
                                    {/*로그인*/}
                                    <Login />
                                </DropdownItem>
                                <DropdownItem href={"/join"}>회원가입</DropdownItem>
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