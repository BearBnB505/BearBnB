import React from "react";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {hostIdUrl} from "./Reducers/HostIdReducer";
import axios from "axios";


function LodgingFinal(){

    // const idImageUrl = useSelector((state)=>state.hostIdUrl.value);
    const userId = useSelector((state)=>state.hostIdUrl.value); //
    const lodgingNum = useSelector((state)=>state.lodgingNum.value); //
    const hostInfo = useSelector((state) => state.hostInfo.value);//언어와 호스트 소개
    const concept = useSelector((state) => state.lodgingConcept.value);//언어와 호스트 소개
    const basicInfo = useSelector((state) => state.lodgingBasicInfo.value);//언어와 호스트 소개
    const bedSelect = useSelector((state) => state.lodgingBedSelect.value);//언어와 호스트 소개
    const lodgingName = useSelector((state) => state.lodgingName.value);//언어와 호스트 소개
    const lodgingRealName = useSelector((state) => state.lodgingRealName.value);//언어와 호스트 소개
    const cost = useSelector((state) => state.lodgingCost.value);//언어와 호스트 소개
    const category = useSelector((state) => state.lodgingCategory.value);//언어와 호스트 소개
    const hostId = useSelector((state)=>state.realHostId.value);


    //숙소이미지
    const lodgingImg = useSelector((state)=>state.lodgingImg.value);
    // const lodgingNum = useSelector((state)=>state.lodgingImg.value);


    // 숙소번호
    //이미지에 랜덤 이름 부여하기
    // const now = new Date();
    // let year = (now.getFullYear()).toString();
    // // 년 두 글자
    // let removeYear = year.slice(2, 4);
    // let month = (now.getMonth() + 1).toString();
    //
    // // 월이 10이하일 경우 앞에 0을 붙인다
    // const newMonth = (month < 10) ? 0 + month : month
    //
    //
    // let day = (now.getDate()).toString();
    //
    // const newDay = (day<10)? 0 + day : day
    //
    // //년월일 6자리 글자
    // let dayday = removeYear + newMonth + newDay;
    //
    //
    // //랜덤 숫자 11자리(예약번호용)
    // const random = [];
    //
    // for (let i = 0; i < 10; i++) {
    //     const randomNum = Math.floor(Math.random() * 10);
    //     random.push(randomNum)
    // }
    //
    // const dayPlusRandom = dayday + random;
    // // 숙소번호=> 날짜6자리 + 랜덤 숫자 10자리
    // const lodgingNum = dayPlusRandom.split(',').join("");
    // console.log(lodgingNum);

    console.log("lodgingImg.url");
    console.log(lodgingImg.url);

    const lod = [...lodgingImg.url];
    console.log("lod")
    console.log(lod)

    let final = [];
    const filter = lod.map(data=>({
        ...data, lodgingNum:lodgingNum
    }))
    final=[...filter];
    console.log("final");
    console.log(final);
    // lod.lodgingNum = lodgingNum
    // console.log("lod");
    // console.log(lod);


    const styles ={
        body :{
            width :"100vw",
            height:"100vh",
            backgroundColor:"black",
            color : "white"
        },
        font :{
            position : 'absolute',
            top : "40%",
            left : "25%"
        },
    }


    // const lodgingImgUrl = [...lodgingImg.url]

    // const finalmap = ()=>{
    //     for(let i=0; i<lodgingImgUrl.length; i++){
    //         lodgingImgUrl.push({lodgingNum:lodgingNum})
    //     }
    // }
    //let 합칠것 = [...selectedStu.extraLesson];
    // 합칠것.push(newHomework.homeworkDate);


    // for(let i=0; i<=lodgingImgUrl.length; i++){
    //             lodgingImgUrl.push({lodgingNum:lodgingNum})
    // }

    // console.log("finalmap")
    // console.log(finalmap);

    const onclickButton = () => {

        const list =[{a:'1',b:'2',c:'3'},{d:"4",e:"5",f:"6"}];
        axios({
            url: 'http://localhost:8080/insertLodgingTable',
            method: 'post',
            data: {

                // lodgingNum : 1234,
                // array:list,

                lodgingNum: lodgingNum,
                certifyImg: hostId.idUrl,
                lodgingName: lodgingRealName.name,
                introLodging:lodgingName.lodgingIntro,
                lodgingConcept : concept.concept,
                language : hostInfo.language,
                cost : cost.cost,
                peopleNum : basicInfo.guest,
                bedroomNum : basicInfo.bedroom,
                bedNum : basicInfo.bed,
                bedSize : bedSelect.bedSelects,
                bathroomNum : basicInfo.bathroom,
                introHost:hostInfo.hostIntro,
                photo : final,
                category : category.category,


            }
        })
            .then(function a(response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

        console.log('숙소이름')
        console.log(lodgingRealName.name)


        console.log('숙소설명')
        console.log(lodgingName.lodgingIntro)


    return(
        <div style = {styles.body}>
            <div className={'container'}>
            <div  className={'row'}>
                {/*<p>숙소이름 : {lodgingRealName.name}</p>*/}
                <div className={'col-6'} style={styles.font}>
                    {/*<p style={{color: "white"}}> Name : {user.name} </p>*/}
                    <p style={{fontSize : "60px"}}>환영합니다</p>
                    <p style={{fontSize : '28px'}}>베어비앤비 호스트가 되신 것을 진심으로 환영합니다. 숙소 호스팅을
                        통해 게스트에게 놀라운 경험을 선사하는데 동참해주셔서 감사합니다</p>
                    <p style = {{fontSize : '20px', color : '#D0B8A8'}}>베어비앤비 설립자 일동</p>
                    {/*<img src={userId.idUrl}/>*/}
                </div>
            </div>
            </div>
            <footer>
                <Link to = {"#"}><button className={"btn btn-danger position-absolute end-0 bottom-0 me-5 mb-3"} onClick={onclickButton}>완료하기</button></Link>
            </footer>
        </div>
    )

}
export default LodgingFinal;