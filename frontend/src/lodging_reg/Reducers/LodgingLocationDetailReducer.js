import { createSlice } from '@reduxjs/toolkit';

export const LodgingLocationDetailReducer = createSlice({
        name: "locationDetail",
        initialState: { value: {nation: "", address1: "", address2: "", zipCode:0}},
        reducers: {
            locationDetails: (state, action) => {
                state.value = action.payload
            },
        },
    },
);

export default LodgingLocationDetailReducer.reducer;
export const { locationDetails } = LodgingLocationDetailReducer.actions;
