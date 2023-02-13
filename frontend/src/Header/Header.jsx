import React from "react";
import {Link} from "react-router-dom";
import './Header.css';

import HeaderModal from "./HeaderModal";
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