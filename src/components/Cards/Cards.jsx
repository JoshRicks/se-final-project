import { useEffect, useState } from "react";
import "../Cards/Cards.css";
import NewsCard from "../NewsCard/NewsCard";
import SearchFailed from "../SearchFailed/SearchFailed";

function Cards({
  newsCardsData,
  searchApiError,
  searchFailure,
  newsSearchData,
  setSavedArticles,
  savedArticles,
}) {
  const [cardTotal, setCardTotal] = useState(3);
  const [visibleCards, setVisibleCards] = useState([]);
  const cardsPerPage = 3;

  useEffect(() => {
    setVisibleCards([]);
    showMore();
  }, [newsCardsData]);

  const showMore = () => {
    if (newsCardsData.length === 0) {
      return;
    } else {
      const nextCardSet = cardTotal + cardsPerPage;
      const nextArticles = newsCardsData
        .filter((articles) => {
          return articles;
        })
        .slice(cardTotal, nextCardSet);
      setVisibleCards((prev) => [...prev, ...nextArticles]);
      setCardTotal(nextCardSet);
    }
  };
  return (
    <section className="cards">
      {searchFailure ? (
        <SearchFailed searchApiError={searchApiError} />
      ) : (
        <>
          <h3 className="cards__title">Search Results</h3>
          <ul className="cards__list">
            {visibleCards.map((article) => {
              return (
                <NewsCard
                  key={article.title}
                  article={article}
                  newsSearchData={newsSearchData}
                  setSavedArticles={setSavedArticles}
                  savedArticles={savedArticles}
                />
              );
            })}
          </ul>
          {cardTotal < newsCardsData.length && (
            <button className="cards__button" onClick={showMore}>
              Show more
            </button>
          )}
        </>
      )}
    </section>
  );
}

export default Cards;
