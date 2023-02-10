import { createSlice } from '@reduxjs/toolkit';

export const LodgingConceptReducer = createSlice(
    {
        name:"lodgingConcept",
        initialState: {value: {concept: "컨셉"}},
        reducers:{
            lodgingConcept:(state,action)=>{
                state.value = action.payload
            }
        }
    },
);

export const {lodgingConcept,} = LodgingConceptReducer.actions;
export default LodgingConceptReducer.reducer;