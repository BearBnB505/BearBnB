import React, {useEffect, useState} from "react";
import {useLocation} from "react-router";
import axios from "axios";
import Keep from "../../../Main/Keep";
import {Link} from "react-router-dom";
import MainContents from "../../../Main/MainContents";

function HousePicture(props) {
    const location = useLocation();
    const lodgingNum = location.state.lodgingNum;
    console.log('사진 부분에서 숙소번호')
    console.log(lodgingNum);
    const [data,setData] = useState([]);

    useEffect(() => {
        axios.put('http://localhost:8080/lodgingPhotoList',null,{params: {lodgingNum: lodgingNum}})
            .then((req) => {
                const {data} = req;
                console.log(data);
                setData(data);
            })
            .catch((err) => {
                console.log("숙소 사진 불러오기");
            })
    }, []);

    console.log(data.length);

    return (
        <div>
            {
                data.map((item) => {
                    return (
                        
                            <div className={"container"}>
                                <img src={item.photo}/>
                            </div>
                    )
                })
            }

        </div>
    );
}

export default HousePicture;