import React, {useState} from "react";
import {Link} from "react-router-dom";
import * as PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {lodgingNames} from "./Reducers/LodgingNameReducer";

function Input(props) {
    return null;
}

Input.propTypes = {
    onChange: PropTypes.any,
    maxLength: PropTypes.string
};

function LodgingIntro(){

    const [inputCount, setInputCount] = useState(0);
    const [intro, setIntro] = useState('');

    const onInputHandler = (e) => {
        setInputCount(e.target.value.length);
        setIntro(e.target.value);
    };

    const dispatch = useDispatch();
    console.log(intro);

    const styles={
        font:{
            margin:"auto",
            display:"block"
        }
    }
    const lodgingName = useSelector((state) => state.lodgingName.value)
    return(
        <div className={"container"}>
            <div className={"row"}>
                <div className={'col-7 mx-auto p-5'} style={{marginTop : "200px"}}>
                    {/*<p>숙소이름 : {lodgingName.lodgingName}</p>*/}
                    <p style={{fontSize : "35px", fontWeight:"bold"}}>숙소 설명 작성하기</p>
                    <p style={{fontSize : "20px", color:"gray"}}>숙소의 특징과 장점을 알려주세요.</p>
                    <textarea className={'col-12 mx-auto p-3'} style={{height:"300px", borderRadius:"10px", fontSize :"20px"}} onChange={onInputHandler} maxLength="3000" />
                    <p>
                        <span style={{fontWeight:"bold", color: "gray"}}>{inputCount}</span>
                        <span style={{fontWeight:"bold", color: "gray"}}>/3000</span>
                    </p>
                </div>
                <footer>
                    <Link to ={"/lodgingName"}><button className={"btn btn-light position-absolute start-0 bottom-0 ms-5 mb-3"} >이전</button></Link>
                    <Link to = {"/lodgingHostInfo"}><button className={"btn btn-primary position-absolute end-0 bottom-0 me-5 mb-3"} onClick={
                        dispatch(lodgingNames({lodgingIntro:intro}))
                    }>다음</button></Link>
                </footer>
            </div>
        </div>
    )

}
export default LodgingIntro;