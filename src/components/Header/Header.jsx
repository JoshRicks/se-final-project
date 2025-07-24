import { Link } from "react-router-dom";

import "../Header/Header.css";
import SearchForm from "../SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";

function Header({ onSearch, loginClick }) {
  return (
    <header className="header">
      <Navigation loginClick={loginClick} />
      <SearchForm onSearch={onSearch} />
    </header>
  );
}

export default Header;
