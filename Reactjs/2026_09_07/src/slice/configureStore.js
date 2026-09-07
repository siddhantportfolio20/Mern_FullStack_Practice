import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './reduxjs'
import { multiply } from "./multiplyer";
import multiplyerReducer from './multiplyer'

const store = configureStore(

    {
        reducer:{
            counter : counterReducer ,
            multiplyer : multiplyerReducer
        }
    }
)

export default store

