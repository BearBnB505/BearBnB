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
        },
        keep: {
            width: 25,
            // opacity: .60
        }
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