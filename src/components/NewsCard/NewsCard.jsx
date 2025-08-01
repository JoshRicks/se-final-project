import "../NewsCard/NewsCard.css";
import bookmark from "../../assets/bookmark.svg";
import savedBookmark from "../../assets/saved-bookmark.svg";
import trash from "../../assets/trash.svg";

function NewsCard({
  article,
  newsSearchData,
  setSavedArticles,
  savedArticles,
  isLoggedIn,
  location,
  handleLoginClick,
}) {
  const handleSaveClick = () => {
    const newSavedArticle = {
      keyword: newsSearchData.q,
      urlToImage: article.urlToImage,
      title: article.title,
      publishedAt: article.publishedAt,
      description: article.description,
      source: { name: article.source.name },
    };
    isSaved
      ? setSavedArticles(
          savedArticles.filter((prev) => prev.title !== article.title)
        )
      : setSavedArticles((prev) => [...prev, newSavedArticle]);
    console.log(newSavedArticle);
  };

  const isSaved = savedArticles.some((saved) => saved.title === article.title);
  const saveImage = isSaved ? savedBookmark : bookmark;

  const date = new Date(article.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <li className="news-card">
      <div className="news-card__save-container">
        {location.pathname === "/saved-news" ? (
          <>
            <p className="news-card__keyword">{article.keyword}</p>
            <p className="news-card__text">Remove from saved</p>
            <button className="news-card__save-btn" onClick={handleSaveClick}>
              <img src={trash} alt="save" className="news-card__trash-icon" />
            </button>
          </>
        ) : isLoggedIn ? (
          <button
            className="news-card__save-btn news-card__save-btn-v2"
            onClick={handleSaveClick}
          >
            <img src={saveImage} alt="save" className="news-card__save-icon" />
          </button>
        ) : (
          <>
            <p className="news-card__text">Sign in to save articles</p>
            <button className="news-card__save-btn" onClick={handleLoginClick}>
              <img
                src={saveImage}
                alt="save"
                className="news-card__save-icon"
              />
            </button>
          </>
        )}
      </div>
      <img
        src={article.urlToImage}
        alt={article.title}
        className="news-card__img"
      />
      <p className="news-card__date">{date}</p>
      <h4 className="news-card__title">{article.title}</h4>
      <p className="news-card__description">{article.description}</p>
      <p className="news-card__source">{article.source.name}</p>
    </li>
  );
}

export default NewsCard;
