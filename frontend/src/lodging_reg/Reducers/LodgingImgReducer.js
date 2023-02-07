import { createSlice } from '@reduxjs/toolkit';

export const LodgingImgReducer = createSlice({
        name : "lodgingImg",
        initialState: {value: {url: ['aa','bb']}},
        reducers:{
            lodgingImgs:(state, action) => {
                state.value = action.payload
            },
        },
    })

export const {lodgingImgs} = LodgingImgReducer.actions;
export default LodgingImgReducer.reducer;