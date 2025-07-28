import NewsCard from "../NewsCard/NewsCard";
import "../Profile/Profile.css";

function Profile({ savedArticles, newsSearchData, setSavedArticles }) {
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
            />
          );
        })}
      </ul>
    </section>
  );
}
export default Profile;
