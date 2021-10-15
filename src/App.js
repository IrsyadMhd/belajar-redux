import { Fragment } from "react";

import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Header isLogin={isAuthenticated} dispatch={dispatch} />
      {!isAuthenticated && <Auth dispatch={dispatch} />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
