import "../Main/Main.css";
import NewsCard from "../NewsCard/NewsCard";

function Main({ newsCardsData }) {
  return (
    <main className="main">
      <section className="cards">
        <h3 className="cards__title">Search Results</h3>
        <ul className="cards__list">
          {newsCardsData
            .filter((articles) => {
              return articles;
            })
            .map((article) => {
              return <NewsCard article={article} />;
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
