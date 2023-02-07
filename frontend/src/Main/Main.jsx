import React, {useEffect, useState} from "react";
import MainContents from "./MainContents";
import "./slick.css";
import {Link} from "react-router-dom";
import axios from "axios";
import MainCategory from "./MainCategory";
import Keep from "./Keep";

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

    const [data, setData] = useState([]);
    const [category, setCategory] = useState('한옥');
    console.log(category);

    useEffect(() => {
        axios.get('http://localhost:8080/lodgingList', {params: {category: category}})
            .then((req) => {
                const {data} = req;
                // console.log(data);
                setData(data);
            })
            .catch((err) => {
                console.log("통신 오류");
            })
    }, [category]);

    // const [searchParam, setSearchParam] = useState({});
    // const [startDt, setStartDt] = useState('');
    // if (sessionStorage.getItem("startDt") != null) {
    //     // setSearchParam(sessionStorage.getItem(searchParam));
    //     // console.log(sessionStorage.getItem("startDt"));
    //     // let startDt = sessionStorage.getItem("startDt");
    //     setStartDt(sessionStorage.getItem("startDt"));
    // }

    useEffect(() => {
        if (sessionStorage.getItem("startDt") != null) {
            // setSearchParam(sessionStorage.getItem(searchParam));
            console.log(sessionStorage.getItem("startDt"));
            let startDt = sessionStorage.getItem("startDt");
            let endDt = sessionStorage.getItem("endDt");
            let adultCount = sessionStorage.getItem("adultCount");
            let searchParam = {
                startDt: startDt,
                endDt: endDt,
                adultCount: adultCount,
            }
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
        }
    }, [sessionStorage.getItem("startDt")]);

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
                                        <MainContents idx={item.idx} data={item} />
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