import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCookie} from "../Storage/Cookies";
import {auths} from "../lodging_reg/Reducers/AuthReducer";

export function CheckToken() {

    // let [isAuth, setIsAuth] = useState('Loaded');
    sessionStorage.setItem("isAuth", "Loaded");

    const Auth = useSelector((state)=>state.auth.value);
    // console.log("로그인창");
    // console.log(Auth.access);
    const authenticated = Auth.authenticated;
    const accessToken = Auth.accessToken;
    const expireTime = Auth.expireTime;

    let refreshToken = getCookie('refreshToken');
    let dispatch = useDispatch();

    const checkAuthToken = () => {
        if (refreshToken === undefined) {
            dispatch(auths({accessToken: null, authenticated: false, expireTime: null}));
            // setIsAuth('Failed');
            sessionStorage.setItem("isAuth", "Failed");
        // } else {
        //     if (authenticated && new Date().getTime() < expireTime) {
                // setIsAuth('Success');
                // sessionStorage.setItem("isAuth", "Success");
            }
            else {
                sessionStorage.setItem("isAuth", "Success");

                // const response = requestToken(refreshToken);
                //
                // if (response.status) {
                //     const token = response.json.accessToken;
                //     dispatch(SET_TOKEN(token));
                //     setIsAuth('Success');
                //     // sessionStorage.setItem("isAuth", "Success");
                // } else {
                //     dispatch(DELETE_TOKEN());
                //     removeCookieToken();
                //     setIsAuth('Failed');
                //     // sessionStorage.setItem("isAuth", 'Failed');
                // }
            // }
        }
    }

    useEffect(() => {
        checkAuthToken();
    }, [refreshToken, dispatch]);

    return (
        // isAuth
        <></>
    );
}