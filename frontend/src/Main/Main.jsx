import React, {useEffect, useState} from "react";
import MainContents from "./MainContents";
import "./slick.css";
import {Link} from "react-router-dom";
import axios from "axios";
import MainCategory from "./MainCategory";

function Main(props) {

    const styles = {
        lodgingList: {
            listStyleType: "none",
        },
    };

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/lodgingList')
            .then((req) => {
                const {data} = req;
                // console.log(data);
                setData(data);
            })
            .catch((err) => {
                console.log("통신 오류");
            })
    }, []);

    return (
        <div className={"container"}>
            <MainCategory/>

            <div>
                <ul className={"ps-0 d-flex justify-content-between"}>
                    {
                        data.map((item) => {
                            return (
                                <li style={styles.lodgingList}>
                                    <Link to={`/lodgingDetail/${item.idx}`} style={{color: "black"}}>
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