import { useEffect, useState } from "react";
import "../SavedDetails/SavedDetails.css";

function SavedDetails({ savedArticles }) {
  const [count, setCount] = useState(0);
  const [keywords, setKeywords] = useState([]);
  useEffect(() => {
    if (savedArticles === null) {
      return;
    } else {
      setCount(savedArticles.length);
      setKeywords(
        savedArticles
          .map((article) => {
            return article.keyword;
          })
          .join(", ")
      );
    }
  }, [savedArticles]);
  const username = "Elise";

  return (
    <div className="saved-details">
      <p className="saved-details__text">Saved articles</p>
      <h4 className="saved-details__title">
        {`${username}, you have ${count} saved`}
        <br />
        {`articles`}
      </h4>
      <div className="saved-details__description-container">
        <p className="saved-details__description-title">
          By keywords:
          <span className="saved-details-description-keywords">{` ${keywords}`}</span>
        </p>
      </div>
    </div>
  );
}
export default SavedDetails;
