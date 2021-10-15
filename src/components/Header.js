import { authActions } from "../store/auth";
import classes from "./Header.module.css";

const Header = (props) => {
  const onClickHandler = () => {
    props.dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {props.isLogin && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>

            <li>
              <a href="/">My Sales</a>
            </li>

            <li>
              <button onClick={onClickHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
