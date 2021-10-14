import { act } from "react-dom/test-utils";
import { createStore } from "redux";

const counterReducer = (state = { counter: 0, isShow: true }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      isShow: state.isShow,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      isShow: state.isShow,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      isShow: state.isShow,
    };
  }
  if (action.type === "toggle") {
    return {
      counter: state.counter,
      isShow: !state.isShow,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
