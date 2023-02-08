import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";
import {Breadcrumb, Button, Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function DetailTable2() {
    const [avg, setAvg] = useState([]);
    const [complain, setComplain] = useState([]);
    const [lodging, setLodging] = useState([]);
    const [data, setData] = useState([]);

    const {lodgingNum} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/admin/lodging/detail2/${lodgingNum}`)
            .then((req) => {
                const {data} = req;
                console.log(data);
                setAvg(data.avg);
                setComplain(data.complain);
                setLodging(data.lodging);

            })
            .catch((err) => {
                console.log("통신 오류");
            })
    }, []);
    return (
        <div className={"container mt-3"} style={{width: 1240}}>

            <div className={"mb-4 p-1"}>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to={"../lodging"}>이전 페이지</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>상세 숙소정보</Breadcrumb.Item>
                </Breadcrumb>
                <h3 className={"fw-bold"}>상세 숙소 정보</h3>
            </div>


            {/*    이미지    */}
            <Card className={"shadow-sm rounded-3 p-1"}>
                <div className={"row"}>
                    <div className={"col-5"}>
                        <div style={styles.imgDiv}>
                            <img style={styles.img} src={lodging.certifyImg} alt=""/>
                        </div>
                    </div>

                    <div className={"col-7"}>
                        <div>숙소명 : {lodging.lodgingName}</div>
                        <div>신청날짜 : {lodging.createDt}</div>
                    </div>
                </div>

                <div className={"row p-2"}>
                    <div>상세정보..</div>
                    <div>상세정보..</div>
                    <div>상세정보..</div>
                    <div>상세정보..</div>
                    <div>상세정보..</div>
                    <div>상세정보..</div>
                </div>

            </Card>

            <div className={"row mt-3"}>
                <div className={"col-6"}>
                    <Button>예약확정</Button>
                </div>
                <div className={"col-6"}>
                    <Button>예약취소</Button>
                </div>
            </div>

        </div>
    )
}

export default DetailTable2;


const styles = {
    ul: {
        padding: 0,
    },
    li: {
        listStyleType: "none",
    },
    imgDiv: {
        width: "100%",
        height: "250px",
    },
    img: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
    },

}