import React from "react";
import {Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

function DetailTable2Image({lodging}) {
    return (
        <div className={"shadow-sm rounded-5 mt-1 border-1"} style={styles.imgDiv}>
            <img className={"rounded-5"} style={styles.img} src={lodging.certifyImg} alt=""/>
        </div>
    )
}

export default DetailTable2Image;


const styles = {
    imgDiv: {
        width: "100%",
        height: "150px",
    },
    img: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
    },

}