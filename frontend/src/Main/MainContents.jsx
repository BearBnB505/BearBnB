import React, {useState, Component, useRef, useEffect, useLayoutEffect} from "react";
import Slider from "react-slick";

import "./slick.css";
import "./slick-theme.css";
import axios from "axios";
import moment from "moment";

function MainContents(props) {
    // console.log('넘어온 숙소번호확인')
    // const [lodgingNum, setLodgingNum] = useState('');
    // const lodgingNumA = props.data.lodgingNum;
    // console.log("이미지" + lodgingNumA);
    const [imageList, setImageList] = useState([]);
    const [categories, setCategories] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const images = [];


    // 이미지 불러오는 통신
    useEffect(() => {
        let lodgingNumA = props.data.lodgingNum;
        console.log("useEffect 카테고리");
        axios.put('/mainImage', null, {params: {lodgingNum: lodgingNumA}})
            .then(async (req) => {
                try {
                    // console.log('메인 페이지 이미지 데이터')
                    // console.log(lodgingNumA);
                    setImageList(req);
                    setIsLoaded(true);

                } catch (err) {
                    console.log("통신 오류");
                }
            })
            .catch((err) => {
                console.log("통신 오류");
            })
    }, [props.category])

    // useLayoutEffect(() => {
    //     let lodgingNumA = props.data.lodgingNum;
    //     console.log("이미지" + lodgingNumA);
    //     axios.put('/mainImage', null, {params: {lodgingNum: lodgingNumA}})
    //         .then(async (req) => {
    //             try {
    //                 // console.log('메인 페이지 이미지 데이터')
    //                 // console.log(lodgingNumA);
    //                 setImageList(req);
    //                 setIsLoaded(true);
    //
    //             } catch (err) {
    //                 console.log("통신 오류");
    //             }
    //         })
    //         .catch((err) => {
    //             console.log("통신 오류");
    //         })
    //     lodgingNumA = '';
    // })

    // const timer = () => {
    //     setTimeout(()=>{
    //         // setCategories(props.category);
    //         // setLodgingNum(props.data.lodgingNum);
    //         // const lodgingNum = props.data.lodgingNum;
    //         axios.put('/mainImage', null, {params: {lodgingNum: lodgingNumA}})
    //             .then((req)=>{
    //                 console.log('메인 페이지 이미지 데이터')
    //                 // console.log(req);
    //                 console.log(lodgingNumA);
    //                 setImageList(req);
    //             })
    //             .catch((err)=>{
    //                 console.log(err);
    //             })
    //     },1000)
    // }

    // 메인페이지에서 글을 불러오면 상태가 done으로 바뀐다. 그 값이 바뀌면
    // 이미지 리스트를 불러오는 함수를 실행시킨다.
    // useEffect(()=>{
    //     // setCategories(props.category);
    //     console.log("이미지불러오기"+props.category);
    //     // setLodgingNum(props.data.lodgingNum);
    //     if(props.check==="done"){
    //         // timer();
    //         // return() => clearTimeout(timer);
    //         setIsLoaded(true);
    //     }
    //     // setLodgingNum('');
    // },[props.check, props.category]);


    // 이미지 리스트를 불러오면 화면에 띄운다
    // useEffect(()=>{
    //     const timer = setTimeout(()=>{
    //         setIsLoaded(true);
    //     },5000);
    //     // timer();
    //     return () => clearTimeout(timer);
    // },[props.category])


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



    return isLoaded ?  (
        <div style={{width: 250}} className={"contents"} id={"main-contents"}>
            <div className={"position-relative"} >
                <Slider {...settings}>
                    <div>
                        <img
                            className="d-block w-100"
                            src={imageList.data[0].photo}
                            alt="First slide"
                            style={{height: 250}}
                        />
                    </div>
                    <div>
                        <img
                            className="d-block w-100"
                            src={imageList.data[1].photo}
                            alt="Second slide"
                            style={{height: 250}}
                        />
                    </div>
                    <div>
                        <img
                            className="d-block w-100"
                            src={imageList.data[2].photo}
                            alt="Third slide"
                            style={{height: 250}}
                        />
                    </div>
                    <div>
                        <img
                            className="d-block w-100"
                            src={imageList.data[3].photo}
                            alt="Fourth slide"
                            style={{height: 250}}
                        />
                    </div>
                    <div>
                        <img
                            className="d-block w-100"
                            src={imageList.data[4].photo}
                            alt="Fifth slide"
                            style={{height: 250}}
                        />
                    </div>
                </Slider>
            </div>
            <div className={"text-start mt-2"}>
                <span><b>{props.data.lodgingName}</b></span><br/>
                <span><b>{props.data.address1}</b></span><br/>
                <span className={"text-muted"}>{props.data.lodgingConcept}</span><br/>
                <span className={"text-muted"}>{checkInDt} ~ {checkOutDt}</span><br/>
                <span><b>&#8361;{props.data.cost}</b> /박</span>
            </div>
        </div>
    ) : <></>;
}

export default MainContents;
