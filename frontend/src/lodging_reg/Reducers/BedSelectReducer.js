import { createSlice } from '@reduxjs/toolkit';

export const BedSelectReducer = createSlice(
    {
        name:"lodgingBedSelect",
        initialState:{value:{bedSelects:""}},
        reducers:{
            bedSelects:(state, action)=>{
                state.value = action.payload
            }
        }
    }
);

export default BedSelectReducer.reducer;
export const {bedSelects} = BedSelectReducer.actions;
