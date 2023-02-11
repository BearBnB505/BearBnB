import React, {useState} from "react";
import {Button} from "react-bootstrap";
import '../lodgingDetail.css';
import HostImgModalDetail from "./HostImgModalDetail";

function HostImg({photo}) {
    const [modal, setModal] = useState(false);
    return (
        <>
            <div className={'containerGrid'}>
                    <HostImgItem photo={photo}/>
                <Button className={'HouseImgBtn'} variant="dark"
                        onClick={() => setModal(true)}>
                    사진 모두보기</Button>
            </div>

            <HostImgModalDetail photo={photo}
                                show={modal} onHide={()=>setModal(false)} />

            <hr/>
        </>
    )
}

function HostImgItem({photo}) {

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