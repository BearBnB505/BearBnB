import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Mypage from "./Mypage";
import Members from "./Members";
import Review from "./Review";
import BookingConfrim from "./BookingConfrim";


function MypageRoute(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route>
                        <Route path={"/"} element={<Mypage/>}/>
                        <Route path={"members"} element={<Members/>}/>
                        <Route path={"review"} element={<Review/>}/>
                        <Route path={"bookingConfirm"} element={<BookingConfrim/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default MypageRoute;

