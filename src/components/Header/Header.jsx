import { Link } from "react-router-dom";

import "../Header/Header.css";
import SearchForm from "../SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";
import SavedDetails from "../SavedDetails/SavedDetails";

function Header({
  onSearch,
  loginClick,
  location,
  savedArticles,
  isLoggedIn,
  logoutClick,
}) {
  const headerClassName =
    location.pathname === "/saved-news" ? "header articles-header" : "header";
  return (
    <header className={headerClassName}>
      <Navigation
        loginClick={loginClick}
        location={location}
        isLoggedIn={isLoggedIn}
        logoutClick={logoutClick}
      />
      {location.pathname === "/saved-news" ? (
        <SavedDetails savedArticles={savedArticles} />
      ) : (
        <SearchForm onSearch={onSearch} />
      )}
    </header>
  );
}

export default Header;
