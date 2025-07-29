import { Link } from "react-router-dom";

import "../Navigation/Navigation.css";
import logoutDark from "../../assets/logout-dark.png";
import logoutLight from "../../assets/logout-light.png";

function Navigation({ loginClick, location, isLoggedIn }) {
  const titleClassName =
    location.pathname === "/saved-articles"
      ? "navigation__title navigation__title-v2"
      : "navigation__title";
  const homeClassName =
    location.pathname === "/saved-articles"
      ? "navigation__home navigation__home-v2"
      : "navigation__home";
  const btnClassName =
    location.pathname === "/saved-articles"
      ? "navigation__button navigation__button-v2"
      : "navigation__button";
  const contentClassName =
    location.pathname === "/saved-articles"
      ? "navigation__content navigation__content-v2"
      : "navigation__content";
  const articleClassName =
    location.pathname === "/saved-articles"
      ? "navigation__articles navigation__articles-v2"
      : "navigation__articles";
  const logoutImg =
    location.pathname === "/saved-articles" ? logoutDark : logoutLight;
  const logoutBtnClassName =
    location.pathname === "/saved-articles"
      ? "navigation__logout-btn navigation__logout-btn-v2"
      : "navigation__logout-btn";

  return (
    <div className={contentClassName}>
      <Link to="/" className="navigation__logo-link">
        <h1 className={titleClassName}>NewsExplorer</h1>
      </Link>
      <Link to="/" className="navigation__home-link">
        <p className={homeClassName}>Home</p>
      </Link>
      {isLoggedIn ? (
        <>
          <Link to="/saved-articles" className="navigation__articles-link">
            <p className={articleClassName}>Saved articles</p>
          </Link>
          <button className={logoutBtnClassName}>
            Elise{" "}
            <img
              src={logoutImg}
              alt="Logout"
              className="navigation__logout-img"
            />
          </button>
        </>
      ) : (
        <button onClick={loginClick} className={btnClassName}>
          Sign In
        </button>
      )}
    </div>
  );
}

export default Navigation;
