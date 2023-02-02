import React from "react";
import {Button} from "react-bootstrap";
import '../lodgingDetail.css';
import HostImgItem from "../Img/HostImgItem";


function HostImg() {
    return (
        <div className={'containerGrid'}>
            <HostImgItem/>
            <Button className={'HouseImgBtn'} variant="dark">사진 모두보기</Button>
            <hr/>
        </div>
    )
}


export default HostImg;