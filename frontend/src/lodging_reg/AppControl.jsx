import React from "react";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import LodgingConcept from "./LodgingConcept";
import LodgingMap from "./LodgingMap";
import LodgingLocationDetail from "./LodgingLocationDetail";
import LodgingBasicInfo from "./LodgingBasicInfo";
import LodgingCategorySelect from "./LodgingCategorySelect";
import LodgingName from "./LodgingName";
import LodgingCheck from "./LodgingCheck";
import LodgingImg from "./LodgingImg";
import LodgingIntro from "./LodgingIntro";
import LodgingCost from "./LodgingCost";
import LodgingBedSelect from "./LodgingBedSelect";
import LodgingSecondWelcome from "./LodgingSecondWelcome";
import LodgingWelcome from "./LodgingWelcome";
import ImgUploadBox from "./ImgUploadBox";
import LodgingHostInfo from "./LodgingHostInfo";
import LodgingFinal from "./LodgingFinal";
import LodgingHostInfoTest from "./LodgingHostInfoTest";
import LodgingThirdWelcome from "./LodgingThirdWelcome";
import LodgingHostId from "./LodgingHostId";
import Guest from "../guest";
import LodgingPayment from "../lodging_payment/LodgingPayment";
import LodgingPaymentEnd from "../lodging_payment/LodgingPaymentEnd";


function AppControl(){

    return(
    <BrowserRouter>
        <Routes>
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


            <Route path={"ImgUploadBox"} element={<ImgUploadBox/>}/>
            <Route path={"LodgingHostInfoTest"} element={<LodgingHostInfoTest/>}/>

            {/*성인, 유아, 반려동물 수*/}
            <Route path = {"guest"} element={<Guest/>}/>

            {/*결제페이지들*/}
            <Route path = {"lodgingPayment" } element={<LodgingPayment/>}/>
            <Route path = {"lodgingPaymentEnd" } element={<LodgingPaymentEnd/>}/>
        </Routes>
    </BrowserRouter>
    )
}
export default AppControl;