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
    {
        name:"lodgingConcept",
        initialState: {value: {concept: ""}},
        reducers:{
            lodgingConcept:(state,action)=>{
                state.value = action.payload
            }
        }
    },
    {
        name:"lodgingBasicInfo",
        initialState: { value: {guest:0,bedroom:0,bathroom:0,bed:0}},
        reducers:{
            lodgingBasicInfo:(state,action)=>{
                state.value = action.payload
            }
        }
    },
    {
        name:"lodgingBedSelect",
        initialState: {value: {bedSelect: ""}},
        reducers:{
            lodgingBedSelect:(state,action)=>{
                state.value = action.payload
            }
        }
    }
);

export const {hostIdUrl,lodgingConcept,lodgingBasicInfo,lodgingBedSelect} = HostIdReducer.actions;
export default HostIdReducer.reducer;