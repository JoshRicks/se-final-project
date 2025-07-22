import "../SearchFailed/SearchFailed.css";
import notFoundImg from "../../assets/not-found.png";

function SearchFailed({ searchApiError }) {
  return (
    <div className="search-failed">
      <img
        src={notFoundImg}
        alt="search not found"
        className="search-failed__img"
      />
      {searchApiError ? (
        <>
          <h4 className="search-failed__title">Search failed</h4>
          <p className="search-failed__text">
            Sorry, something went wrong during the request. Please try again
            later.
          </p>
        </>
      ) : (
        <>
          <h4 className="search-failed__title">Nothing found</h4>
          <p className="search-failed__text">
            Sorry, but nothing matched<br></br> your search terms.
          </p>
        </>
      )}
    </div>
  );
}

export default SearchFailed;
