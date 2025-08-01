import { Link } from "react-router-dom";

import "./MobileMenu.css";
import logoutLight from "../../assets/logout-light.svg";
import closeBtn from "../../assets/close.svg";

function MobileMenu({ isOpen, isLoggedIn, onClose, loginClick, logoutClick }) {
  const containerClassName = isLoggedIn
    ? "mobile-menu__container mobile-menu__container-v2"
    : "mobile-menu__container";
  return (
    <div
      className={`mobile-menu ${isOpen ? "modal_opened" : ""}`}
      id="mobile-menu"
    >
      <div className={containerClassName}>
        <div className="mobile-menu__header-container">
          <h3 className="mobile-menu__title">NewsExplorer</h3>
          <button className="mobile-menu__close-btn" onClick={onClose}>
            <img
              src={closeBtn}
              alt="Close"
              className="mobile-menu__close-img"
            />
          </button>
        </div>
        <Link className="mobile-menu__home" to="/">
          Home
        </Link>
        {isLoggedIn ? (
          <>
            <Link className="mobile-menu__articles" to="/saved-news">
              Saved Articles
            </Link>
            <button className="mobile-menu__logout-btn" onClick={logoutClick}>
              Elise
              <img
                src={logoutLight}
                alt="Logout"
                className="mobile-menu__logout-img"
              />
            </button>
          </>
        ) : (
          <>
            <button className="mobile-menu__login-btn" onClick={loginClick}>
              Sign in
            </button>
          </>
        )}
      </div>
    </div>
  );
}
export default MobileMenu;
