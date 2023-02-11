import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";
import DetailTable2Wait from "./DetailTable2Wait";
import DetailTable2Approve from "./DetailTable2Approve";

function DetailTable2() {
    const [lodging, setLodging] = useState([]);
    const [comfort, setComfort] = useState([]);

    const {lodgingNum} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/admin/lodging/detail2/${lodgingNum}`)
            .then((req) => {
                const {data} = req;
                console.log(data);
                setLodging(data.lodging);
                setComfort(data.comfort);
            })
            .catch((err) => {
                console.log("통신 오류");
            })
    }, []);
    return (
        <div className={"container mt-3"} style={{width: 1240}}>

            {
                lodging.regState === "승인대기" ?
                    <DetailTable2Wait lodging={lodging} comfort={comfort}/> :
                    <DetailTable2Approve lodging={lodging} comfort={comfort}/>
            }


        </div>
    )
}

export default DetailTable2;

