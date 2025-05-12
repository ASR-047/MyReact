// import { configureStore } from "@reduxjs/toolkit";

// import cartReducer from  "./cartSlice"

// const appStore = configureStore({

//     reducer : {
//         cart: cartReducer,

//     },
// });
// export default appStore;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Ensure this path is correct

const appStore = configureStore({
  reducer: {
    cart: cartReducer, // Ensure this key matches the slice name
  },
});

export default appStore;
