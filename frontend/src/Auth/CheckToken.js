import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCookie} from "../Storage/Cookies";
// import {DELETE_TOKEN, SET_TOKEN, tokenSlice} from "../Store/Auth";
import {SET_TOKEN} from "../Store/Auth";
import {requestToken} from "../Api/Users";
import {removeCookieToken} from "../Storage/Cookie";
import {configureStore} from "@reduxjs/toolkit";

export function CheckToken(key) {

    // const store = configureStore({reducer: tokenSlice.reducer});

    let [isAuth, setIsAuth] = useState('Loaded');
    // const { authenticated, accessToken, expireTime } = useSelector(state => state.store.getState());
    // let authenticated = store.getState().authenticated;
    // let accessToken = store.getState().accessToken;
    // let expireTime = store.getState().expireTime;
    // const authenticated = useSelector((state) => state.accessToken.value.authenticated);
    const accessToken = useSelector(state => state.authToken.value);
    // const expireTime = useSelector((state) => state.accessToken.value.expireTime);
    console.log("access : " + accessToken);
    let refreshToken = getCookie('refreshToken');
    let dispatch = useDispatch();

    let authenticated = true;
    let expireTime = new Date();

    const checkAuthToken = () => {
        if (refreshToken === undefined) {
            // dispatch(DELETE_TOKEN());
            setIsAuth('Failed');
            // sessionStorage.setItem("isAuth", "Failed");
        } else {
            if (authenticated && new Date().getTime() < expireTime) {
                setIsAuth('Success');
                // sessionStorage.setItem("isAuth", "Success");
            }
            else {
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
    }, [refreshToken, dispatch, key]);

    return (
        isAuth
    );
}