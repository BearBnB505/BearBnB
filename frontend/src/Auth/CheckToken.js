import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCookie} from "../Storage/Cookies";
// import {DELETE_TOKEN, SET_TOKEN, tokenSlice} from "../Store/Auth";
import {SET_TOKEN, TOKEN_TIME_OUT} from "../Store/Auth";
import {requestToken} from "../Api/Users";
import {removeCookieToken} from "../Storage/Cookie";
import {configureStore} from "@reduxjs/toolkit";
import {auths} from "../lodging_reg/Reducers/AuthReducer";

export function CheckToken() {

    // const store = configureStore({reducer: tokenSlice.reducer});

    let [isAuth, setIsAuth] = useState('Loaded');
    sessionStorage.setItem("isAuth", "Loaded");

    const Auth = useSelector((state)=>state.auth.value);
    console.log("로그인창");
    console.log(Auth.access);
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
        } else {
            if (authenticated && new Date().getTime() < expireTime) {
                // setIsAuth('Success');
                sessionStorage.setItem("isAuth", "Success");
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
            }
        }
    };

    useEffect(() => {
        checkAuthToken();
    }, [refreshToken, dispatch]);

    return (
        isAuth
    );
}