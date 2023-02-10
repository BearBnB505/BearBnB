import { createSlice } from '@reduxjs/toolkit';

export const HostIdReducer = createSlice({
    name : "hostIdUrl",
    initialState: {value: {idUrl: ""}},
    reducers:{
        hostIdUrl:(state, action) => {
            state.value = action.payload
        },
    },
},
    // {
    //     name:"lodgingConcept",
    //     initialState: {value: {concept: ""}},
    //     reducers:{
    //         lodgingConcept:(state,action)=>{
    //             state.value = action.payload
    //         }
    //     }
    // },
);

export const {hostIdUrl,lodgingConcept,lodgingBasicInfo} = HostIdReducer.actions;
export default HostIdReducer.reducer;