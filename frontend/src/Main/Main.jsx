import React, {useEffect, useState} from "react";
import MainContents from "./MainContents";
import "./slick.css";
import {Link} from "react-router-dom";
import axios from "axios";
import MainCategory from "./MainCategory";
import Keep from "./Keep";
import {getCookie} from "../Storage/Cookies";
import {useDispatch, useSelector} from "react-redux";
// import {DELETE_TOKEN, SET_TOKEN, tokenSlice} from "../Store/Auth";
import {removeCookieToken} from "../Storage/Cookie";
import {useLocation} from "react-router";
import {CheckToken} from "../Auth/CheckToken";
import {configureStore} from "@reduxjs/toolkit";

function Main(props) {

    const styles = {
        lodgingList: {
            listStyleType: "none",
            margin:20
        },
        keep: {
            width: 25,
            // opacity: .60
        }
    };

    // const location = useLocation();
    // const {isAuth} = CheckToken(location.key);
    // const {isAuth} = CheckToken();


    const Auth = useSelector((state)=>state.auth.value);
    // console.log(Auth);
    const accessToken = Auth.accessToken;
    // console.log(accessToken);

    const [data, setData] = useState([]);
    const [category, setCategory] = useState('한옥');
    const [check, setCheck] = useState("ready");
    // console.log(category);
    // console.log('데이터 확인')
    // console.log(data)

    useEffect(() => {
        // const mainLodgingList = async () => {
        //     const mainLodgingListData = (await axios.get('/lodgingList', {params: {category: category}})).data
        //     console.log("메인 숙소 데이터" +mainLodgingListData[0]);
        // }

        axios.get('/lodgingList', {params: {category: category}})
            .then((req) => {
                const {data} = req;
                setData(data);

                // console.log("카테고리 변경 데이터");
                // console.log(data);

                setCheck("done");
            })
            .catch((err) => {
                console.log("통신 오류");
            })
    }, [category]);

    const refreshToken = getCookie('refreshToken');

    // useEffect(() => {
    //     axios.get('/member/my', {headers: {
    //         'Authorization': 'Bearer ' + refreshToken
    //     }})
    //         .then((req) => {
    //             const {data} = req;
    //             console.log(data.userId);
    //         })
    //         .catch((err) => {
    //             console.log("통신 오류");
    //         })
    // }, [category]);

    // 헤더 검색
    useEffect(() => {
        if (!sessionStorage.getItem("startDt")) {
            return;
        }
        // else if (sessionStorage.getItem("startDt") != null) {
            // setSearchParam(sessionStorage.getItem(searchParam));
            // console.log(sessionStorage.getItem("startDt"));
            let searchSpot = sessionStorage.getItem("searchSpot");
            let startDt = sessionStorage.getItem("startDt");
            let endDt = sessionStorage.getItem("endDt");
            let adultCount = sessionStorage.getItem("adultCount");
            let searchParam = {
                searchSpot: searchSpot,
                startDt: startDt,
                endDt: endDt,
                adultCount: adultCount,
            };
            axios.get('http://localhost:8080/searchLodgingList', {params: searchParam})
                .then((req) => {
                    const {data} = req;
                    // console.log(data);
                    setData(data);

                    sessionStorage.clear();
                })
                .catch((err) => {
                    console.log("통신 오류");
                })
        // }
    }, []);

    

    return (
        <div className={"container"} style={{width:1480, maxWidth:1800}}>
            <MainCategory categoryValue={setCategory}/>

            <div>
                <ul className={"ps-1 d-flex flex-wrap"}>
                    {
                        data.map((item) => {
                            return (
                                <li style={styles.lodgingList}>
                                    <div className={"position-absolute"} style={{zIndex:1, marginLeft:215, marginTop:8}}>
                                        <Keep idx={item.idx}/>
                                    </div>
                                    <Link to={`/lodgingDetail/${item.idx}`} style={{color: "black"}} state={{lat: `${item.latitude}`, lng: `${item.longitude}`}}>
                                        <MainContents idx={item.idx} data={item} category={category} check={check} key={item.idx}/>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Main;