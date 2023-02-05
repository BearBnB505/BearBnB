import { createSlice } from '@reduxjs/toolkit';

export const LodgingNameReducer = createSlice({
        name:"lodgingName",
        initialState:{value: {lodgingName : '숙소이름',lodgingIntro:'숙소소개'}},
        reducers:{
            lodgingNames:(state, action)=>{
                state.value = action.payload
            }
        }
    },
);

export default LodgingNameReducer.reducer;
export const {lodgingNames} = LodgingNameReducer.actions;

