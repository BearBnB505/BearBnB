import React, {useContext} from "react";
import {Button} from "react-bootstrap";
import '../lodgingDetail.css';
import PhotoContext from "../Context/PhotoContext";

function HostImg() {
    const photo = useContext(PhotoContext);

    return (
        <>
            <div className={'containerGrid'}>
                    <HostImgItem photo1={photo.length[0]}/>
                <Button className={'HouseImgBtn'} variant="dark">사진 모두보기</Button>
            </div>
            <hr/>
        </>
    )
}

function HostImgItem() {

    return (
        <>
            <img className={'img1'} src="/hostImg/1.png" alt="hostHouse"/>
            <img className={'img2'} src="/hostImg/2.png" alt="hostHouse"/>
            <img className={'img3'} src="/hostImg/3.png" alt="hostHouse"/>
            <img className={'img4'} src="/hostImg/4.png" alt="hostHouse"/>
            <img className={'img5'} src="/hostImg/5.png" alt="hostHouse"/>
        </>
    )

}


export default HostImg;