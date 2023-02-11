import {configureStore} from "@reduxjs/toolkit";
import ContactHostReducer from "./Reducers/ContactHostReducer";
export default configureStore({
    reducer:{
        contact : ContactHostReducer,

        // authToken : Auth
    }
})