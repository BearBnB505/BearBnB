import { createSlice } from "@reduxjs/toolkit";

export const TOKEN_TIME_OUT = 600*1000;

export const Auth = createSlice({
    name: 'authToken',
    initialState: {value: {access: "ddd"}},
    reducers: {
        SETTOKEN: (state, action) => {
            state.value = action.payload
                // {
                // authenticated : true,
                // accessToken : action.payload,
                // expireTime : new Date().getTime() + TOKEN_TIME_OUT
            // }
            // state.authenticated = true
            // state.accessToken = action.payload
            // state.expireTime = new Date().getTime() + TOKEN_TIME_OUT
        },
        // DELETE_TOKEN: (state) => {
        //     state.value = {
        //         authenticated : false,
        //         accessToken : null,
        //         expireTime : null
        //     }
        //     // state.authenticated = false
        //     // state.accessToken = null
        //     // state.expireTime = null
        // },
    }
});

// export const { SET_TOKEN, DELETE_TOKEN } = Auth.actions;
export const { SETTOKEN } = Auth.actions;

export default Auth.reducer;