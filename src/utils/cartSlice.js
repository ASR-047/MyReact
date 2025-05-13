// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addItem: (state, action) => {
//       state.items.push(action.payload);
//     },
//     removeItem: (state, action) => {
//       state.items.pop();
//     },
//     clearCart: (state) => {
//       state.items.length = 0;
//     },
//   },
// });

// export const { addItem, removeItem, clearCart } = cartSlice.actions;

// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";


//this slice (cartSlice) is a function that takes a configuration to create slice
const cartSlice = createSlice({
  name: "cart", //name of the slice
  initialState: {
    items: [],
  },
  reducers: { //we will create reducres and actions here
    addItem: (state, action) => {
      //we are directly mutating state here.
      state.items.push(action.payload); //The payload is the data that comes with an action when it's dispatched.
      //  It's the "content" or "information" that the action carries to the reducer.
    },
    // removeItem: (state) => {
    //   state.items.pop();
    // },

    removeItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      if (index !== -1) {
        state.items.splice(index, 1); // Remove one matching item
      }
    },

    // removeItem : (state,action) => {
    //           const index = action.payload.card.info.id;
    //           state.items = state.items.filter( item => item.card.info.id !== index);
    // },
    
    clearCart: (state) => {
      state.items = [];
    },
  },
});



export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer; // This is crucial
