

import { createSlice } from '@reduxjs/toolkit';

export const LodgingBedReducer = createSlice({
        name:"lodgingBasicInfo",
        initialState:{value:{guest:1, bedroom:1, bed:1, bathroom:1}},
        reducers:{
            basicInfo:(state, action)=>{
                state.value = action.payload
            }
        }
    }
);

export default LodgingBedReducer.reducer;
export const { basicInfo} = LodgingBedReducer.actions;
