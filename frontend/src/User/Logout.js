import React, {useEffect} from "react";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {getCookieToken, removeCookieToken} from "../Storage/Cookie";
import {DELETE_TOKEN} from "../Store/Auth";
import DropdownItem from "react-bootstrap/DropdownItem";
import {removeCookie} from "../Storage/Cookies";

function Logout() {

    // store에 저장된 Access Token 정보 받아옴
    // const {accessToken} = useSelector(state => state.token);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const refreshToken = getCookieToken();
    // const refreshToken = getCookie();

    async function logout() {
        // 백으로부터 받은 응답
        // const data = await logoutUser({refresh_token: refreshToken}, accessToken);
        // if (data.status) {
        //     dispatch(DELETE_TOKEN());
        //     removeCookieToken();
            removeCookie('refreshToken');
        //     removeCookie('accessToken');
        //     return navigate('/');
        // } else {
        //     window.location.reload();
        // }
    }

    // const logout = () => {
    //     removeCookie(refreshToken);
    // }

    return (
        <>
            {/*<Link to={"/"} >*/}
                <DropdownItem onClick={logout}>
                    로그아웃
                </DropdownItem>
            {/*</Link>*/}
        </>
    );
}

export default Logout;