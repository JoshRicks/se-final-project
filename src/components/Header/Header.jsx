import { Link } from "react-router-dom";

import "../Header/Header.css";
import SearchForm from "../SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <Navigation />
      <SearchForm />
    </header>
  );
}

export default Header;
