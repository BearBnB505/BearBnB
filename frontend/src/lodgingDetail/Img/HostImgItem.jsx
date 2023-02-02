import React, {useContext} from "react";
import PhotoContext from "../Context/PhotoContext";

function HostImgItem() {
    const photo = useContext(PhotoContext);
    let img = ['img1', 'img2', 'img3', 'img4', 'img5'];

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

export default HostImgItem;