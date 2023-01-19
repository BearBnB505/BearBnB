import React from "react";

import LodgingPayment from "./LodgingPayment";
import LodgingPaymentEnd from "./LodgingPaymentEnd";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import LodgingPaymentFailure from "./LodgingPaymentFailure";
function AppPaymentControl(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = {"lodgingPayment" } element={<LodgingPayment/>}/>
                <Route path = {"lodgingPaymentEnd" } element={<LodgingPaymentEnd/>}/>
                <Route path = {"lodgingPaymentFailure" } element={<LodgingPaymentFailure/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AppPaymentControl;