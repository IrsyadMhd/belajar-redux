import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

// const initialItemCounter = { counter: 0, isShow: false };

// const itemCounterSlice = createSlice({
//   name: "item",
//   initialState: initialItemCounter,
//   reducers: {
//     addItem(state) {
//       state.counter++;
//     },
//     decItem(state) {
//       state.counter--;
//     },
//     toggle(state) {
//       state.isShow = !state.isShow;
//     },
//   },
// });

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

// export const itemActions = itemCounterSlice.actions;

export default store;
