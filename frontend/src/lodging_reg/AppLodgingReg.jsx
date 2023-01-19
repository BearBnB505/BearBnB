import React from "react";
import AppControl from "./AppControl";
import AppPaymentControl from "../lodging_payment/AppPaymentControl";

function AppLodgingReg(props){
    return(
        <div>
            <AppControl/>
            <AppPaymentControl/>

        </div>
    )
}
export default AppLodgingReg;
