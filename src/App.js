import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/ui-slice";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const isShowCart = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    const sendCartData = async () => {
      dispatch(
        uiActions.notif({
          status: "pending",
          title: "Sending...",
          message: "sending data...",
        })
      );
      const response = await fetch(
        "https://react-http-89fad-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error("gagal kirim data...");
      }

      dispatch(
        uiActions.notif({
          status: "success",
          title: "success...",
          message: "berhasil kirim data...",
        })
      );
    };
    sendCartData().catch(() => {
      dispatch(
        uiActions.notif({
          status: "error",
          title: "error..",
          message: "gagal kirim data...",
        })
      );
    });
  }, [cart]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isShowCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
