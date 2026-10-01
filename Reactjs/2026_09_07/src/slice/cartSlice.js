
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",

  initialState: {
    item: [
      {
        id: 1,
        product_name: "Oranges",
        quantity: 1,
        price: 100,
      },
      {
        id: 2,
        product_name: "Mangoes",
        quantity: 1,
        price: 100,
      },
      {
        id: 3,
        product_name: "Banana",
        quantity: 1,
        price: 100,
      },
      {
        id: 4,
        product_name: "Apple",
        quantity: 1,
        price: 100,
      },
    ],

    addedItem: [],

    discount: 2,
    itemTotal: 0,
  },

  reducers: {
    // ADD ITEM
    add: (state, action) => {
      // Find product using ID
      const item = state.item.find(
        (item) => item.id === action.payload
      );

      // Check if product is already added
      const alreadyAdded = state.addedItem.some(
        (item) => item.id === action.payload
      );

      // Add only if product exists and isn't already added
      if (item && !alreadyAdded) {
        state.addedItem.push(item);
      }
    },

    // REMOVE ITEM
    remove: (state, action) => {
      state.addedItem = state.addedItem.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
