import { configureStore } from '@reduxjs/toolkit'
import HostIdReducer from "./Reducers/HostIdReducer"
import userReducer from './redux_test/user'
import LodgingbedReducer from './Reducers/LodgingbedReducer'
import BedSelectReducer from "./Reducers/BedSelectReducer";
import LodgingNameReducer from "./Reducers/LodgingNameReducer";
import HostInfoReducer from "./Reducers/HostInfoReducer";
import LodgingCostReducer from "./Reducers/LodgingCostReducer";
import LodgingCategoryReducer from "./Reducers/LodgingCategoryReducer";
import LodgingRealNameReducer from "./Reducers/LodgingRealNameReducer";
import RealHostIdReducer from "./Reducers/RealHostIdReducer";
import LodgingImgReducer from "./Reducers/LodgingImgReducer";
import LodgingNumReducer from "./Reducers/LodgingNumReducer";


export default configureStore({
    reducer:{
        hostIdUrl: HostIdReducer,
        user: userReducer,
        lodgingConcept : HostIdReducer,
        lodgingBasicInfo : LodgingbedReducer,
        lodgingBedSelect : BedSelectReducer,
        lodgingName : LodgingNameReducer,
        hostInfo : HostInfoReducer,
        lodgingCost : LodgingCostReducer,
        lodgingCategory : LodgingCategoryReducer,
        lodgingRealName : LodgingRealNameReducer,
        realHostId : RealHostIdReducer,
        lodgingImg:LodgingImgReducer,
        lodgingNum : LodgingNumReducer

    }
})