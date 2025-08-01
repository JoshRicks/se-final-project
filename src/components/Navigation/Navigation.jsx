import { Link } from "react-router-dom";

import "../Navigation/Navigation.css";
import logoutDark from "../../assets/logout-dark.svg";
import logoutLight from "../../assets/logout-light.svg";
import menuLight from "../../assets/menu-light.svg";
import menuDark from "../../assets/menu-dark.svg";

function Navigation({
  loginClick,
  location,
  isLoggedIn,
  logoutClick,
  handleMobileMenuClick,
}) {
  const titleClassName =
    location.pathname === "/saved-news"
      ? "navigation__title navigation__title_type_dark"
      : "navigation__title";
  const homeClassName =
    location.pathname === "/saved-news"
      ? "navigation__home navigation__home_type_dark"
      : "navigation__home";
  const btnClassName =
    location.pathname === "/saved-news"
      ? "navigation__button navigation__button_type_dark"
      : "navigation__button";
  const contentClassName =
    location.pathname === "/saved-news"
      ? "navigation__content navigation__conten_type_dark"
      : "navigation__content";
  const articleClassName =
    location.pathname === "/saved-news"
      ? "navigation__articles navigation__articles_type_dark"
      : "navigation__articles";
  const logoutImg =
    location.pathname === "/saved-news" ? logoutDark : logoutLight;
  const logoutBtnClassName =
    location.pathname === "/saved-news"
      ? "navigation__logout-btn navigation__logout-btn_type_dark"
      : "navigation__logout-btn";
  const menuImg = location.pathname === "/saved-news" ? menuDark : menuLight;

  return (
    <div className={contentClassName}>
      <Link to="/" className="navigation__link navigation__link_type_logo">
        <h1 className={titleClassName}>NewsExplorer</h1>
      </Link>
      <button className="navigation__menu-btn" onClick={handleMobileMenuClick}>
        <img src={menuImg} alt="menu" className="navigation__menu-icon" />
      </button>
      <Link to="/" className="navigation__link navigation__link_type_home">
        <p className={homeClassName}>Home</p>
      </Link>
      {isLoggedIn ? (
        <>
          <Link
            to="/saved-news"
            className="navigation__link navigation__link_type_articles"
          >
            <p className={articleClassName}>Saved articles</p>
          </Link>
          <button className={logoutBtnClassName} onClick={logoutClick}>
            Elise
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
