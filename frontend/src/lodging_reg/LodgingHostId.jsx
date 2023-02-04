import React, {useRef, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {hostIdUrl} from "./HostIdReducer";
import Profile from "./redux_test/Profile";
import LodgingFinal from "./LodgingFinal";

function LodgingHostId(){

    const dispatch = useDispatch();
    const imageInput = useRef();
    const [idImageUrl, setIdImageUrl] = useState('');

    const onClickImageUpload = () => {
        imageInput.current.click();

    }

    const handleImage = (event) => {
        setIdImageUrl(URL.createObjectURL(event.target.files[0]));
    }

    const initialState = {
        idImageUrl : idImageUrl
    }


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
                    {/*<img src={require(`../images`)}/>*/}
                </div>
                {/*<Profile/>*/}
                {/*<LodgingFinal/>*/}
            </div>
            <footer style={styles.footer} className={"mt-5"}>
                <button onClick={()=>{
                    dispatch(hostIdUrl({idUrl:"ㅇㅇ"}))}}>테스트 버튼</button>
                <Link to ={"#"}><button className={"btn btn-light position-absolute start-0 bottom-0 ms-5 mb-3"} >이전</button></Link>
                <Link to = {"/lodgingWelcome"}><button className={"btn btn-primary position-absolute end-0 bottom-0 me-5 mb-3"} onClick={()=>{
                    dispatch(hostIdUrl({idUrl:idImageUrl}))
                }}>다음</button></Link>
            </footer>
        </div>
    )

}
export default LodgingHostId;
