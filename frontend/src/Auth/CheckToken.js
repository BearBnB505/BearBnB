import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCookie, removeCookie} from "../Storage/Cookies";
import {DELETE_TOKEN, SET_TOKEN, tokenSlice} from "../Store/Auth";
import {requestToken} from "../Api/Users";
import {removeCookieToken} from "../Storage/Cookie";
import {configureStore} from "@reduxjs/toolkit";

export function CheckToken(key) {

    let store = configureStore({reducer: tokenSlice.reducer});

    let [isAuth, setIsAuth] = useState('Loaded');
    // let { authenticated, accessToken, expireTime } = useSelector(state => state.store.getState(SET_TOKEN));
    const authenticated = store.getState().authenticated;
    const accessToken = store.getState().accessToken;
    const expireTime = store.getState().expireTime;
    let refreshToken = getCookie('refreshToken');
    let dispatch = useDispatch();

    const checkAuthToken = () => {
        if (refreshToken === undefined) {
            store.dispatch(tokenSlice.actions.DELETE_TOKEN());
            // dispatch(DELETE_TOKEN());
            setIsAuth('Failed');
            // sessionStorage.setItem("isAuth", "Failed");
        } else {
            if (authenticated && new Date().getTime() < expireTime) {
                setIsAuth('Success');
                // sessionStorage.setItem("isAuth", "Success");
            }
            else {
                const response = requestToken(refreshToken);

                if (response.status) {
                    const token = response.json.accessToken;
                    store.dispatch(tokenSlice.actions.SET_TOKEN(token));
                    // dispatch(SET_TOKEN(token));
                    setIsAuth('Success');
                    // sessionStorage.setItem("isAuth", "Success");
                } else {
                    store.dispatch(tokenSlice.actions.DELETE_TOKEN());
                    // dispatch(DELETE_TOKEN());
                    // removeCookieToken();
                    removeCookie('refreshToken');
                    setIsAuth('Failed');
                    // sessionStorage.setItem("isAuth", 'Failed');
                }
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