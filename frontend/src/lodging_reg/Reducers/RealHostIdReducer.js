import { createSlice } from '@reduxjs/toolkit';

export const RealHostIdReducer = createSlice({
        name : "realhostIdUrl",
        initialState: {value: {idUrl: ""}},
        reducers:{
            realhostIdUrl:(state, action) => {
                state.value = action.payload
            },
        },
    },
);

export const {realhostIdUrl} = RealHostIdReducer.actions;
export default RealHostIdReducer.reducer;