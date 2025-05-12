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

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
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
    clearCart: (state) => {
      state.items = [];
    },
  },
});



export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer; // This is crucial
