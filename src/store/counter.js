import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, isShow: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
