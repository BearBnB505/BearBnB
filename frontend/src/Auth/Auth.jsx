import React, {useEffect, useState} from "react";
import {useLocation} from "react-router";
import {CheckToken} from "./CheckToken";
import {useSelector} from "react-redux";
import axios from "axios";

export function Auth() {
    const location = useLocation();
    const {isAuth} = CheckToken(location.key);

    const Auth = useSelector((state)=>state.auth.value);
    const accessToken = Auth.accessToken;

    const [userId, setUserId] = useState('');

    useEffect(() => {
        axios.get('/member/my', {headers: {
                'Authorization': 'Bearer ' + accessToken
            }})
            .then((req) => {
                const {data} = req;
                // console.log(data.userId);
                setUserId(data.userId);
            })
            .catch((err) => {
                console.log("통신 오류");
            })
    }, []);

    return {
        userId
    };
}