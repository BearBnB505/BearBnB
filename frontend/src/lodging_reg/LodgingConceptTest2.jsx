// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import {useState} from "react";
// import * as navigations from "react-bootstrap/ElementChildren";
//
// const LodgingConceptTest2 = (children, func) => {
//     const [active, setActive] = useState("12");
//     const renderIcons = (iconName) => {
//         return iconName;
//     };
//
//     const onToggle = (index, path) => {
//         setActive(index);
//         history.push(path);
//     };
//
//     const history = useNavigate;
//     console.log(active);
//     return (
//         <nav className="navigation-container">
//             <ul>
//                 {navigations.map((navigation, index) => (
//                     <li
//                         key={index}
//                         onClick={() => {
//                             onToggle(index, navigation.path);
//                         }}
//                     >
//                         <p
//                             className={[
//                                 "navigation-icon-container",
//                                 active == index && "active",
//                             ].join(" ")}ddd
//                         >
//                 <span className="navigation-icon">
//                 {renderIcons(navigation.icon)}
//                 </span>
//                 <span className="navigation-icon-text">
//                 {navigation.pathname}
//                 </span>
//                         </p>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     );
// };
//
// export default LodgingConceptTest2;

// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import styled from "styled-components";
//
// function LodgingConceptTest2() {
//     const [btn, setBtn] = useState("연극");
//
//     const onClick = (event) => {
//         const {
//             currentTarget: { id },
//         } = event;
//         setBtn(id);
//     };
//
//     useEffect(() => {
//         const allBtnArr = ["연극", "뮤지컬", "클래식"];
//         const nonTargetedBtnArr = allBtnArr.filter((item) => item != btn);
//         document.getElementById(btn).style.color = "red";
//         nonTargetedBtnArr.map((item) => {
//             document.getElementById(item).style.color = "black";
//             return null;
//         });
//     }, [btn]);
//
//     return (
//         <>
//             <Button onClick={onClick} id="연극">
//                 연극
//             </Button>
//             <Button onClick={onClick} id="뮤지컬">
//                 뮤지컬
//             </Button>
//             <Button onClick={onClick} id="클래식">
//                 클래식
//             </Button>
//         </>
//     );
// }
//
// export default LodgingConceptTest2;
//
// const Button = styled.button`
//     color: red;
// `;

import React, {useState} from "react";


function LodgingConceptTest2(){

    // let data = ["dd", 2, 3, 4, 5];
    let data = [1,2,3];

    let [btnActive, setBtnActive] = useState("");

    const toggleActive = (e) => {
        setBtnActive((prev) => {
            return e.target.value;
            console.log(e.target.value);
        });


    };

    const styles = {
        button : {
            marginBottom: "10px",
            width: "30%",
            color: "white",
            backgroundColor: "pink",
            height: "50px",

            borderRadius: "10px",
            cursor: "pointer",
        },
        buttonA : {
            marginBottom: "10px",
            width: "30%",
            backgroundColor : "blue",
            height: "50px",

        }
    }

    return (
        <div className="container">
            {data.map((item, idx) => {
                return (
                    <>
                        <button
                            key={item.id}
                            onClick={toggleActive}
                            // className={"btn" + (idx === btnActive ? "active" : "")}
                            style={(idx === btnActive) ? styles.button : styles.buttonA}

                        >
                            {/*{item}*/}

                        </button>
                    </>
                );
            })}
        </div>
    );
}

// const btn = styled.button`
//     margin-bottom: 10px;
//     width: 30%;
//     color: white;
//     background-color: pink;
//     height: 50px;
//     border: none;
//     border-radius: 10px;
//     cursor: pointer;
// `;
export default LodgingConceptTest2;