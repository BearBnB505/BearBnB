import React, {useState} from "react";
import {Link} from "react-router-dom";
import * as PropTypes from "prop-types";
import {Pressable} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {lodgingNames} from "./Reducers/LodgingNameReducer";

import {hostInfos} from "./Reducers/HostInfoReducer";

function Input(props) {
    return null;
}

Input.propTypes = {
    onChange: PropTypes.any,
    maxLength: PropTypes.string
};

function LodgingHostInfo(){
    
    // 언어 선택
    const [selectLanguage, setSelectLanguage] = useState([false,false,false,false,false,false,false,false,false,false])
    const [chooseLanguage, setChooseLanguage] = useState([]);


    const imgSrc = [
        {
            name : '한국어',
            src : '/concept/language/korea.png'
        },
        {
            name : '영어',
            src : '/concept/language/uk.png'
        },
        {
            name : '스페인어',
            src : '/concept/language/spain.png'
        },
        {
            name : '중국어',
            src : '/concept/language/china.png'
        },
        {
            name : '힌디어',
            src : '/concept/language/india.png'
        },
        {
            name : '아랍어',
            src : '/concept/language/arab.png'
        },
        {
            name : '프랑스어',
            src : '/concept/language/france.png'
        },
        {
            name : '러시아어',
            src : '/concept/language/russia.png'
        },
        {
            name : '일본어',
            src : '/concept/language/japan.png'
        },
        {
            name: '인도네시아어',
            src : '/concept/language/indonesia.png'
        }
    ]

    // 글자 수 카운트
    const [inputCount, setInputCount] = useState(0);
    const [hostIntro, setHostIntro] = useState('');
    const lodgingIntro = useSelector((state) => state.lodgingName.value);
    const dispatch= useDispatch();
    const onInputHandler = (e) => {
        setInputCount(e.target.value.length);
        setHostIntro(e.target.value);
    };
    // console.log(hostIntro)

    const styles={
        font:{
            margin:"auto",
            display:"block"
        },
        footer :{
            position : "fixed",
            zIndex : 1,
            backgroundColor : "white",
            left :0,
            right : 0,
            bottom : 0,
            height : "5rem",
        },
        img : {
            textAlign : "center",
            width : "150px",
        }
    }
    const languages= new Array();
    const getButton = (id) => {

        return (

            <div className={"container"}>
                {/*<p>숙소설명 : {lodgingIntro.lodgingIntro}</p>*/}
                <Pressable
                    style={[
                        {backgroundColor: selectLanguage[id] ? 'pink' : 'white'},
                        {width : "200px"},
                        {borderRadius : "20px"}
                    ]}
                    onPress={() => {
                        setSelectLanguage([
                            ...selectLanguage.slice(0, id),
                            !selectLanguage[id],
                            ...selectLanguage.slice(id + 1),

                            // languages.push(imgSrc[id].name)

                            // languages.concat(imgSrc[id].name),
                            // console.log(languages),
                            console.log(imgSrc[id].name),
                            // languages.push(selectLanguage[id]!== true? imgSrc[id].name:''),
                            
                            setChooseLanguage(imgSrc[id].name),
                        ]);
                        // setChooseLanguage(selectLanguage[id]!== true? imgSrc[id].name:'')
                        //     console.log(chooseLanguage)
                        // setChooseLanguage(imgSrc[id].name)

                        //     languages.push(selectLanguage[id]!== true? imgSrc[id].name:'');
                    }}>


                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col'}>
                                <img src={imgSrc[id].src} className={"mt-4 ms-3"} style={styles.img}/>
                                <p style={{textAlign : "center", fontWeight : 'bold'}} className={"mt-2"}>{imgSrc[id].name}</p>
                            </div>
                        </div>
                    </div>
                </Pressable>
            </div>

        );
    };

    // setChooseLanguage(languages)
    // console.log('언어선택 확인')
    // console.log(languages)
    console.log("languages")
    console.log(languages)


    return(
        <div className={"container"}>
            <div className={"row"}>
                <div style={{"marginBottom" : "150px"}}>
                <div className={'mx-auto ms-5'} style={{marginTop : "80px"}}>
                    <p style={{fontSize : "35px", fontWeight:"bold"}}>호스트 소개하기</p>
                    <p style={{fontSize : "20px", color:"gray"}}>사용하는 언어를 선택하시고 소개를 작성해주세요</p>
                </div>
                    <div className={"row"}>
                        <div className={"col-2 mt-2"}>
                            {getButton(0)}
                        </div>
                        <div className={"col-2 mt-2"}>
                            {getButton(1)}
                        </div>
                        <div className={"col-2 mt-2"}>
                            {getButton(2)}
                        </div>
                        <div className={"col-2 mt-2"}>
                            {getButton(3)}
                        </div>
                        <div className={"col-2 mt-2"}>
                            {getButton(4)}
                        </div>
                        <div className={"col-2 mt-2"}>
                            {getButton(5)}
                        </div>
                        <div className={"col-2 mt-5"}>
                            {getButton(6)}
                        </div>
                        <div className={"col-2 mt-5"}>
                            {getButton(7)}
                        </div>
                        <div className={"col-2 mt-5"}>
                            {getButton(8)}
                        </div>
                        <div className={"col-2 mt-5"}>
                            {getButton(9)}
                        </div>
                        <div className={"col-2 ms-5"} >
                            <img src='/concept/language/earth.png' style={{width:"130px", marginTop : "75px"}}/>
                            <input type={'text'} style={{"marginTop" : '19px', width : "150px", textAlign : "center"}} placeholder={'기타'} onChange={(e)=>{setChooseLanguage(e.target.value)}}></input>
                        </div>
                    </div>
                    <textarea className={'col-12 mx-auto mt-5 p-4'} style={{height:"300px", borderRadius:"10px", fontSize :"20px"}} 
                                onChange={onInputHandler} maxLength="3000" placeholder={"소개를 해주세요"} />
                    <p>
                        <span style={{fontWeight:"bold", color: "gray"}}>{inputCount}</span>
                        <span style={{fontWeight:"bold", color: "gray"}}>/3000</span>
                    </p>
                </div>
                <footer style={styles.footer} className={"mt-5"}>
                    <Link to ={"/lodgingIntro"}><button className={"btn btn-light position-absolute start-0 bottom-0 ms-5 mb-3"} >이전</button></Link>
                    <Link to = {"/lodgingThirdWelcome"}><button className={"btn btn-primary position-absolute end-0 bottom-0 me-5 mb-3"}  onClick={()=>{
                        dispatch(hostInfos({language:chooseLanguage, hostIntro:hostIntro}))}}>다음</button></Link>
                </footer>
            </div>
        </div>
    )

}
export default LodgingHostInfo;