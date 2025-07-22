import "../Main/Main.css";
import Cards from "../Cards/Cards";
import Preloader from "../Preloader/Preloader";

function Main({
  newsCardsData,
  isLoading,
  searched,
  searchApiError,
  searchFailure,
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
          />
        )
      ) : null}
    </main>
  );
}

export default Main;
