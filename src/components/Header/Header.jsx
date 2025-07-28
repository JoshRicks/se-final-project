import { Link } from "react-router-dom";

import "../Header/Header.css";
import SearchForm from "../SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";
import SavedDetails from "../SavedDetails/SavedDetails";

function Header({ onSearch, loginClick, location, savedArticles }) {
  const headerClassName =
    location.pathname === "/saved-articles"
      ? "header articles-header"
      : "header";
  return (
    <header className={headerClassName}>
      <Navigation loginClick={loginClick} location={location} />
      {location.pathname === "/saved-articles" ? (
        <SavedDetails savedArticles={savedArticles} />
      ) : (
        <SearchForm onSearch={onSearch} />
      )}
    </header>
  );
}

export default Header;
