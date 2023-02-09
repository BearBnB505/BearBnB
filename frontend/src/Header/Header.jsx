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
import {useLocation} from "react-router";
import {CheckToken} from "../Auth/CheckToken";
import Logout from "../User/Logout";
import {useSelector} from "react-redux";
import {SET_TOKEN} from "../Store/Auth";
import Member from "./Member";

function Header(props) {



    return (
        <div className={"border-bottom pb-2"} id={"div-header"}>
            <nav className={"navbar navbar-expand-sm navbar-white bg-white mt-1 fixed"} id={"header_nav"}>
                <div className={"container justify-content-between"} style={{width: 1900}}>
                    <Link to={"/"}><img src="/img/BearBnB_logo.png" alt="BearBnB" style={{width:130}}/></Link>

                    <HeaderModal/>

                    <div className={"nav-item"}>
                        <Member/>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;