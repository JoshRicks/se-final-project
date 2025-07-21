import { useState, useEffect } from "react";
import "../SearchForm/SearchForm.css";

function SearchForm({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleNewSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form
      action="submit"
      className="search-form"
      onSubmit={(e) => {
        onSearch(e, search);
      }}
    >
      <h2 className="search-form__title">What's going on in the world?</h2>
      <p className="search-form__text">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <label htmlFor="search-input" className="search-form__label">
        <input
          type="text"
          className="search-form__input"
          id="search-input"
          placeholder="Enter topic"
          onChange={handleNewSearch}
          value={search}
        />
        <button className="search-form__button" type="submit">
          Search
        </button>
      </label>
    </form>
  );
}

export default SearchForm;
