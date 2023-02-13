import { createSlice } from '@reduxjs/toolkit';

export const AuthReducer = createSlice({
        name:"auth",
        initialState:{value: {access:'test'}},
        reducers:{
            auths:(state, action)=>{
                state.value = action.payload
            }
        }
    },
);

export default AuthReducer.reducer;
export const {auths} = AuthReducer.actions;