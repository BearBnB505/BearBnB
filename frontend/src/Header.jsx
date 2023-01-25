import React from "react";
import {Link} from "react-router-dom";
import {Dropdown, DropdownButton} from "react-bootstrap";

import $ from "jquery";
import './Header.css';
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";

function Header(props) {

    const styles = {
        pillStart: {
            borderTopLeftRadius: 25,
            borderBottomLeftRadius: 25
        },
        pillEnd: {
            borderTopRightRadius: 25,
            borderBottomRightRadius: 25
        },
    }

    $(document).ready(function () {
        $('#nav-second').hide();
        $('#btn-where').on('click', function () {
            // $(this).toggleClass('active');
            // $('body').css("filter","blur(2px)");
            // $('#header_nav').css({'height':'200px'});
            $('#nav-first').hide();
            $('#nav-second').show();
            $('#nav-second').css({backgroundColor: "white"});
            // $('body').not($('#nav-second')).
        });
    });



    const openNav = () => {
        document.getElementById("menu").style.width = "250px";
        // document.getElementById("main-contents").style.color = "rgba(0,0,0,0.4)";
        // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    const closeNav = () => {
        document.getElementById("menu").style.width = "0";
        document.body.style.backgroundColor = "white";
    }


    return (
        <div className={"border-bottom pb-2"} id={"div-header"}>
            <nav className={"navbar navbar-expand-sm navbar-white bg-white mt-1 fixed"} id={"header_nav"}>
                <div className={"container justify-content-between"} style={{width: 1900}}>
                    <Link to={"/"}><img src="/img/BearBnB_logo.png" alt="BearBnB" style={{width:130}}/></Link>

                    <div className={"nav-item"} id={"nav-first"}>
                        <div className={"btn-group"} role={"group"}>
                            <button type={"button"} id={"btn-where"} className={"btn btn-outline-secondary px-3 py-2"} style={styles.pillStart}>어디든지</button>
                            <button type={"button"} className={"btn btn-outline-secondary px-3 py-2"}>언제든 일주일</button>
                            <button type={"button"} className={"btn btn-outline-secondary px-3 py-2"} style={styles.pillEnd}>게스트 추가 <img src="/img/search.png" alt="" style={{width: 28}}/></button>

                        </div>
                    </div>
                    <div className={"nav-item"}>
                        <Dropdown>
                            {/*<DropdownButton title={"마이"} align={"end"}>*/}
                            {/*    <DropdownItem href={"#"}>로그인</DropdownItem>*/}
                            {/*    <DropdownItem href={"#"}>회원가입</DropdownItem>*/}
                            {/*</DropdownButton>*/}
                            <DropdownToggle variant={"none"} bsPrefix style={{border:"none"}}>
                                <a href="#" className={"nav-link"}><img src="/img/user.png" alt="user" style={{width: 35}}/></a>
                            </DropdownToggle>

                            <DropdownMenu align={"end"}>
                                <DropdownItem href={"#"}>로그인</DropdownItem>
                                <DropdownItem href={"/join"}>회원가입</DropdownItem>
                                <DropdownItem href={"/mypage"}>마이페이지</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </nav>

            <nav className={"mb-2"}  id={"nav-second"}>
                <div className={"container d-flex justify-content-center"}>
                    <div className={"btn-group sidenav"} role={"group"}  id={"menu"}>
                        <button type={"button"} className={"btn btn-outline-primary px-3 py-2"} style={styles.pillStart}>여행지</button>
                        <button type={"button"} className={"btn btn-outline-primary px-3 py-2"}>체크인</button>
                        <button type={"button"} className={"btn btn-outline-primary px-3 py-2"}>체크아웃</button>
                        <button type={"button"} className={"btn btn-outline-primary px-3 py-2"} style={styles.pillEnd}>여행자</button>
                    </div>
                </div>
            </nav>



        </div>

    );
}

export default Header;

// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Collapse from 'react-bootstrap/Collapse';
//
// function Header() {
//     const [open, setOpen] = useState(false);
//
//     const styles = {
//         pillStart: {
//             borderTopLeftRadius: 25,
//             borderBottomLeftRadius: 25
//         },
//         pillEnd: {
//             borderTopRightRadius: 25,
//             borderBottomRightRadius: 25
//         },
//     }
//
//     return (
//         <div>
//             <Button
//                 onClick={() => setOpen(!open)}
//                 aria-controls="example-collapse-text"
//                 aria-expanded={open}
//             >
//                 click
//             </Button>
//             <Collapse in={open}>
//                 <div id="example-collapse-text">
//                     <div className={"container d-flex justify-content-center"}>
//                         <div className={"btn-group sidenav"} role={"group"}  id={"menu"}>
//                             <button type={"button"} className={"btn btn-outline-primary px-3 py-2"} style={styles.pillStart}>여행지</button>
//                             <button type={"button"} className={"btn btn-outline-primary px-3 py-2"}>체크인</button>
//                             <button type={"button"} className={"btn btn-outline-primary px-3 py-2"}>체크아웃</button>
//                             <button type={"button"} className={"btn btn-outline-primary px-3 py-2"} style={styles.pillEnd}>여행자</button>
//                         </div>
//                     </div>
//                 </div>
//             </Collapse>
//         </div>
//     );
// }
//
// export default Header;

// import React from "react";
// import {Link} from "react-router-dom";
// import { motion } from "framer-motion";
//
// import $ from "jquery";
// import './Header.css';
//
// function Header(props) {
//
//     const styles = {
//         pillStart: {
//             borderTopLeftRadius: 25,
//             borderBottomLeftRadius: 25
//         },
//         pillEnd: {
//             borderTopRightRadius: 25,
//             borderBottomRightRadius: 25
//         },
//     }
//
//     $('#btn-where').on('click', function () {
//         $(this).toggleClass('active');
//         // $('body').css("filter","blur(2px)");
//     })
//
//
//     return (
//         <div className={"border-bottom pb-2"}>
//             <nav className={"navbar navbar-expand-sm navbar-white bg-white mt-1"} id={"header_nav"}>
//                 <div className={"container justify-content-between"} style={{width: 1900}}>
//                     <Link to={"/"}><img src="/img/BearBnB_logo.png" alt="BearBnB" style={{width:130}}/></Link>
//
//                     <div className={"nav-item"} id={"container"}>
//                         <div className={"btn-group"} role={"group"}>
//                             <button type={"button"} id={"btn-where"} className={"btn btn-outline-secondary px-3 py-2"} style={styles.pillStart}>어디든지</button>
//                             <button type={"button"} className={"btn btn-outline-secondary px-3 py-2"}>언제든 일주일</button>
//                             <button type={"button"} className={"btn btn-outline-secondary px-3 py-2"} style={styles.pillEnd}>게스트 추가 <img src="/img/search.png" alt="" style={{width: 28}}/></button>
//                         </div>
//                     </div>
//
//                     <div className={"nav-item"}>
//                         <a href="#" className={"nav-link"}><img src="/img/user.png" alt="user" style={{width: 35}}/></a>
//                     </div>
//                 </div>
//             </nav>
//
//             <div className={"container d-flex justify-content-center "}>
//                 <div className={"btn-group sidenav"} role={"group"}  id={"menu"}>
//                     <motion.div className={"modal"} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0, transition:{duration: 0.15}}}>
//                         <div className={"btn-group"} role={"group"}>
//                             <button type={"button"} className={"btn btn-outline-primary px-3 py-2"} style={styles.pillStart}>여행지</button>
//                             <button type={"button"} className={"btn btn-outline-primary px-3 py-2"}>체크인</button>
//                             <button type={"button"} className={"btn btn-outline-primary px-3 py-2"}>체크아웃</button>
//                             <button type={"button"} className={"btn btn-outline-primary px-3 py-2"} style={styles.pillEnd}>여행자</button>
//                         </div>
//                     </motion.div>
//
//                 </div>
//             </div>
//
//         </div>
//
//     );
// }
//
// export default Header;