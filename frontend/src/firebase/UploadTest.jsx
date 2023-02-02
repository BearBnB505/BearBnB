import React, { useState, useEffect } from "react";
import { storage } from "./firebase2";
import DropzoneBasic from "./DropzoneBasic";
import axios from "axios";

const UploadTest = () => {
    const [image, setImage] = useState([]);
    const [imageUrl, setImageUrl] = useState([]);
    const [error, setError] = useState("");
    const [beforeImageUrl, setBeforeImageUrl] = useState([]);

    let imageUrls = [];

    useEffect(() => {
        console.log('useEffect 사용')
        console.log(imageUrl);
    })

    const deleteFileImage = () =>{
        URL.revokeObjectURL(image);
        setImage("");
    };


    const handleImage = (event) => {
        let images = [];

        for(let i=0; i<event.target.files.length; i++){
            images.push(event.target.files[i]);
            setBeforeImageUrl(URL.createObjectURL(event.target.files[i]));
        }
        // console.log('images')
        // console.log(images);
        // const image = event.target.files[0];
        // image[]= event.target.files;
        // const image = new Array();
        // for(let i=0; i<event.target.files; i++){
        //     document.write("[" + i + "] : " + target.files[i] + "<br>");
        // }

        // const images = image.map((file,i)=>(
        //     setImage(image)
        // ))
        setImage(images);
    };

    console.log("image확인")
    console.log(image);

    const onSubmit = (event) => {
        event.preventDefault();
        // setError("");
        if (image.length<=4) {
            alert('5장 이상 선택해주세요')
            setError("파일이 선택되지 않았습니다");
            return;
        }
        // 업로드 처리
        // const storageRef = storage.ref("BearBnB/");
        // const imagesRef = storageRef.child(image[0].name);
        // // const upLoadTask = imagesRef.put(image);
        // imagesRef.put(image[0]).then((snapshot) => {
        //     console.log("업로드 테스트");
        // })

        // for (let i = 0; i < image.length; i++) {
        //     const storageRef = storage.ref("BearBnB/");
        //     const imagesRef = storageRef.child(image[i].name);
        //     const uploadTask = imagesRef.put(image[i]);
        //     const ttt = test(uploadTask);
        //
        //     console.log(ttt);
        //
        //     // uploadTask.on('state_changed', null, null, async () => {
        //     //     const url = await uploadTask.snapshot.ref.getDownloadURL();
        //     //     console.log('uploadTask : ')
        //     //     console.log(url);
        //     //     imageUrlList.push(url);
        //     // });
        // }

        //이미지에 랜덤 이름 부여하기
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

        image.map((item, index, oriImage) => {
            const storageRef = storage.ref("BearBnB/");
            const imagesRef = storageRef.child(imgName+item.name);
            const uploadTask = imagesRef.put(item);
            uploadTask.on('state_changed', null, null, async () => {
                const url = await uploadTask.snapshot.ref.getDownloadURL();
                console.log(url);
                imageUrls.push(url);

                //선생님 코드 잠시 주석처리한다.
                // if (index == oriImage.length - 1) {
                //     setImageUrl(imageUrls);
                // }

                setImageUrl(imageUrls)

            });
        });

        console.log("파일을 업로드하는 행위");
        alert('저장되었습니다.')
        }
        
    //    controller로 보내기
    const axiosData = ()=> axios({
        url: 'http://localhost:8080/lodgingImageUrl',
        method: 'post',
        data: imageUrl,

    })

        .then(function (response) {
            // your action after success
            console.log(imageUrl[2])
            console.log('데이터보내는 것 성공');
        })
        .catch(function (error) {
            // your action on error success
            console.log('데이터 전송 실패');
        });


    return (
        <div>
            <div>
                {/*<img width="400px" src={} alt="uploaded" />*/}
            </div>

            {error && <div variant="danger">{error}</div>}
            <form onSubmit={onSubmit}>
                <input type="file" onChange={handleImage} multiple />
                <button onClick={onSubmit}>저장하기</button>
                <button onClick={axiosData}>axios보내기</button>
                {/*<button onClick={deleteFileImage}>삭제하기</button>*/}
            </form>
            {/*업로드 전 이미지*/}


            <img src={beforeImageUrl}/>
            {imageUrl && (
                <div>
                    <img width="400px" src={imageUrl}  />
                </div>
            )}
        </div>
    );
};

export default UploadTest;