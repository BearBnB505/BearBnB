import { createSlice } from '@reduxjs/toolkit';

export const LodgingRealNameReducer = createSlice({
        name:"lodgingRealName",
        initialState:{value: {name : 'dd'}},
        reducers:{
            lodgingRealNames:(state, action)=>{
                state.value = action.payload
            }
        }
    },
);

export default LodgingRealNameReducer.reducer;
export const {lodgingRealNames} = LodgingRealNameReducer.actions;