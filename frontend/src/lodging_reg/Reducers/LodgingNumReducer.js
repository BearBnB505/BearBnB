import { createSlice } from '@reduxjs/toolkit';

export const LodgingNumReducer = createSlice({
        name : "lodgingNum",
        // initialState: {value: {num: "aa"}},
        initialState: {num: null},
        reducers:{
            lodgingNums:(state, action) => {
                state.num = action.payload;
            },
        },
    },
);

export const {lodgingNums} = LodgingNumReducer.actions;
export default LodgingNumReducer.reducer;