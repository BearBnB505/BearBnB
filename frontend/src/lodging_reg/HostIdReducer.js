import { createSlice } from '@reduxjs/toolkit';

export const HostIdReducer = createSlice({
    name : "hostIdUrl",
    initialState: {value: {idUrl: ""}},
    reducers:{
        hostIdUrl:(state, action) => {
            state.value = action.payload
        },
    },
});

export const {hostIdUrl} = HostIdReducer.actions;
export default HostIdReducer.reducer;