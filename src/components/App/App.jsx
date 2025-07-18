import "./App.css";
import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { getNews } from "../../utils/newsApi";
import Main from "../Main/Main";

function App() {
  const [newsSearchData, setNewsSearchData] = useState({
    q: "",
  });
  const [newsCardsData, setNewsCardsData] = useState([]);
  const [activeModal, setActiveModal] = useState("");

  useEffect(() => {
    if (newsSearchData.q === "") {
      return;
    } else
      getNews(newsSearchData)
        .then((data) => {
          setNewsCardsData(data.articles);
        })
        .catch(console.error);
  }, [newsSearchData]);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [activeModal]);

  const handleSearchSubmit = (e, data) => {
    e.preventDefault();
    setNewsSearchData({ q: data });
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header onSearch={handleSearchSubmit} />
        <Main newsCardsData={newsCardsData} />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
