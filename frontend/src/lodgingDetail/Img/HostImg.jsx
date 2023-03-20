import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import '../lodgingDetail.css';
import HostImgModalDetail from "./HostImgModalDetail";
import axios from "axios";

function HostImg(props) {

    const [image, setImage] = useState('');
    const idx = props.idx;

    // 숙소상세페이지 이미지 불러오기
    const timer = () => {
        setTimeout(() => {
            axios.put('/lodgingDetailImage',null,{params: {idx: idx}})
                .then((req)=>{
                    // console.log('숙소상세페이지 이미지 통신 성공')
                    // console.log(req);
                    setImage(req);
                })
                .catch((error)=>{
                    console.log('숙소상세페이지 이미지 통신 오류')
                    console.log(error)
                })
        },100);
    }

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (props.check == "done") {
            timer();
            return () => clearTimeout(timer);
            setIsLoaded(true);
        }
    },[props.check]);

    useEffect(()=>{
        const timer = setTimeout(() => {
            setIsLoaded(true);
        },750);
        return () => clearTimeout(timer);
    }, []);

    const [modal, setModal] = useState(false);

    const imageList = image.data;

    // console.log(imageList);

    return isLoaded ? (
        <>
            <div className={'containerGrid'}>
                {/*화면 출력 확인*/}
                <img src={imageList[0].photo} className={'img1'} alt={'image'}/>
                <img src={imageList[1].photo} className={'img2'}/>
                <img src={imageList[2].photo} className={'img3'}/>
                <img src={imageList[3].photo} className={'img4'}/>
                <img src={imageList[4].photo} className={'img5'}/>
                <Button className={'HouseImgBtn'} variant="dark"
                        onClick={() => setModal(true)}>
                    사진 모두보기</Button>
            </div>

            <hr/>

        </>
    ) : <></>
}


export default HostImg;