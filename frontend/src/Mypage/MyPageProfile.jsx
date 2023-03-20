import React, {useEffect, useRef, useState} from "react";
import {storage} from "../firebase/firebase2";
import {realhostIdUrl} from "../lodging_reg/Reducers/RealHostIdReducer";
import axios from "axios";
import Swal from "sweetalert2";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Auth} from "../Auth/Auth";

function MyPageProfile() {
    // const [img, setImg] = useState("https://cdn-icons-png.flaticon.com/512/3177/3177440.png")
    const imageInput = useRef();
    //서버 올리기 전
    const [selectImage, setSelectImage] = useState('');
    //서버 올릴 때 사용
    const [profileImg, setProfileImg] = useState('');
    //서버에 올리고 난 뒤 db저장
    const [firebaseUrl, setFirebaseUrl] = useState('');

    //db에 저장되어있던 기존 이미지
    const [dbImage,setDbImage] = useState('');
    const auth = Auth();
    const userId = auth.userId;


    useEffect(()=>{
        axios.get('http://localhost:8080/selectProfile',{
            params:{userId : userId}
        })
            .then((req)=>{
                // console.log(req)
                // console.log("프로필 가져오기 성공")
                setDbImage(req);
            })
            .catch((err)=>{
                console.log(err)
            })
    },[userId])

    // console.log('가져온 이미지 데이터 확인')
    // console.log(dbImage);



    const onClickImageUpload = () => {
        imageInput.current.click();
    }

    const handleImage = (event) => {
        setSelectImage(URL.createObjectURL(event.target.files[0]));
        setProfileImg(event.target.files[0]);
    }
    console.log("serverHostIdImage");
    console.log(profileImg);

    const navigate = useNavigate();
    const onSubmit = (event) => {
        event.preventDefault();
        const now = new Date();
        let year = (now.getFullYear()).toString();
        // 년 두 글자
        let removeYear = year.slice(2, 4);
        let month = (now.getMonth() + 1).toString();

        // 월이 10이하일 경우 앞에 0을 붙인다
        const newMonth = (month < 10) ? 0 + month : month

        let day = (now.getDate()).toString();
        const newDay = (day < 10) ? 0 + day : day

        //년월일 6자리 글자
        let dayday = removeYear + newMonth + newDay;


        //랜덤 숫자 11자리(예약번호용)
        const random = [];

        for (let i = 0; i < 11; i++) {
            const randomNum = Math.floor(Math.random() * 10);
            random.push(randomNum)
        }

        const dayPlusRandom = dayday + random;
        // 이미지 이름=> 날짜6자리 + 랜덤 숫자 11자리
        const imgName = dayPlusRandom.split(',').join("");
        // console.log(imgName);


        // 업로드 처리
        console.log("업로드 처리");
        const storageRef = storage.ref("BearBnB/profile/"); //어떤 폴더 아래에 넣을지 설정
        const imagesRef = storageRef.child(imgName + profileImg.name); //파일명

        console.log("파일을 업로드하는 행위");
        const upLoadTask = imagesRef.put(profileImg);

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
                        // console.log("File available at", downloadURL);
                        setFirebaseUrl(downloadURL);
                        // console.log('업로드 성공');
                        // console.log('url 데이터 이동성공');
                        // console.log(firebaseUrl);

                        //    axios 통신
                        axios.post('http://localhost:8080/insertProfile', null,
                            {
                                params: {
                                    userId: userId,
                                    profileImg: downloadURL,
                                }
                            })

                            .then((req) => {
                                console.log("사진 업로드 후 통신 성공")
                                console.log(req)
                                Swal.fire({
                                    icon: 'success',
                                    title: '프로필이 저장되었습니다',
                                    showConfirmButton: false,
                                    timer: 1500
                                }).then(() => {
                                    // setShow(false);
                                    // console.log('프로필 통신 성공')
                                })
                                navigate(-1);

                            })
                            .catch((error) => {
                                // console.log("사진 업로드 후 통신 에러")
                                console.log(error)
                            })
                    }
                )
            })
    }


    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col'}>
                    <div className={'col-6'}>
                        <input type={'file'} style={{display: "none"}} ref={imageInput} accept="image/*"
                               onChange={handleImage}/>
                    </div>
                </div>
            </div>
            {/*src={idImageUrl.length<=0 ? '/concept/plusIcon.png' : idImageUrl}*/}
            <div className={"row"}>
                <div className={'col-10'}>
                    <div style={{textAlign: 'center'}}>
                        <img
                            src={profileImg.length < 1 ? dbImage.data : selectImage}
                            style={{borderRadius: "70%", width: "300px", height:"300px",marginTop: "90px"}}/>
                    </div>
                    <div style={{textAlign: 'center', marginTop: "30px"}}>
                        <button className={'btn btn-outline-primary'} onClick={onClickImageUpload}>프로필 선택</button>
                    </div>
                    <div style={{textAlign: 'center', marginTop: "30px"}}>
                        <button className={'btn btn-outline-primary'} onClick={onSubmit}>프로필 저장하기</button>
                    </div>
                </div>

                <div className={'col-2'}>
                    {/*<button>이미지 선택</button>*/}
                    {/*<button>저장</button>*/}
                </div>
            </div>
        </div>
    )

}


export default MyPageProfile;
