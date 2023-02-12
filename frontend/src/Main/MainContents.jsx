import React, {useState, Component, useRef, useEffect} from "react";
import Slider from "react-slick";

import "./slick.css";
import "./slick-theme.css";
import axios from "axios";
import moment from "moment";

function MainContents(props) {
    // console.log('메인컨텐츠 확인')
    // console.log(props.idx);
    const [image, setImage] = useState('');
    useEffect(()=>{
        axios.put('http://localhost:8080/lodgingDetailImage',null,{params: {idx:props.idx}})
            .then((req)=>{
                console.log('메인 페이지 이미지 데이터 확인')
                console.log(req);
                setImage(req);
            })
            .then((err)=>{
                console.log(err);
            })
    },[])

    // console.log('길이측정')
    // console.log(image.data.length);



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const keep = {
        width: 25,
        // opacity: .60
    };

    const checkInDt = moment(props.data.checkInDt).format('M월 D일');
    const checkOutDt = moment(props.data.checkOutDt).format('M월 D일');

    return (
        <div style={{width: 250}} className={"contents"} id={"main-contents"}>
            <div className={"position-relative"} >
                {/*<div className={"position-absolute top-0 end-0 me-2 mt-2"} style={{zIndex: 1}}>*/}
                {/*    <img src="/img/btnKeep.png" alt="" style={keep} onClick={''}/>*/}
                {/*</div>*/}
                <Slider {...settings}>

                    {
                        image.data.map((item) => {
                            return (

                                        <img src={item.photo} onError="this.style.display='none'" style={{borderRadius:"10px", height:"180px"}}/>

                            )
                        })
                    }

                    {/*{*/}
                    {/*    image.data.map((item)=>{*/}
                    {/*        <div>*/}
                    {/*        <img*/}
                    {/*            className="d-block w-100"*/}
                    {/*            src={item.photo} onError='../public/BearBnB_logo.png'*/}
                    {/*            style={{height: 250}}/>*/}
                    {/*        </div>*/}
                    {/*    })*/}
                    {/*}*/}



                    {/*{}*/}


                    {/*<div>*/}
                    {/*    <img*/}
                    {/*        className="d-block w-100"*/}
                    {/*        src="https://a0.muscache.com/im/pictures/c0dd551b-e328-4958-9209-9fa66ac47217.jpg?im_w=1200"*/}
                    {/*        // alt="First slide"*/}
                    {/*        style={{height: 250}}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <img*/}
                    {/*        className="d-block w-100"*/}
                    {/*        src="https://a0.muscache.com/im/pictures/03389803-26cf-4de3-bfc8-6dadeb41df40.jpg?im_w=1440"*/}
                    {/*        // alt="Second slide"*/}
                    {/*        style={{height: 250}}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <img*/}
                    {/*        className="d-block w-100"*/}
                    {/*        src="https://a0.muscache.com/im/pictures/a8d45b2e-8bbe-4e05-85fb-36cbce7e79cc.jpg?im_w=1440"*/}
                    {/*        // alt="Third slide"*/}
                    {/*        style={{height: 250}}*/}
                    {/*    />*/}
                    {/*    <img src="" alt=""/>*/}
                    {/*</div>*/}
                </Slider>
            </div>

            <div className={"text-start mt-2"}>
                <span><b>{props.data.lodgingName}</b></span><br/>
                <span><b>{props.data.addr}, 한국</b></span><br/>
                <span className={"text-muted"}>{props.data.lodgingConcept}</span><br/>
                <span className={"text-muted"}>{checkInDt} ~ {checkOutDt}</span><br/>
                <span><b>₩{props.data.cost}</b> /박</span>
            </div>
        </div>
    );
}

export default MainContents;
