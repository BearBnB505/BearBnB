import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Mypage from "./Mypage";
import Members from "./Members";
import Review from "./Review";
import BookingConfrim from "./BookingConfrim";
import BookingCancle from "./BookingCancle";
import Keeping from "./Keeping";
import Complain from "./Complain";
import MembersDel from "./MembersDel";
import Anima from "./animaData";
import { motion } from "framer-motion";


function MypageRoute(props) {
    return (
        <motion.div
            variants={Anima}
            initial="hidden"
            animate="visible"
            exit="exit">
            <BrowserRouter>
                    <Routes>
                        <Route>
                            <Route path={"/"} element={<Mypage/>}/>
                            <Route path={"members"} element={<Members/>}/>
                            <Route path={"review"} element={<Review/>}/>
                            <Route path={"bookingConfirm"} element={<BookingConfrim/>}/>
                            <Route path={"bookingCancle"} element={<BookingCancle/>}/>
                            <Route path={"complain"} element={<Complain/>}/>
                            <Route path={"keeping"} element={<Keeping/>}/>
                            <Route path={"membersDel"} element={<MembersDel/>}/>
                        </Route>
                    </Routes>
            </BrowserRouter>
        </motion.div>
    )
}

export default MypageRoute;

