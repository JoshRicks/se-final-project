import "./App.css";
import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { getNews } from "../../utils/newsApi";
import Main from "../Main/Main";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";

function App() {
  const [newsSearchData, setNewsSearchData] = useState({
    q: "",
  });
  const [newsCardsData, setNewsCardsData] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [searchFailure, setSearchFailure] = useState(false);
  const [searchApiError, setSearchApiError] = useState(false);

  useEffect(() => {
    if (newsSearchData.q === "") {
      return;
    }

    setIsLoading(true);
    setSearchFailure(false);
    setSearchApiError(false);

    getNews(newsSearchData)
      .then((data) => {
        if (!data.articles || data.articles.length === 0) {
          setSearchFailure(true);
        } else {
          setNewsCardsData(data.articles);
          setSearchFailure(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setSearchApiError(true);
        setSearchFailure(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
    setIsLoading(true);
    setSearched(true);
    setNewsSearchData({ q: data });
    setNewsCardsData([]);
  };

  const handleRegisterClick = () => {
    setActiveModal("register-modal");
  };

  const handleLogInClick = () => {
    setActiveModal("login-modal");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  return (
    <div className="page">
      <RegisterModal
        isOpen={activeModal === "register-modal"}
        onClose={closeActiveModal}
        loginClick={handleLogInClick}
      />
      <LoginModal
        isOpen={activeModal === "login-modal"}
        onClose={closeActiveModal}
        registerClick={handleRegisterClick}
      />
      <div className="page__content">
        <Header onSearch={handleSearchSubmit} loginClick={handleLogInClick} />
        <Main
          isLoading={isLoading}
          searched={searched}
          newsCardsData={newsCardsData}
          searchApiError={searchApiError}
          searchFailure={searchFailure}
        />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
