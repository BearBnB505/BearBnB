import React from "react";

import LodgingPayment from "./LodgingPayment";
import LodgingPaymentEnd from "./LodgingPaymentEnd";
import {BrowserRouter,Routes, Route} from "react-router-dom";
function AppPaymentControl(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = {"lodgingPayment" } element={<LodgingPayment/>}/>
                <Route path = {"lodgingPaymentEnd" } element={<LodgingPaymentEnd/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AppPaymentControl;