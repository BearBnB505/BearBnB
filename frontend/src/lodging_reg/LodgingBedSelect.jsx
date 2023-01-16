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

import React from "react";

function LodgingBedSelect(){
    return(
        <div>
            <h2>침대 파트</h2>
        </div>
    )
}

export default LodgingBedSelect;