import React, {useRef} from "react";
import {Link} from "react-router-dom";
import "../dropzone/Dropzone"
import UploadTest from "../firebase/UploadTest";

function LodgingImg(){

    const imageInput = useRef();
    const onCickImageUpload = () => {
        imageInput.current.click();
    };

    const styles = {
        font : {
            fontSize : "27px",
            fontWeight : "bold",
            marginTop : "100px"
        }
    }

    return(
        <div className={"container"}>
            <div className="row justify-content-around" style={{marginLeft : "150px"}}>
                <div className="col-5">
                    <p style={styles.font} className={"col mx-auto"}>5장 이상의 사진을 선택하세요</p>
                    <p style={{color : "gray" ,fontSize : "20px"}}>저장 전 사진을 확인해주세요</p>
                </div>
                <div className="col-4">
                    {/*<img src ='/concept/imagePlus.png' style={{"width" : "50px", marginTop : "100px"}} onClick={onCickImageUpload}/>*/}
                </div>
                <div>
                    <UploadTest/>
                </div>
                {/*<Posts/>*/}
            </div>
            <footer>
                <Link to ={"/lodgingCategorySelect"}><button className={"btn btn-light position-absolute start-0 bottom-0 ms-5 mb-3"} >이전</button></Link>
                <Link to = {"/lodgingName"}><button className={"btn btn-primary position-absolute end-0 bottom-0 me-5 mb-3"}>다음</button></Link>
            </footer>
        </div>
    )

}
export default LodgingImg;