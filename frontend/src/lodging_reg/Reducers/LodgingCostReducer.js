import { createSlice } from '@reduxjs/toolkit';

export const LodgingCostReducer = createSlice({
        name:"lodgingCost",
        initialState:{value:{cost:0}},
        reducers:{
            costs:(state, action)=>{
                state.value = action.payload
            }
        }
    }
);

export default LodgingCostReducer.reducer;
export const { costs} = LodgingCostReducer.actions;
