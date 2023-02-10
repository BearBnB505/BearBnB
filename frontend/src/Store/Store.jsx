import { configureStore } from '@reduxjs/toolkit'
import HostIdReducer from "../lodging_reg/Reducers/HostIdReducer"
import userReducer from '../lodging_reg/redux_test/user'
import LodgingbedReducer from '../lodging_reg/Reducers/LodgingbedReducer'
import BedSelectReducer from "../lodging_reg/Reducers/BedSelectReducer";
import LodgingNameReducer from "../lodging_reg/Reducers/LodgingNameReducer";
import HostInfoReducer from "../lodging_reg/Reducers/HostInfoReducer";
import LodgingCostReducer from "../lodging_reg/Reducers/LodgingCostReducer";
import LodgingCategoryReducer from "../lodging_reg/Reducers/LodgingCategoryReducer";
import LodgingRealNameReducer from "../lodging_reg/Reducers/LodgingRealNameReducer";
import RealHostIdReducer from "../lodging_reg/Reducers/RealHostIdReducer";
import LodgingImgReducer from "../lodging_reg/Reducers/LodgingImgReducer";
import LodgingNumReducer from "../lodging_reg/Reducers/LodgingNumReducer";
import LodgingLocationDetailReducer from "../lodging_reg/Reducers/LodgingLocationDetailReducer";
import  ChooseDateReducer from "../lodging_reg/Reducers/ChooseDateReducder";
import LodgingConceptReducer from "../lodging_reg/Reducers/LodgingConceptReducer";


export default configureStore({
    reducer:{
        hostIdUrl: HostIdReducer,
        user: userReducer,
        lodgingConcept : LodgingConceptReducer,
        lodgingBasicInfo : LodgingbedReducer,
        lodgingBedSelect : BedSelectReducer,
        lodgingName : LodgingNameReducer,
        hostInfo : HostInfoReducer,
        lodgingCost : LodgingCostReducer,
        lodgingCategory : LodgingCategoryReducer,
        lodgingRealName : LodgingRealNameReducer,
        realHostId : RealHostIdReducer,
        lodgingImg:LodgingImgReducer,
        lodgingNum : LodgingNumReducer,
        locationDetail : LodgingLocationDetailReducer,
        chooseDate : ChooseDateReducer,
    }
})