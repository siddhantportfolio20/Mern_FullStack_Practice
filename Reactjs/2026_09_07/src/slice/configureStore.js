import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './reduxjs'
import { multiply } from "./multiplyer";
import multiplyerReducer from './multiplyer'
import cartReducer from './cartSlice'
const store = configureStore(

    {
        reducer:{
            counter : counterReducer ,
            multiplyer : multiplyerReducer,
            cart : cartReducer
        }
    }
)

export default store

