import { createSlice } from "@reduxjs/toolkit";

import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.itemId === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.itemId === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.itemId !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.notif({
        status: "pending",
        title: "Sending...",
        message: "sending data...",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-89fad-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );
      if (!response.ok) {
        throw new Error("failed!");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.notif({
          status: "success",
          title: "success...",
          message: "berhasil kirim data...",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.notif({
          status: "error",
          title: "error..",
          message: "gagal kirim data...",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice;
