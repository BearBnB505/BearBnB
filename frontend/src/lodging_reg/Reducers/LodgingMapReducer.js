import { createSlice } from '@reduxjs/toolkit';

export const LodgingMapReducer = createSlice({
        name:"lodgingMapReducer",
        initialState:{value:{address1:"위치", latitude:0, longitude:0}},
        reducers:{
            maps:(state, action)=>{
                state.value = action.payload
            }
        }
    }
);

export default LodgingMapReducer.reducer;
export const { maps} = LodgingMapReducer.actions;
