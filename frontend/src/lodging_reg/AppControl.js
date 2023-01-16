import React from "react";
import LodgingWelcome from "./LodgingWelcome";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import LodgingConcept from "./LodgingConcept";
import LodgingMap from "./LodgingMap";
import LodgingLocationDetail from "./LodgingLocationDetail";
import LodgingBasicInfo from "./LodgingBasicInfo";
import LodgingKategorySelect from "./LodgingKategorySelect";
import LodgingName from "./LodgingName";
import LodgingCheck from "./LodgingCheck";
import LodgingImg from "./LodgingImg";
import LodgingIntro from "./LodgingIntro";
import LodgingCost from "./LodgingCost";
import LoadingConceptTest from "./LoadingConceptTest";
import LodgingConceptTest2 from "./LodgingConceptTest2";
import LodgingBedSelect from "./LodgingBedSelect";
import LodgingSecondWelcome from "./LoagingSecondWelcome";


function AppControl(){

    return(
    <BrowserRouter>
        <Routes>
            <Route path={"lodgingWelcome"} element={<LodgingWelcome />}/>
            <Route path={"lodgingSecondWelcome"} element={<LodgingSecondWelcome />}/>
            <Route path={"lodgingConcept"} element={<LodgingConcept/>}/>
            <Route path={"lodgingConceptTest"} element={<LoadingConceptTest/>}/>
            <Route path={"lodgingConceptTest2"} element={<LodgingConceptTest2/>}/>
            <Route path={"lodgingMap"} element={<LodgingMap/>}/>
            <Route path={"lodgingLocationDetail"} element={<LodgingLocationDetail/>}/>
            <Route path={"lodgingBasicInfo"} element={<LodgingBasicInfo/>}/>
            <Route path={"lodgingKategorySelect"} element={<LodgingKategorySelect/>}/>
            <Route path={"lodgingImg"} element={<LodgingImg/>}/>
            <Route path={"lodgingName"} element={<LodgingName/>}/>
            <Route path={"lodgingIntro"} element={<LodgingIntro/>}/>
            <Route path={"lodgingCost"} element={<LodgingCost/>}/>
            <Route path={"lodgingCheck"} element={<LodgingCheck/>}/>
            <Route path={"lodgingBedSelect"} element={<LodgingBedSelect/>}/>

        </Routes>
    </BrowserRouter>
)
}
export default AppControl;