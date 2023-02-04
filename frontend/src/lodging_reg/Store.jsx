import { configureStore } from '@reduxjs/toolkit'
import HostIdReducer from "./HostIdReducer"
import userReducer from './redux_test/user'


export default configureStore({
    reducer:{
        hostIdUrl: HostIdReducer,
        user: userReducer,
        lodgingConcept : HostIdReducer,
        lodgingBasicInfo : HostIdReducer,
        lodgingBedSelect:HostIdReducer,
    }
})