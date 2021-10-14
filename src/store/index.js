import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, isShow: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggleHandler(state) {
      state.isShow = !state.isShow;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
