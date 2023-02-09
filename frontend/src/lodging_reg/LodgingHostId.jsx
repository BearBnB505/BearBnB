import React, {useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {hostIdUrl} from "./Reducers/HostIdReducer";
import { storage } from "../firebase/firebase2";
import {login} from "./redux_test/user";
import {lodgingRealNames} from "./Reducers/LodgingRealNameReducer";
import {realhostIdUrl} from "./Reducers/RealHostIdReducer";

function LodgingHostId(){

    const dispatch = useDispatch();
    const imageInput = useRef();
    const [idImageUrl, setIdImageUrl] = useState('');
    const [serverHostIdImage, setServerHostIdImage] = useState('');
    const [firebaseUrl, setFirebaseUrl] = useState('');
    const navigate = useNavigate();

    const onClickImageUpload = () => {
        imageInput.current.click();

    }

    const handleImage = (event) => {
        setIdImageUrl(URL.createObjectURL(event.target.files[0]));
        setServerHostIdImage(event.target.files[0]);
    }
    console.log("serverHostIdImage");
    console.log(serverHostIdImage);

    const onSubmit = (event) => {
        event.preventDefault();
        if (serverHostIdImage === "") {
            alert('사진을 첨부해주세요')
            return;
        }

        const now = new Date();
        let year = (now.getFullYear()).toString();
        // 년 두 글자
        let removeYear = year.slice(2, 4);
        let month = (now.getMonth() + 1).toString();

        // 월이 10이하일 경우 앞에 0을 붙인다
        const newMonth = (month < 10) ? 0 + month : month

        let day = (now.getDate()).toString();

        //년월일 6자리 글자
        let dayday = removeYear + newMonth + day;


        //랜덤 숫자 11자리(예약번호용)
        const random = [];

        for (let i = 0; i < 11; i++) {
            const randomNum = Math.floor(Math.random() * 10);
            random.push(randomNum)
        }

        const dayPlusRandom = dayday + random;
        // 이미지 이름=> 날짜6자리 + 랜덤 숫자 11자리
        const imgName = dayPlusRandom.split(',').join("");
        console.log(imgName);


        // 업로드 처리
        console.log("업로드 처리");
        const storageRef = storage.ref("BearBnB/"); //어떤 폴더 아래에 넣을지 설정
        const imagesRef = storageRef.child(imgName+serverHostIdImage.name); //파일명

        console.log("파일을 업로드하는 행위");
        const upLoadTask = imagesRef.put(serverHostIdImage);

        upLoadTask.on(
            "state_changed",
            (snapshot) => {
                console.log("snapshot", snapshot);
            },
            (error) => {
                console.log("err", error);
            },
            () => {
                upLoadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    console.log("File available at", downloadURL);
                    setFirebaseUrl(downloadURL);
                    console.log('업로드 성공');
                    dispatch(realhostIdUrl({idUrl:downloadURL}))
                    console.log('url 데이터 이동성공');
                    navigate("/lodgingWelcome");
                });


            }
        );


    };

    console.log("firebaseUrl");
    console.log(firebaseUrl);


    const styles = {
        imgBox : {
            boxShadow:" 5px 5px 10px gray",
            width : "400px",
            height : "300px",
            borderRadius : "25px",
            marginTop:"320px",
            marginLeft : "50px",
        }
    }
    return(
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-6'} style={{marginTop : "350px", marginLeft :"60px"}}>
                    <p style={{fontSize : "40px", fontWeight :"bold"}}>호스트 신분증 사진 업로드 하기</p>
                    <p style={{fontSize :"23px", color:"gray"}}>숙소를 등록하기 위해서는 신분증 사진 업로드가 필수입니다. 정부 발급 신분증을 제출해주세요. 사진이 선명하고 얼굴이 잘 보여야 합니다</p>
                </div>
                <div className={'col-5'} style ={idImageUrl.length<=0 ?
                    {boxShadow:" 5px 5px 10px gray",
                    width : "400px",
                    height : "300px",
                    borderRadius : "25px",
                    marginTop:"320px",
                    marginLeft : "50px",} : {}}>
                    <div className={'container'}>
                        <input type="file" style={{display:"none"}} ref={imageInput} accept="image/*" onChange={handleImage}/>
                        <img onClick={onClickImageUpload}
                                src={idImageUrl.length<=0 ? '/concept/plusIcon.png' : idImageUrl}
                        style={idImageUrl.length<=0 ? {width:"50px", display: 'block',margin:'auto', marginTop :"120px"}:{width:"400px", height:'250px', marginTop:"330px"}}/>
                                {/*style={{ width:"50px", display: 'block',margin:'auto', marginTop :"120px"}}/>*/}
                    </div>
                    {/*<button onClick={onSubmit}>서버 테스트</button>*/}
                    {/*<img src={require(`../images`)}/>*/}
                </div>
                {/*<Profile/>*/}
                {/*<LodgingFinal/>*/}
            </div>
            <footer style={styles.footer} className={"mt-5"}>
                <Link to = {"/reg/lodgingWelcome"}>
                    <button className={"btn btn-primary position-absolute end-0 bottom-0"}
                            style={{marginBottom:"40px", marginRight:"130px", width:"200px", fontSize:"20px"}} onClick={onSubmit}>다음</button></Link>
            </footer>
        </div>
    )

}
export default LodgingHostId;
