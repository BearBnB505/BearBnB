import React from "react";
import {Breadcrumb, Card, Image} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faHart} from "@fortawesome/free-solid-svg-icons";
import Anima from "./animaData";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const keeping = [
    {
        idx: "1",
        imageUrl: "https://pix8.agoda.net/hotelImages/62746/-1/f668694b59f90226aa6e2c42a6003102.jpg?ca=15&ce=1&s=1024x768",
        lodging_num: "4221",
        lodging_name: "제주도 신라 호텔",
        addr: "제주 서귀포시 중문관광로72번길 75",
        review_grade: "4.9",
        review_count: "72",
    },
    {
        idx: "1",
        imageUrl: "https://pix8.agoda.net/hotelImages/627/62746/62746_15081811410034485661.jpg?ca=5&ce=1&s=1024x768",
        lodging_num: "4221",
        lodging_name: "제주도 신라 호텔",
        addr: "제주 서귀포시 중문관광로72번길 75",
        review_grade: "4.9",
        review_count: "72",
    },
    {
        idx: "1",
        imageUrl: "https://pix8.agoda.net/hotelImages/62746/-1/98398aa801fd3f64b6f38599a5728c0c.jpg?ca=8&ce=1&s=1024x768",
        lodging_num: "4221",
        lodging_name: "제주도 신라 호텔",
        addr: "제주 서귀포시 중문관광로72번길 75",
        review_grade: "4.9",
        review_count: "72",
    },{
        idx: "1",
        imageUrl: "https://pix8.agoda.net/hotelImages/62746/-1/98398aa801fd3f64b6f38599a5728c0c.jpg?ca=8&ce=1&s=1024x768",
        lodging_num: "4221",
        lodging_name: "제주도 신라 호텔",
        addr: "제주 서귀포시 중문관광로72번길 75",
        review_grade: "4.9",
        review_count: "72",
    },
]

function Keeping() {
    return (
        <motion.div variants={Anima}
                    initial="hidden"
                    animate="visible"
                    exit="exit" className={"container mt-5"}>
            <div className={"mb-5"}>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to={"../mypage"}>마이페이지</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>찜한 숙소 목록</Breadcrumb.Item>
                </Breadcrumb>
                <h2 className={"fw-bold"}>찜한 숙소 목록</h2>
            </div>

            <div className={"row"}>
                {keeping.map((item) => {
                    return <KeepingItem idx={item.idx} imageUrl={item.imageUrl} lodging_num={item.lodging_num}
                                        lodging_name={item.lodging_name} addr={item.addr}
                                        review_grade={item.review_grade} review_count={item.review_count}/>
                })}
            </div>
        </motion.div>
    )
}

function KeepingItem({idx, imageUrl, lodging_num, lodging_name, addr, review_grade, review_count}) {
    return (
        <div className={"col-sm-6 col-md-6 col-lg-4 mb-2"}>
            <ul style={styles.ul}>
                <li style={styles.li}>
                    <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 1}}>
                    <Card className={"shadow-sm rounded-3 p-1"}>
                        <div style={styles.imgDiv}>
                            <img style={styles.img} src={imageUrl} alt=""/>
                        </div>
                        {/*/!*<Card.Img variant="top" src="holder.js/100px180"/>*!/ 이미지 <br/><br/><br/><br/>*/}
                        <Card.Text className={"p-3"}>
                            <div className={"mb-0"}>
                                <span className={"me-2"}>
                                    <strong>{lodging_name}</strong>
                                    </span>
                                <span className={"blueColor"}><FontAwesomeIcon icon={faStar} size="1x"/> {review_grade} ({review_count})</span>
                            </div>
                            <p>{addr}</p>

                        </Card.Text>
                    </Card>
                </motion.div>
            </li>
            </ul>
        </div>

    )
}

export default Keeping;

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