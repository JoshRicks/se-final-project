import { useEffect, useState } from "react";
import "../SavedDetails/SavedDetails.css";

function SavedDetails({ savedArticles }) {
  const [count, setCount] = useState(0);
  const [displayKeywords, setDisplayKeywords] = useState("");
  const username = "Elise";

  useEffect(() => {
    if (!savedArticles) return;

    setCount(savedArticles.length);

    const uniqueKeywords = [
      ...new Set(savedArticles.map((article) => article.keyword)),
    ];

    if (uniqueKeywords.length === 0) {
      setDisplayKeywords("");
    } else if (uniqueKeywords.length === 1) {
      setDisplayKeywords(uniqueKeywords[0]);
    } else if (uniqueKeywords.length === 2) {
      setDisplayKeywords(`${uniqueKeywords[0]}, ${uniqueKeywords[1]}`);
    } else {
      setDisplayKeywords(
        `${uniqueKeywords[0]}, ${uniqueKeywords[1]}, and ${
          uniqueKeywords.length - 2
        } others`
      );
    }
  }, [savedArticles]);

  return (
    <div className="saved-details">
      <p className="saved-details__text">Saved articles</p>
      <h4 className="saved-details__title">
        {`${username}, you have ${count} saved `}
        <br className="media-550" />
        {`articles`}
      </h4>
      <div className="saved-details__description-container">
        <p className="saved-details__description-title">
          By keywords:
          <span className="saved-details-description-keywords">{` ${displayKeywords}`}</span>
        </p>
      </div>
    </div>
  );
}
export default SavedDetails;
