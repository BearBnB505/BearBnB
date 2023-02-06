import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCookieToken, removeCookieToken} from "../Storage/Cookie";
import {DELETE_TOKEN, SET_TOKEN} from "../Store/Auth";
import {requestToken} from "../Api/Users";

export function CheckToken(key) {
    const [isAuth, setIsAuth] = useState('Loaded');
    const { authenticated, expireTime } = useSelector(state => state.token);
    const refreshToken = getCookieToken();
    const dispatch = useDispatch();

    const checkAuthToken = async () => {
        if (refreshToken === undefined) {
            dispatch(DELETE_TOKEN());
            setIsAuth('Failed');
        } else {
            if (authenticated && new Date().getTime() < expireTime) {
                setIsAuth('Success');
            } else {
                const response = await requestToken(refreshToken);

                if (response.status) {
                    const token = response.json.accessToken;
                    dispatch(SET_TOKEN(token));
                    setIsAuth('Success');
                } else {
                    dispatch(DELETE_TOKEN());
                    removeCookieToken();
                    setIsAuth('Failed');
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