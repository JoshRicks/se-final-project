import "../NewsCard/NewsCard.css";

function NewsCard({ article }) {
  return (
    <div className="news-card">
      <div className="news-card__save-container"></div>
      <img
        src={article.urlToImage}
        alt={article.title}
        className="news-card__img"
      />
      <p className="news-card__date">{article.publishedAt}</p>
      <h4 className="news-card__title">{article.title}</h4>
      <p className="news-card__description">{article.description}</p>
      <p className="news-card__source">{article.source.name}</p>
    </div>
  );
}

export default NewsCard;
