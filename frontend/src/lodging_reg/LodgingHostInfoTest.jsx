// import React from "react";
//
// function LodgingHostInfoTest(){
//     return(
//         <div>
//             <h2>호스트 테스트페이지</h2>
//         </div>
//         )
// }
// export default LodgingHostInfoTest;

// import React, {useState} from "react";
// import {Link} from "react-router-dom";
// import {Button, Pressable} from "react-native";
//
//
//
// const styles = {
//     font : {
//         display: "block",
//         textAlign : "center",
//         fontSize : '50px',
//         marginTop : "100px"
//
//     },
//     img :{
//         width : "100px",
//         height : "100px"
//     },
//     con : {
//         textAlign : "center",
//
//     },
//     button :{
//         width : "100px"
//     }
//
// }
//
// function LodgingBedSelect(){
//
//     const [bedSelect, setBedSelect] = useState[false,false,false,false,false];
//     const bedCategory =['싱글', '슈퍼싱글', '더블', '퀸사이즈', '킹사이즈'];
//
//
//     const getButton = (id) => {
//         return (
//
//             <div className={"container"}>
//
//                 <Pressable
//                     style={[
//                         {backgroundColor: setBedSelect[id] ? 'gray' : 'white'},
//                         // {width : "180px"},
//                         // {border : "1px solid black"},
//                         // {borderRadius : "20px"}
//                     ]}
//                     onPress={() => {
//                         setBedSelect([
//                             ...bedSelect.slice(0, id),
//                             !bedSelect[id],
//                             ...bedSelect.slice(id + 1),
//                         ]);
//                     }}>
//                     <div className={'container'}>
//                         <div className={'row'}>
//                             <div className={'col'}>
//                                 <button>{bedCategory[id]}</button>
//                             </div>
//                         </div>
//                     </div>
//
//                 </Pressable>
//
//             </div>
//
//         );
//     };
//
//
//     return(
//         <div className = "container">
//             <h2>테스트</h2>
//             <div className="row">
//                 {getButton(0)}
//
//                 <div>
//                     <Link to ={"/lodgingBasicInfo"}><button className={"btn btn-light position-absolute start-0 bottom-0 ms-5 mb-3"} >이전</button></Link>
//                     <Link to = {"/lodgingSecondWelcome"}><button className={"btn btn-primary position-absolute end-0 bottom-0 me-5 mb-3"}>다음</button></Link>
//                 </div>
//             {/*</div>*/}
//         </div>
//         </div>
//     )
// }
// export default LodgingBedSelect;


import React, {useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';
import {Link} from "react-router-dom";

const LodgingHostInfoTest = () => {

    const styles = {
        footer : {
            position : "fixed",
            zIndex : 1,
            backgroundColor : "white",
            left :0,
            right : 0,
            bottom : 0,
            height : "5rem",
        },
        font : {
            textAlign : "left",
            display : "block",
            margin : "auto",
            width: "100%",
            marginTop : "100px"
        },
        img : {
            textAlign : "center",
            width : "150px",
        }
    }

    const [isSelect, setSelect] = useState([false, false, false, false, false,false, false, false, false, false]);
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

    const getButton = (id) => {
        return (
            <div className={"container"}>
                <Pressable
                    style={[
                        {backgroundColor: isSelect[id] ? 'pink' : 'white'},
                        {width : "200px"},
                        {borderRadius : "20px"},

                    ]}
                    onPress={() => {
                        setSelect([
                            ...isSelect.slice(0, id),
                            !isSelect[id],
                            ...isSelect.slice(id + 1),
                        ]);
                    }}>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col'}>
                                <img src={imgSrc[id].src} className={"mt-4 ms-3"} style={styles.img}/>
                                <p style={{textAlign : "center"}} className={"mt-3 fw-bold"}>{imgSrc[id].name}</p>
                            </div>
                        </div>
                    </div>

                </Pressable>

            </div>

        );
    };

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div style={styles.font} className={"p-3"}>
                    <h3 className={"fw-bold"} style={{fontSize :"35px"}}>숙소 편의시설 정보를 추가하세요</h3>
                    <p className={" fs-5 mt-4"} style={{color:"gray"}}>여기에 추가하려는 편의시설이 보이지 않더라도 걱정하지 마세요! 숙소를 등록한 후에 편의시설을 추가할 수 있습니다.</p>
                </div>
                <div className={"row"}>
                    <p className={"mt-5 p-4"} style={{fontSize : "20px", fontWeight : "bolder"}}>어떤 서비스를 제공하나요?</p>
                    {/*<img src='/concept/language/spain.png'/>*/}
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
                </div>
                <footer style={styles.footer} className={"mt-5"}>
                    <Link to ={"/lodgingBedSelect"}><button className={"btn btn-light position-absolute start-0 bottom-0 ms-5 mb-3"} >이전</button></Link>
                    <Link to = {"/lodgingImg"}><button className={"btn btn-primary position-absolute end-0 bottom-0 me-5 mb-3"}>다음</button></Link>
                </footer>
            </div>

        </div>
    );
};

export default LodgingHostInfoTest;