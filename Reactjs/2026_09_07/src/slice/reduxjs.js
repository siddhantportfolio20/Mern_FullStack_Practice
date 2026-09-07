import {createSlice} from '@reduxjs/toolkit'



const counterSlice = createSlice(
    {
        name:'counter',
        initialState:{
            value:0,
            pastValue:[]
        },
        reducers:{
            increase:(state)=>{
                state.pastValue.push(state.value)
                state.value+= 1
            },
            decrease:(state)=>{
                 state.pastValue.push(state.value)
                state.value -= 1;
            } ,
            increaseByStep:(state,action)=>{
                state.pastValue.push(state.value)
                state.value += action.payload.step
            }
                
            

        }
    }
)




export const {increase,increaseByStep,decrease} = counterSlice.actions
export default counterSlice.reducer  