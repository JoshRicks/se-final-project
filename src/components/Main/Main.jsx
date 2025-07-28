import "../Main/Main.css";
import Cards from "../Cards/Cards";
import Preloader from "../Preloader/Preloader";

function Main({
  newsCardsData,
  isLoading,
  searched,
  searchApiError,
  searchFailure,
  newsSearchData,
  setSavedArticles,
  savedArticles,
}) {
  return (
    <main className="main">
      {searched ? (
        isLoading ? (
          <Preloader />
        ) : (
          <Cards
            newsCardsData={newsCardsData}
            searchApiError={searchApiError}
            searchFailure={searchFailure}
            newsSearchData={newsSearchData}
            setSavedArticles={setSavedArticles}
            savedArticles={savedArticles}
          />
        )
      ) : null}
    </main>
  );
}

export default Main;
