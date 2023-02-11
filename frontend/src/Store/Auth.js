import { createSlice } from '@reduxjs/toolkit';

export const TOKEN_TIME_OUT = 600*1000;

export const  AuthReducer= createSlice({
        name : "authNum",
        initialState: {value: {accessToken: null, authenticated: false, expireTime: null}},
        reducers:{
            authNums:(state, action) => {
                state.value = action.payload
            },
        },
    },
);

export const {lodgingNums} = AuthReducer.actions;
export default AuthReducer.reducer;