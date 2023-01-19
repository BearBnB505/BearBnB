import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Main from "./Main/Main";
import LodgingDetail from "./lodgingDetail/LodgingDetail";
import Mypage from "./Mypage/Mypage";
import Members from "./Mypage/Members";
import Review from "./Mypage/Review";
import BookingConfirm from "./Mypage/BookingConfirm";
import BookingCancel from "./Mypage/BookingCancel";
import Complain from "./Mypage/Complain";
import Keeping from "./Mypage/Keeping";
import MembersDel from "./Mypage/MembersDel";
import LodgingWelcome from "./lodging_reg/LodgingWelcome";
import LodgingSecondWelcome from "./lodging_reg/LodgingSecondWelcome";
import LodgingThirdWelcome from "./lodging_reg/LodgingThirdWelcome";
import LodgingConcept from "./lodging_reg/LodgingConcept";
import LodgingMap from "./lodging_reg/LodgingMap";
import LodgingLocationDetail from "./lodging_reg/LodgingLocationDetail";
import LodgingBasicInfo from "./lodging_reg/LodgingBasicInfo";
import LodgingCategorySelect from "./lodging_reg/LodgingCategorySelect";
import LodgingImg from "./lodging_reg/LodgingImg";
import LodgingName from "./lodging_reg/LodgingName";
import LodgingIntro from "./lodging_reg/LodgingIntro";
import LodgingCost from "./lodging_reg/LodgingCost";
import LodgingCheck from "./lodging_reg/LodgingCheck";
import LodgingBedSelect from "./lodging_reg/LodgingBedSelect";
import LodgingHostInfo from "./lodging_reg/LodgingHostInfo";
import LodgingFinal from "./lodging_reg/LodgingFinal";
import LodgingHostId from "./lodging_reg/LodgingHostId";
import ImgUploadBox from "./lodging_reg/ImgUploadBox";
import LodgingHostInfoTest from "./lodging_reg/LodgingHostInfoTest";
import Guest from "./guest";
import LodgingPayment from "./lodging_payment/LodgingPayment";
import LodgingPaymentEnd from "./lodging_payment/LodgingPaymentEnd";
import LodgingPaymentFailure from "./lodging_payment/LodgingPaymentFailure";

function ProjectRouter(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout />}>

                    {/* 메인 */}
                    <Route index element={<Main />} />
                    <Route path={"lodgingDetail"} element={<LodgingDetail/>}/>


                    {/* mypage */}
                    <Route path={"mypage"} element={<Mypage/>}/>
                    <Route path={"members"} element={<Members/>}/>
                    <Route path={"review"} element={<Review/>}/>
                    <Route path={"bookingConfirm"} element={<BookingConfirm/>}/>
                    <Route path={"bookingCancel"} element={<BookingCancel/>}/>
                    <Route path={"complain"} element={<Complain/>}/>
                    <Route path={"keeping"} element={<Keeping/>}/>
                    <Route path={"membersDel"} element={<MembersDel/>}/>


                    {/* 숙소 등록 */}
                    <Route path={"lodgingWelcome"} element={<LodgingWelcome />}/>
                    <Route path={"lodgingSecondWelcome"} element={<LodgingSecondWelcome />}/>
                    <Route path={"lodgingThirdWelcome"} element={<LodgingThirdWelcome />}/>
                    <Route path={"lodgingConcept"} element={<LodgingConcept/>}/>
                    <Route path={"lodgingMap"} element={<LodgingMap/>}/>
                    <Route path={"lodgingLocationDetail"} element={<LodgingLocationDetail/>}/>
                    <Route path={"lodgingBasicInfo"} element={<LodgingBasicInfo/>}/>
                    <Route path={"lodgingCategorySelect"} element={<LodgingCategorySelect/>}/>
                    <Route path={"lodgingImg"} element={<LodgingImg/>}/>
                    <Route path={"lodgingName"} element={<LodgingName/>}/>
                    <Route path={"lodgingIntro"} element={<LodgingIntro/>}/>
                    <Route path={"lodgingCost"} element={<LodgingCost/>}/>
                    <Route path={"lodgingCheck"} element={<LodgingCheck/>}/>
                    <Route path={"lodgingBedSelect"} element={<LodgingBedSelect/>}/>
                    <Route path={"lodgingHostInfo"} element={<LodgingHostInfo/>}/>
                    <Route path = {"lodgingFinal" } element={<LodgingFinal/>}/>
                    <Route path={"lodgingHostId"} element={<LodgingHostId/>}/>

                    {/*<Route path={"imgUploadBox"} element={<ImgUploadBox/>}/>*/}
                    {/*<Route path={"lodgingHostInfoTest"} element={<LodgingHostInfoTest/>}/>*/}

                    {/*성인, 유아, 반려동물 수*/}
                    <Route path = {"guest"} element={<Guest/>}/>


                    {/* 예매 */}
                    <Route path = {"lodgingPayment" } element={<LodgingPayment/>}/>
                    <Route path = {"lodgingPaymentEnd" } element={<LodgingPaymentEnd/>}/>
                    <Route path = {"lodgingPaymentFailure" } element={<LodgingPaymentFailure/>}/>


                    {/**/}
                    {/**/}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default ProjectRouter;