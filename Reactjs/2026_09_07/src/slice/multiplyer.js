import { createSlice } from "@reduxjs/toolkit";

const createMultiplyer = createSlice(
    {
        name:"multiplyer",
        initialState:{
            value:1

        },

        reducers:{
            multiply:(state,action)=>{
                state.value = state.value * action.payload.step 
            }
        }
    }
)

export default createMultiplyer.reducer;
export const {multiply} = createMultiplyer.actions