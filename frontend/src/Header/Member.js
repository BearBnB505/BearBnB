import React, {useEffect} from "react";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import Login from "../User/Login";
import Join from "../User/Join";
import Logout from "../User/Logout";
import DropdownItem from "react-bootstrap/DropdownItem";
import {Dropdown} from "react-bootstrap";
import {useLocation} from "react-router";
import {CheckToken} from "../Auth/CheckToken";
import axios from "axios";
import {getCookie} from "../Storage/Cookies";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Auth} from "../Auth/Auth";

function Member(props) {

    const location = useLocation();
    const {isAuth} = CheckToken(location.key);

    const auth = Auth();
    // console.log("userId: " + auth.userId);

    return (
        <Dropdown>
            <DropdownToggle variant={"none"} bsPrefix style={{border:"none"}}>
                <a className={"nav-link"}><img src="/img/user.png" alt="user" style={{width: 35}}/></a>
            </DropdownToggle>

            <DropdownMenu align={"end"} className={"shadow"}>
                {((isAuth === 'Failed') || (isAuth === 'Loaded')) && <Login/>}
                {((isAuth === 'Failed') || (isAuth === 'Loaded')) && <Join/>}
                {(isAuth === 'Success') && <Logout/>}
                {/*<Login/>*/}
                {/*<Join/>*/}
                {/*<Logout/>*/}

                {(isAuth === 'Success') && <>
                    {/*<DropdownItem href={"/message"}>*/}
                    {/*    <span>메세지알림</span>*/}
                    {/*    <span className="badge bg-primary rounded-pill float-end">2</span>*/}
                    {/*</DropdownItem>*/}

                    <DropdownItem><Link to={'/mypage'}>마이페이지</Link></DropdownItem>

                </>}
            </DropdownMenu>
        </Dropdown>
    );
}

export default Member;