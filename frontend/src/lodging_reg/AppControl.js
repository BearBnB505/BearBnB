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
function AppControl(){

    return(
    <BrowserRouter>
        <Routes>
            <Route path={"lodgingWelcome"} element={<LodgingWelcome />}/>
            <Route path={"lodgingConcept"} element={<LodgingConcept/>}/>
            <Route path={"lodgingConceptTest"} element={<LoadingConceptTest/>}/>
            <Route path={"lodgingMap"} element={<LodgingMap/>}/>
            <Route path={"lodgingLocationDetail"} element={<LodgingLocationDetail/>}/>
            <Route path={"lodgingBasicInfo"} element={<LodgingBasicInfo/>}/>
            <Route path={"lodgingKategorySelect"} element={<LodgingKategorySelect/>}/>
            <Route path={"lodgingImg"} element={<LodgingImg/>}/>
            <Route path={"lodgingName"} element={<LodgingName/>}/>
            <Route path={"lodgingIntro"} element={<LodgingIntro/>}/>
            <Route path={"lodgingCost"} element={<LodgingCost/>}/>
            <Route path={"lodgingCheck"} element={<LodgingCheck/>}/>

        </Routes>
    </BrowserRouter>
)
}
export default AppControl;