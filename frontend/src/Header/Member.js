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

function Member(props) {


    // const location = useLocation();
    // const {isAuth} = CheckToken(location.key);

    // CheckToken();
    // let isAuth = sessionStorage.getItem("isAuth");
    // console.log(`isAuth : ${isAuth}`);

    return (
        <Dropdown>
            <DropdownToggle variant={"none"} bsPrefix style={{border:"none"}}>
                <a className={"nav-link"}><img src="/img/user.png" alt="user" style={{width: 35}}/></a>
            </DropdownToggle>

            <DropdownMenu align={"end"} className={"shadow"}>
                {/*{((isAuth === 'Failed') || (isAuth === 'Loaded')) && <Login/>}*/}
                {/*{((isAuth === 'Failed') || (isAuth === 'Loaded')) && <Join/>}*/}
                {/*{(isAuth === 'Success') && <Logout/>}*/}
                <Login/>
                <Join/>
                <Logout/>

                {/*{(isAuth === 'Success') && <>*/}
                    <DropdownItem href={"/message"}>
                        <span>메세지알림</span>
                        <span className="badge bg-primary rounded-pill float-end">2</span>
                    </DropdownItem>
                    <DropdownItem href={"/mypage"}>마이페이지</DropdownItem>
                {/*</>}*/}
            </DropdownMenu>
        </Dropdown>
    );
}

export default Member;