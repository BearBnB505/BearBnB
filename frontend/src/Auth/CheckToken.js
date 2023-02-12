import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCookie} from "../Storage/Cookies";

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
                // dispatch(DELETE_TOKEN());
                setIsAuth('Failed');
            } else {
                if (authenticated && new Date().getTime() < expireTime){
                    setIsAuth('Success');
                } else {
                    // const response = await requestToken(refreshToken);
                    //
                    // if (response.status) {
                    //     const token = response.json.access_token;
                    //     dispatch(SET_TOKEN(token));
                        setIsAuth('Success');
                    // } else {
                    //     dispatch(DELETE_TOKEN());
                    //     removeCookieToken();
                    //     setIsAuth('Failed');
                    // }
                }
            }
        };

        checkAuthToken();
    }, [refreshToken, dispatch, key]);

    return {
        isAuth
    };
}