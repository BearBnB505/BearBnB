import { createSlice } from '@reduxjs/toolkit';

export const HostInfoReducer = createSlice({
        name:"hostInfo",
        initialState:{value: {language : [],hostIntro:''}},
        reducers:{
            hostInfos:(state, action)=>{
                state.value = action.payload
            }
        }
    },
);

export default HostInfoReducer.reducer;
export const {hostInfos} = HostInfoReducer.actions;
