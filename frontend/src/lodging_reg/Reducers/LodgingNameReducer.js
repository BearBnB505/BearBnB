import { createSlice } from '@reduxjs/toolkit';

export const LodgingNameReducer = createSlice({
        name:"lodgingName",
        initialState:{value: {lodgingName : '',lodgingIntro:'숙소'}},
        reducers:{
            lodgingNames:(state, action)=>{
                state.value = action.payload
            }
        }
    },
);

export default LodgingNameReducer.reducer;
export const {lodgingNames} = LodgingNameReducer.actions;

