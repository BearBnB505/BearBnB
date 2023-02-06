import { createSlice } from '@reduxjs/toolkit';

export const LodgingCategoryReducer = createSlice({
        name:"lodgingCategory",
        initialState:{value:{category:['dd']}},
        reducers:{
            category:(state, action)=>{
                state.value = action.payload
            }
        }
    }
);

export default LodgingCategoryReducer.reducer;
export const { category} = LodgingCategoryReducer.actions;
