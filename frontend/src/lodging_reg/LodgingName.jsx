import React, {useState} from "react";
import {Link} from "react-router-dom";
import * as PropTypes from "prop-types";
import {hostIdUrl} from "./Reducers/HostIdReducer";
import {useDispatch} from "react-redux";
import {lodgingNames} from "./Reducers/LodgingNameReducer";

function Input(props) {
    return null;
}

Input.propTypes = {
    onChange: PropTypes.any,
    maxLength: PropTypes.string
};

function LodgingName(){

    const [inputCount, setInputCount] = useState(0);
    const [lodgingName, setLodgingName] = useState('');
    const dispatch = useDispatch();
    const onInputHandler = (e) => {
        setInputCount(e.target.value.length);
        setLodgingName(e.target.value);
    };
    console.log(lodgingName);


    return(
        <div className={"container"}>
            <div className={"row"}>
                <div className={'col-7 mx-auto p-5'} style={{marginTop : "200px"}}>
                    <p style={{fontSize : "35px", fontWeight:"bold"}}>이제 숙소에 이름을 지어주세요</p>
                    <p style={{fontSize : "20px", color:"gray"}}>숙소 이름은 짧을수록 효과적입니다. 나중에 언제든지 변경할 수 있으니,<br /> 너무 걱정하지 마세요.</p>
                    <textarea className={'col-12 mx-auto p-4'} style={{height:"200px", borderRadius:"10px", fontSize :"20px"}} onChange={onInputHandler} maxLength="200" />
                    <p>
                        <span style={{fontWeight:"bold", color: "gray"}}>{inputCount}</span>
                        <span style={{fontWeight:"bold", color: "gray"}}>/200</span>
                    </p>
                </div>
                <footer>
                    <Link to ={"/lodgingImg"}><button className={"btn btn-light position-absolute start-0 bottom-0 ms-5 mb-3"} >이전</button></Link>
                    <Link to = {"/lodgingIntro"}><button className={"btn btn-primary position-absolute end-0 bottom-0 me-5 mb-3"} onClick={()=>{
                        dispatch(lodgingNames({lodgingName:lodgingName}))}}>다음</button></Link>
                </footer>
            </div>
        </div>
    )

}
export default LodgingName;