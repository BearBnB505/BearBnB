import React, {useState, Component, useRef, useEffect} from "react";
import Slider from "react-slick";

import "./slick.css";
import "./slick-theme.css";
import axios from "axios";
import moment from "moment";

function MainContents(props) {

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
                    <div>
                        <img
                            className="d-block w-100"
                            src="https://a0.muscache.com/im/pictures/c0dd551b-e328-4958-9209-9fa66ac47217.jpg?im_w=1200"
                            // alt="First slide"
                            style={{height: 250}}
                        />
                    </div>
                    <div>
                        <img
                            className="d-block w-100"
                            src="https://a0.muscache.com/im/pictures/03389803-26cf-4de3-bfc8-6dadeb41df40.jpg?im_w=1440"
                            // alt="Second slide"
                            style={{height: 250}}
                        />
                    </div>
                    <div>
                        <img
                            className="d-block w-100"
                            src="https://a0.muscache.com/im/pictures/a8d45b2e-8bbe-4e05-85fb-36cbce7e79cc.jpg?im_w=1440"
                            // alt="Third slide"
                            style={{height: 250}}
                        />
                        <img src="" alt=""/>
                    </div>
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
