import React, {useState, useEffect, useRef} from "react";
import { storage } from "./firebase2";
import DropzoneBasic from "./DropzoneBasic";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {hostIdUrl} from "../lodging_reg/Reducers/HostIdReducer";
import {lodgingImgs} from "../lodging_reg/Reducers/LodgingImgReducer";
import {Link, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

const UploadTest = () => {

    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const category = useSelector((state) => state.lodgingCategory.value);
    const lodgingNum = useSelector((state) => state.lodgingNum.value);
    console.log("uploadtest category");
    console.log(category);

    console.log('lodgingNum')
    console.log(lodgingNum.num);

    // console.log("lodgingNum");
    // console.log(lodgingNum);
    const imageInput = useRef();
    const onCickImageUpload = () => {
        imageInput.current.click();
    };

    const [image, setImage] = useState([]);
    const [imageUrl, setImageUrl] = useState([]);
    const [error, setError] = useState("");
    const [beforeImageUrl, setBeforeImageUrl] = useState([]);
    const dispatch = useDispatch();
    const lodgingRealName = useSelector((state) => state.lodgingRealName.value);
    // console.log('lodginNum')
    // console.log(lodgingNum);


    let imageUrls = [];

    useEffect(() => {
        console.log('useEffect 사용')
        console.log('useEffect안의 imageUrl')
        console.log(imageUrl);

        // if(imageUrl.length>=5){
        //     dispatch(lodgingImgs({url:"ㄴㄴ"}))
        //     console.log('dispatch이동성공')
        // }

    },)

    const styles = {
        footer : {
            position : "fixed",
            zIndex : 1,
            backgroundColor : "white",
            left :0,
            right : 0,
            bottom : 0,
            height : "5rem",
            marginTop:"900px"

        },
    }


    const handleImage = (event) => {
        let images = [];
        let beforeImages = [];

        for (let i = 0; i < event.target.files.length; i++) {
            images.push(event.target.files[i]);
            // setBeforeImageUrl(URL.createObjectURL(event.target.files[i]));

            beforeImages.push(URL.createObjectURL(event.target.files[i]));

            // beforeImages.push(window.URL.createObjectURL(event.target.files[i]));
        }
        setImage(images);

        setBeforeImageUrl(beforeImages);
    };

    // console.log(beforeImageUrl);//업로드 전 사진 url 확인

    console.log("image확인")
    console.log(image);

    const onSubmit = (event) => {
        event.preventDefault();
        // setError("");
        if (image.length <= 4) {
            alert('5장 이상 선택해주세요')
            // setError("파일이 선택되지 않았습니다");
            return;
        }

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
            const storageRef = storage.ref("BearBnB/img");
            const imagesRef = storageRef.child(imgName + item.name);
            const uploadTask = imagesRef.put(item);
            uploadTask.on('state_changed', null, null, async () => {
                const url = await uploadTask.snapshot.ref.getDownloadURL();
                // console.log("url");
                // imageUrls.push(url)
                //현재 오류나는 코드
                // imageUrls.push(url);
                // console.log('map안의 url')
                // console.log(url[item])
                imageUrls.push({photo: url, deletedYn:'N',lodgingNum:lodgingNum.num})

                //선생님 코드 잠시 주석처리한다.
                // if (index == oriImage.length - 1) {
                //     setImageUrl(imageUrls);
                // }

                setImageUrl(imageUrls)//이 데이터를 db에 넣어야 한다.
            });
        });


        // dispatch(lodgingImgs({url:imageUrls}))
        console.log('데이터보내는 것 성공');
        console.log("imageUrl")
        console.log(imageUrl)

        console.log("파일을 업로드하는 행위");

        Swal.fire({
            icon: 'success',
            title: '이미지가 저장되었습니다.',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            setShow(false);
            // childValue('tab2');
        })
        //여기 남겨놔
        console.log("imageUrl")
        console.log(imageUrl)
        // dispatch(lodgingImgs({url:imageUrl}))
    }

    console.log("imageUrls")
    console.log(imageUrls)

    //    controller로 보내기
    const axiosData = () => axios({
        url: 'http://localhost:8080/ImageUrl',
        method: 'post',
        data: imageUrl,

    })

        .then(function (response) {
            // your action after success
            console.log('then확인')
            console.log(imageUrl[2])
            console.log('데이터보내는 것 성공');
            // dispatch(lodgingImgs({url:imageUrls}))
            // console.log('데이터 이동 성공')
        })
        .catch(function (error) {
            // your action on error success
            console.log('데이터 전송 실패');
        });

    // 업로드 전 이미지 미리보기 url 확인
    // console.log("beforeImageUrl");
    // console.log(beforeImageUrl);

    // 삭제 버튼을 누르면 미리보기에서 삭제가 되고 스토리지에 업로드도 되지 않는다.
    const handleDeleteImage = (id) => {
        setBeforeImageUrl(beforeImageUrl.filter((_, index) => index !== id));
        setImage(image.filter((_, index) => index !== id));
    };

    const goNext = ()=>{
        axios
            .post('http://localhost:8080/insertUrl',  imageUrl, {
                headers: {
                    "Content-Type": `application/json`,
                },
            })
            .then((res) => {
                console.log(res);
            });
    }

    // 일단 가져온 데이터
    // console.log(lodgingImg.url);
    //
    // const lod = [...lodgingImg.url];
    // console.log("lod")
    // console.log(lod)

    // let final = [];
    // const filter = lod.map(data=>({
    //     ...data, lodgingNum:lodgingNum
    // }))
    // final=[...filter];
    // console.log("final");
    // console.log(final);

    return (
        <div>

            <div>
                <img width="400px" src='/concept/imagePlus.png' alt="uploaded" onClick={onCickImageUpload}
                     style={{"width": "50px", marginTop: "-100px", marginLeft: "700px"}}/>
                <button onClick={onSubmit} className={'btn btn-primary'} style={{marginTop:"-100px", marginLeft:"20px"}}>save</button>
            </div>

            {error && <div variant="danger">{error}</div>}
            <form onSubmit={onSubmit}>
                <input type="file" onChange={handleImage} style={{display: "none"}} ref={imageInput} multiple/>
                {/*<button onClick={onSubmit}>저장하기</button>*/}
            </form>
            {/*업로드 전 이미지*/}


            {/*<img src={beforeImageUrl}/>*/}
            {/*<p>{beforeImageUrl}</p>*/}

            {/*업로드 전 이미지 보여주기 블로그에서 보고옴*/}
            <div className={'container'}>
                <dic className={'row'}>
                    {beforeImageUrl.map((beforeImageUrl, id) => (
                        <div className='col my-auto mt-5' key={id}>
                            <img src={beforeImageUrl} style={{width: "400px" , borderRadius:"10px", boxShadow:"2px 3px 5px 0px"}}/>
                            <button className={'btn btn-primary ms-3'} onClick={() => handleDeleteImage(id)}>X</button>
                        </div>
                    ))}
                </dic>
            </div>
            {/*<button onClick={goNext}>다음페이지로</button>*/}

            {/*{imageUrl && (*/}
            {/*    <div>*/}
            {/*        <img width="400px" src={imageUrl}  />*/}
            {/*    </div>*/}
            {/*)}*/}

            {/*<Link to = {"/lodgingName"}><button className={"btn btn-primary btn-lg margin"} style={{marginLeft:"1000px", marginTop:"800px"}}>다음</button></Link>*/}
            <footer style={styles.footer}>
                <Link to ={"/reg/lodgingCategorySelect"}><button className={"btn btn-white position-absolute start-0 bottom-0"} style={{marginBottom:"70px", marginLeft:"120px", width:"200px", fontSize:"25px", padding:"8px", }} >이전</button></Link>
                <Link to = {"/reg/lodgingName"}><button className={"btn btn-primary position-absolute end-0 bottom-0"} style={{marginBottom:"70px", marginRight:"120px", width:"200px", fontSize:"25px", padding:"8px", }} onClick={goNext}>다음</button></Link>
            </footer>
        </div>

    );
};


export default UploadTest;