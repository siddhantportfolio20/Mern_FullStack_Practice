import { createStore } from "redux";


const initialState = {
    items:[
        {itemName:'Apple',
        itemId: 0,
        itemQ: 2,
        itemPrice : 50
        }
    ],
    discount:10,
    itemTotal: 0,
    discountedTotal:0

}


const reducer = (state = initialState , action)=>{
    if(action.type === 'addItem'){
        return {
            ...state,items: [...state.items,action.payload]
        }
    }

    if (action.type === "remove") {

        return {
            ...state,
            items: state.items.filter(
                item => item.itemId !== action.payload
            )
        };
    }

    if (action.type === "quantity_add") {
        return {
            ...state,
            items: state.items.map(item =>
                item.itemId === action.payload
                    ? {
                        ...item,
                        itemQ: item.itemQ + 1
                    }
                    : item
            )
        };
    }
    if (action.type === "quantity_remove") {
        return {
            ...state,
            items: state.items.map(item =>
                item.itemId === action.payload
                    ? {
                        ...item,
                        itemQ: item.itemQ - 1
                    }
                    : item
            )
        };
    }
    if (action.type === "totalPrice") {

        let total = 0;

        for (let i = 0; i < state.items.length; i++) {
            total = total + (state.items[i].itemQ * state.items[i].itemPrice);
        }

        return {
            ...state,
            itemTotal: total
    };
    }
if (action.type === "discountedTotal") {

    let discountAmount =
        (state.itemTotal * state.discount) / 100;

    let finalTotal =
        state.itemTotal - discountAmount;

    return {
        ...state,
        discountedTotal: finalTotal
    };
}
}

const store = createStore(reducer)

store.dispatch({
    type: "addItem",
    payload: {
        itemName: "Mango",
        itemId: 1,
        itemQ: 2,
        itemPrice: 80
    }
});
console.log("After Add Item:", store.getState());


store.dispatch({
    type:"quantity_add",
    payload: 1
    
})

console.log("After quantity_added Item:", store.getState());
store.dispatch({
    type: "totalPrice"
});
console.log("After total Price Item:", store.getState());

store.dispatch({
    type:"quantity_remove",
    payload: 1
})
console.log("After quantuty remove Item:", store.getState());
store.dispatch({
    type: "discountedTotal"
});
console.log("After discountedTotal Item:", store.getState());
store.dispatch({
    type: "remove",
    payload: 1
});
console.log("After remove Item:", store.getState());

export default store