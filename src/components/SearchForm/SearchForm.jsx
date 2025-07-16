import "../SearchForm/SearchForm.css";

function SearchForm() {
  return (
    <form action="submit" className="search-form">
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
        />
        <button className="search-form__button" type="submit">
          Search
        </button>
      </label>
    </form>
  );
}

export default SearchForm;
