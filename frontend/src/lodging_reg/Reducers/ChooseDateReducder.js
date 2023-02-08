import { createSlice } from '@reduxjs/toolkit';

export const ChooseDateReducer = createSlice({
        name: "chooseDate",
        initialState: { value: {startDate :'', endDate:''}},
        reducers: {
            chooseDates: (state, action) => {
                state.value = action.payload
            },
        },
    },
);

export default ChooseDateReducer.reducer;
export const { chooseDates } = ChooseDateReducer.actions;
