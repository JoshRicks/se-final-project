import { Link } from "react-router-dom";

import "../Navigation/Navigation.css";

function Navigation() {
  return (
    <div className="navigation__content">
      <Link to="/" className="navigation__logo-link">
        <h1 className="navigation__title">NewsExplorer</h1>
      </Link>
      <Link to="/" className="navigation__link">
        <p className="navigation__text">Home</p>
      </Link>
      <button className="navigation__button">Sign In</button>
    </div>
  );
}

export default Navigation;
