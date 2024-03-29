import React from "react";
import {Link, useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {hostIdUrl} from "./Reducers/HostIdReducer";
import axios from "axios";
import Swal from "sweetalert2";
import {Auth} from "../Auth/Auth";


function LodgingFinal(){

    // const idImageUrl = useSelector((state)=>state.hostIdUrl.value);
    // const userId = useSelector((state)=>state.hostIdUrl.value); //
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
    const chooseDate = useSelector((state)=>state.chooseDate.value);
    const locationDetail = useSelector((state) => state.locationDetail.value)
    const map = useSelector((state)=>state.map.value);
    //숙소이미지
    const lodgingImg = useSelector((state)=>state.lodgingImg.value);
    const navigate = useNavigate();
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

    // console.log("lodgingImg.url");
    // console.log(lodgingImg.url);

    const lod = [...lodgingImg.url];
    // console.log("lod")
    // console.log(lod)

    let final = [];
    const filter = lod.map(data=>({
        ...data, lodgingNum:lodgingNum
    }))
    final=[...filter];
    // console.log("final");
    // console.log(final);
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
    // console.log("숙소 디테일주소")
    // console.log(locationDetail.nation);
    // console.log(locationDetail.zipCode);
    // console.log(locationDetail.addr1);
    // console.log(locationDetail.addr2);

    const auth = Auth();
    // console.log("auth.userId: " + auth.userId);
    const userId = auth.userId;

    const data = {
                userId : userId,
                lodgingNum: lodgingNum.num,
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
                zipCode : locationDetail.zipCode,
                nation : locationDetail.nation,
                address1 : map.address1,
                address2 : locationDetail.addr2,
                checkInDt : chooseDate.startDate,
                checkOutDt : chooseDate.endDate,
                latitude : map.latitude,
                longitude : map.longitude

    }

    const onclickButton = () => {

        // const list =[{a:'1',b:'2',c:'3'},{d:"4",e:"5",f:"6"}];
        // axios({
        //     url: 'http://localhost:8080/insertLodgingTable',
        //     method: 'post',
        //     data: {
        //         // photo : final,
        //         // category : category.category,
        //
        //         lodgingNum: lodgingNum,
        //         certifyImg: hostId.idUrl,
        //         lodgingName: lodgingRealName.name,
        //         introLodging:lodgingName.lodgingIntro,
        //         lodgingConcept : concept.concept,
        //         language : hostInfo.language,
        //         cost : cost.cost,
        //         peopleNum : basicInfo.guest,
        //         bedroomNum : basicInfo.bedroom,
        //         bedNum : basicInfo.bed,
        //         bedSize : bedSelect.bedSelects,
        //         bathroomNum : basicInfo.bathroom,
        //         introHost:hostInfo.hostIntro,
        //
        //     }
        // })
        //     .then(function (response) {
        //         console.log(response)
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

        axios
            .post('http://localhost:8080/insertLodgingTable',  data, {
                // headers: {
                //     "Content-Type": `application/json`,
                // },
            })
            .then((res) => {
                // console.log(res);
                Swal.fire({
                    icon: 'success',
                    title: '숙소등록이 완료되었습니다.',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    //main 페이지로 이동
                    navigate("/")
                })
            });
    }

        // console.log('숙소이름')
        // console.log(lodgingRealName.name)


        // console.log('숙소설명')
        // console.log(lodgingName.lodgingIntro)


    return(
        <div style = {styles.body}>
            <div className={'container'}>
            <div  className={'row'}>
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
                <Link to = {"#"}><button className={"btn btn-danger position-absolute end-0 bottom-0"} style={{marginBottom:"70px", marginRight:"120px", width:"200px", fontSize:"25px", padding:"8px", }} onClick={onclickButton}>완료하기</button></Link>
            </footer>
        </div>
    )

}
export default LodgingFinal;