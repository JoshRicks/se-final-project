import { Link } from "react-router-dom";

import "../Navigation/Navigation.css";

function Navigation({ loginClick, location }) {
  const titleClassName =
    location.pathname === "/saved-articles"
      ? "navigation__title navigation__title-v2"
      : "navigation__title";
  const textClassName =
    location.pathname === "/saved-articles"
      ? "navigation__text navigation__text-v2"
      : "navigation__text";
  const btnClassName =
    location.pathname === "/saved-articles"
      ? "navigation__button navigation__button-v2"
      : "navigation__button";
  const contentClassName =
    location.pathname === "/saved-articles"
      ? "navigation__content navigation__content-v2"
      : "navigation__content";

  return (
    <div className={contentClassName}>
      <Link to="/" className="navigation__logo-link">
        <h1 className={titleClassName}>NewsExplorer</h1>
      </Link>
      <Link to="/" className="navigation__link">
        <p className={textClassName}>Home</p>
      </Link>
      <button onClick={loginClick} className={btnClassName}>
        Sign In
      </button>
    </div>
  );
}

export default Navigation;
