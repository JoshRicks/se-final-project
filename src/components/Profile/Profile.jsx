import NewsCard from "../NewsCard/NewsCard";
import "../Profile/Profile.css";

function Profile({
  savedArticles,
  newsSearchData,
  setSavedArticles,
  location,
}) {
  return (
    <section className="saved-articles">
      <ul className="saved-articles__list">
        {savedArticles.map((article) => {
          return (
            <NewsCard
              key={article.title}
              article={article}
              savedArticles={savedArticles}
              newsSearchData={newsSearchData}
              setSavedArticles={setSavedArticles}
              location={location}
            />
          );
        })}
      </ul>
    </section>
  );
}
export default Profile;
