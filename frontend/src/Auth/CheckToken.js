import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCookie, removeCookie} from "../Storage/Cookies";
import {auths} from "../lodging_reg/Reducers/AuthReducer";
import {TOKEN_TIME_OUT} from "../Store/Auth";
import {requestToken} from "../Api/Users";

export function CheckToken(key) {

    const [isAuth, setIsAuth] = useState('Loaded');
    const Auth = useSelector((state)=>state.auth.value);
    // console.log("로그인창");
    // console.log(Auth.access);
    const authenticated = Auth.authenticated;
    const accessToken = Auth.accessToken;
    const expireTime = Auth.expireTime;
    const refreshToken = getCookie('refreshToken');
    const dispatch = useDispatch();

    useEffect(()=> {
        const checkAuthToken = async () => {
            if (refreshToken === undefined) {
                dispatch(auths({accessToken:null, authenticated:true, expireTime:null}));
                setIsAuth('Failed');
            } else {
                if (authenticated && new Date().getTime() < expireTime){
                    setIsAuth('Success');
                } else {
                    const response = await requestToken(refreshToken);

                    if (response.status) {
                        const token = response.accessToken;
                        dispatch(auths({accessToken:token.accessToken, authenticated:true, expireTime:new Date().getTime() + TOKEN_TIME_OUT}));
                        setIsAuth('Success');
                    } else {
                        dispatch(auths({accessToken:null, authenticated:true, expireTime:null}));
                        removeCookie('refreshToken');
                        setIsAuth('Failed');
                    }
                }
            }
        };

        checkAuthToken();
    }, [refreshToken, dispatch, key]);

    return {
        isAuth
    };
}