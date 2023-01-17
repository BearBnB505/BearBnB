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

const LodgingBedSelect = () => {
    const [isSelect, setSelect] = useState([false, false,false, false,false]);
    const imgSrc = [
        {
            name : '싱글',
        },
        {
            name : '슈퍼싱글',
        },
        {
            name : '더블',
        },
        {
            name : '퀸사이즈',
        },
        {
            name : '킹사이즈',
        },
    ]

    const getButton = (id) => {
        return (
            <div className={"container"}>
                <Pressable
                    style={[
                        {backgroundColor: isSelect[id] ? 'gray' : 'white'},
                        {border : "1px solid black"},
                        {width : "180px"},
                        {borderRadius : "20px"},
                        {marginLeft : "100px"}
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
                                {/*<img src={imgSrc[id].src} className={"mt-4"} style={styles.img}/>*/}
                                <p style={{textAlign : "center"}} className={"mt-3 fs-5"}>{imgSrc[id].name}</p>
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
                <p style = {styles.font}> 침대 종류를 선택해주세요</p>
                <div className={"row mx-auto"}>
                    <div className={"col-2 mt-5"}>
                        {getButton(0)}
                    </div>
                    <div className={"col-2 mt-5"}>
                        {getButton(1)}
                    </div>
                    <div className={"col-2 mt-5"}>
                        {getButton(2)}
                    </div>
                    <div className={"col-2 mt-5"}>
                        {getButton(3)}
                    </div>
                    <div className={"col-2 mt-5"}>
                        {getButton(4)}
                    </div>
                </div>
            </div>
            <footer>
                <Link to ={"/lodgingBasicInfo"}><button className={"btn btn-light position-absolute start-0 bottom-0 ms-5 mb-3"} >이전</button></Link>
                <Link to = {"/lodgingCategorySelect"}><button className={"btn btn-primary position-absolute end-0 bottom-0 me-5 mb-3"}>다음</button></Link>
            </footer>
        </div>
    );
};

const styles = StyleSheet.create({

    font :{
        fontSize : "30px",
        fontWeight : 'bold',
        marginTop : "200px",
        marginBottom : "50px",
        textAlign : "center"
    },
    img :{
        width : "100px",
        display: "block",
        margin :"auto"

    }
});

export default LodgingBedSelect;