import { createSlice } from '@reduxjs/toolkit';

export const LodgingNumReducer = createSlice({
        name : "lodgingNum",
        initialState: {value: {num: "aa"}},
        reducers:{
            lodgingNums:(state, action) => {
                state.value = action.payload
            },
        },
    },
);

export const {lodgingNums} = LodgingNumReducer.actions;
export default LodgingNumReducer.reducer;