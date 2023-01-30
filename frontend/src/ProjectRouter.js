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
import GuestCount from "./GuestCount";
import LodgingPayment from "./lodging_payment/LodgingPayment";
import LodgingPaymentEnd from "./lodging_payment/LodgingPaymentEnd";
import LodgingPaymentFailure from "./lodging_payment/LodgingPaymentFailure";
import Message from "./Message/Message";
import Join from "./Join";
import Table1 from "./components/Table1";
import Table2 from "./components/Table2";
import Table3 from "./components/Table3";
import Table4 from "./components/Table4";
import Navbar from "./components/Navbar";
import HouseInfo from "./houseInfoUpdate/HouseInfo";
import HostInfo from "./hostinfo/HostInfo";
import HostMyPageMain from "./HostMypage/HostMyPageMain";
import HostMyPageHostInfo from "./HostMypage/HostMyPageHostInfo";
import HostMyPageReview from "./HostMypage/HostMyPageReview";
import HostMyPageBooking from "./HostMypage/HostMyPageBooking";
import GuestInfoModal from "./HostMypage/GuestInfoModal";
import HostMyPageRevenue from "./HostMypage/HostMyPageRevenue";
import HostMyPageLodging from "./HostMypage/HostMyPageLodging";
import LodgingChooseDate from "./lodging_reg/LodgingChooseDate";

function ProjectRouter(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout />}>

                    {/* 메인 */}
                    <Route index element={<Main />} />
                    <Route path={"lodgingDetail/:idx"} element={<LodgingDetail/>}/>
                    <Route path={"hostInfo"} element={<HostInfo/>}/>

                    {/* 메세지알림 */}
                    <Route path={"message"} element={<Message/>}/>

                    {/* 일반회원 마이페이지 */}
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
                    <Route path = {"lodgingChooseDate" } element={<LodgingChooseDate/>}/>

                    {/*<Route path={"imgUploadBox"} element={<ImgUploadBox/>}/>*/}
                    {/*<Route path={"lodgingHostInfoTest"} element={<LodgingHostInfoTest/>}/>*/}


                    {/* 예매 */}
                    <Route path = {"lodgingPayment" } element={<LodgingPayment/>}/>
                    <Route path = {"lodgingPaymentEnd" } element={<LodgingPaymentEnd/>}/>
                    <Route path = {"lodgingPaymentFailure" } element={<LodgingPaymentFailure/>}/>


                    {/* 회원가입 */}
                    <Route path={"join"} element={<Join/>}/>


                    {/* 호스트 마이페이지*/}
                    <Route path={"hostMyPageMain"} element={<HostMyPageMain/>}/>
                    <Route path={"hostMyPageHostInfo"} element={<HostMyPageHostInfo/>}/>
                    <Route path={"hostMyPageReview"} element={<HostMyPageReview/>}/>
                    <Route path={"hostMyPageBooking"} element={<HostMyPageBooking/>}/>
                    <Route path={"guestInfoModal"} element={<GuestInfoModal/>}/>
                    <Route path={"hostMyPageRevenue"} element={<HostMyPageRevenue/>}/>
                    <Route path={"hostMyPageLodging"} element={<HostMyPageLodging/>}/>

                    {/*  */}

                </Route>

                {/* 관리자페이지 */}
                <Route path={"/admin"} element={<Navbar/>}>
                    <Route index element={<Table1 />} />
                    <Route path={"lodging"} element={<Table2/>}/>
                    <Route path={"report"} element={<Table3/>}/>
                    <Route path={"sales"} element={<Table4/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default ProjectRouter;


