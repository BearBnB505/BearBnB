import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import axios from "axios";
import MainContents from "../Main/MainContents";
import {useLocation} from "react-router";
import Swal from "sweetalert2";
import {Auth} from "../Auth/Auth";
// 리뷰 상세보기 페이지
function ReviewContent() {

    const [data, setData] = useState([]);
    const location = useLocation();
    const idx = location.state;
    console.log(idx);
    // console.log(Object.values(idx)[0]);

    const sendIdx = Object.values(idx)[0];
    console.log(sendIdx);


    const {userId} = Auth();
    // useEffect(()=>{
        // axios.get('http://localhost:8080/reviewListContent',{
        //     params:{idx : idx}
        // })
        //

    //         .then((req)=>{
    //             const {data} = req;
    //             setData(data);
    //             console.log(data);
    //         })
    //         .catch((err)=>{
    //             console.log(err)
    //         })
    // },[idx])

    // useEffect(() => {
    //     // console.log("useEffect 카테고리");
    //     axios.put('/reviewListContent', null, {params: {idx: idx}})
    //         .then((req)=>{
    //             setData(req)
    //         })
    //         .catch((err) => {
    //             console.log("통신 오류");
    //             console.log(err);
    //         })
    // }, [])
    // useEffect(() => {
    //     axios.get(`http://localhost:8080/reviewListContent`,{p})
    //         .then((req) => {
    //             const {data} = req;
    //             console.log(data);
    //             console.log('통신성공');
    //         })
    //         .catch((err) => {
    //             console.log("통신 오류");
    //             console.log(err);
    //         })
    // });
    
    // 이거 진행하는 중

    useEffect(() => {
                axios.post('http://localhost:8080/reviewListContent',null,{params: {idx: sendIdx}}
                    )
                    .then((req) => {
                        const {data} = req;
                        setData(data);
                        console.log("data: "+ data);
                    })
                    .catch((err) => {
                        console.log("통신 오류");
                        console.log(err);
                    })
            }, []);

    // return (
    //     data.map((item) => {
            return (
                <div style={styles.frame}>
                    <ul className={"list-group mb-4"} style={styles.ul}>
                        {/*<ul className={"list-group mb-4"} style={styles.ul} >*/}
                        <li className={"list-group-item p-4"} style={styles.li}>
                            <div>

                                <span className={"fs-5 fw-bold me-1"}>{data.userId}</span>
                                <span className="me-2">
            <FontAwesomeIcon icon={faStar} size="1x"/> {(parseFloat(data.cleanGrade+data.accuracyGrade+data.communicationGrade+data.locationGrade+data.checkInGrade+data.costGrade)/6).toFixed(1)}/5
          </span>
                                <small className={"text-secondary"}>{data.reviewCreateDt}</small>
                            </div>
                            <span>
          {data.comment}
        </span>
                        </li>
                    </ul>
                </div>
            )
        // })

    // );

}

export default ReviewContent;


const styles = {
    ul: {
        border: "none",
        display: "block",
        listStyleType: "disc",
        marginBlockStart: "1em",
        marginBlockEnd: "1em",
        marginInlineStart: 0,
        marginInlineEnd: 0,
        paddingInlineStart: 0,
    }, li: {},

    frame: {
        display: "grid",
        gridTemplateColumns: 1300,
        justifyContent: "Center"
    },

}