console.log("from index.js");
import { createStore } from "redux";

const CAKE_ORDERED= 'CAKE_ORDERED'
const   Icecream_ORDERED = 'Icecream_ORDERED'
const Icecream_RESTOCKED = 'Icecream_RESTOCKED'
function orderCake(){
    return {
        type: CAKE_ORDERED,
        quantity : 1
    }
}
function orderIcecream(){
    return{
        type: Icecream_ORDERED,
        quantity : 1
    }
}

const initialState = {
    noOfCakes : 10,
    noOfIceream : 10
}



const reducer  = (state = initialState , action) =>{
    switch (action.type){
        case CAKE_ORDERED:
            return{

                ...state, noOfCakes : state.noOfCakes - 1
            }
        case Icecream_ORDERED:
            return {
                ...state , noOfIceream : state.noOfIceream -1
            }
        default:
            return state
    }
}


const store  = createStore(reducer)

console.log('Initial State : ' , store.getState());



store.subscribe(()=> console.log("updated state" , store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

// Multiple reducers in code 