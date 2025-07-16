import { Link } from "react-router-dom";

import "../Header/Header.css";
import SearchForm from "../SearchForm/SearchForm";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__logo-link">
          <h1 className="header__title">NewsExplorer</h1>
        </Link>
        <Link to="/" className="header__link">
          <p className="header__text">Home</p>
        </Link>
        <button className="header__button">Sign In</button>
      </div>
      <SearchForm />
    </header>
  );
}

export default Header;
