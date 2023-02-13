import { createSlice } from '@reduxjs/toolkit';

export const ContactHostReducer = createSlice({
        name:"contact",
        initialState:{value: {contact:'test'}},
        reducers:{
            contacts:(state, action)=>{
                state.value = action.payload
            }
        }
    },
);

export default ContactHostReducer.reducer;
export const {contacts} = ContactHostReducer.actions;