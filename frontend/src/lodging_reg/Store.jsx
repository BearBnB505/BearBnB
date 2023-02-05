import { configureStore } from '@reduxjs/toolkit'
import HostIdReducer from "./Reducers/HostIdReducer"
import userReducer from './redux_test/user'
import LodgingbedReducer from './Reducers/LodgingbedReducer'
import BedSelectReducer from "./Reducers/BedSelectReducer";


export default configureStore({
    reducer:{
        hostIdUrl: HostIdReducer,
        user: userReducer,
        lodgingConcept : HostIdReducer,
        lodgingBasicInfo : LodgingbedReducer,
        lodgingBedSelect : BedSelectReducer,

    }
})