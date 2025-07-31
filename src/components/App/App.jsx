import { useEffect, useRef, useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";
import { getNews } from "../../utils/newsApi";
import Main from "../Main/Main";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import Profile from "../Profile/Profile";
import validation from "../../utils/validation";
import auth from "../../utils/auth";
import user from "../../utils/constants";
import MobileMenu from "../MobileMenu/MobileMenu";

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
  const [savedArticles, setSavedArticles] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [registerError, setRegisterError] = useState(false);

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

  useEffect(() => {
    validation.enableValidation(validation.config);
  }, []);

  const location = useLocation();
  const navigate = useNavigate();
  const formRef = useRef(null);

  const handleSearchSubmit = (e, data) => {
    e.preventDefault();
    setIsLoading(true);
    setSearched(true);
    setNewsSearchData({ q: data });
    setNewsCardsData([]);
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setActiveModal("register-modal");
    if (formRef.current) {
      formRef.current.reset();
    }
    setLoginData({ email: "", password: "" });
    validation.resetValidation(validation.config);
  };

  const handleLogInClick = (e) => {
    e.preventDefault();
    setActiveModal("login-modal");
    if (formRef.current) {
      formRef.current.reset();
    }
    setRegisterData({ email: "", password: "", username: "" });
    validation.resetValidation(validation.config);
  };

  const handleMobileMenuClick = () => {
    setActiveModal("mobile-menu");
  };

  const closeActiveModal = () => {
    setActiveModal("");
    if (formRef.current) {
      formRef.current.reset();
    }
    setLoginData({ email: "", password: "" });
    setRegisterData({ email: "", password: "", username: "" });
    validation.resetValidation(validation.config);
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterError(false);
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegisterError = (e) => {
    const { value } = e.target;
    if (value === user.email) {
      setRegisterError(true);
    }
  };

  const handleLogIn = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    auth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          setIsLoggedIn(true);
          const redirectPath = location.state?.from?.pathname || "/profile";
          navigate(redirectPath);
        }
      })
      .then(closeActiveModal())
      .catch(console.error);
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
    navigate("/");
    closeActiveModal();
  };

  return (
    <div className="page">
      <MobileMenu
        isOpen={activeModal === "mobile-menu"}
        isLoggedIn={isLoggedIn}
        onClose={closeActiveModal}
        loginClick={handleLogInClick}
        logoutClick={handleLogOut}
      />
      <RegisterModal
        isOpen={activeModal === "register-modal"}
        onClose={closeActiveModal}
        loginClick={handleLogInClick}
        formRef={formRef}
        data={registerData}
        handleChange={handleRegisterChange}
        handleRegisterError={handleRegisterError}
        registerError={registerError}
      />
      <LoginModal
        isOpen={activeModal === "login-modal"}
        onClose={closeActiveModal}
        registerClick={handleRegisterClick}
        formRef={formRef}
        data={loginData}
        handleChange={handleLoginChange}
        handleLogIn={handleLogIn}
      />
      <div className="page__content">
        <Header
          onSearch={handleSearchSubmit}
          loginClick={handleLogInClick}
          location={location}
          savedArticles={savedArticles}
          isLoggedIn={isLoggedIn}
          logoutClick={handleLogOut}
          handleMobileMenuClick={handleMobileMenuClick}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main
                  isLoading={isLoading}
                  searched={searched}
                  newsCardsData={newsCardsData}
                  searchApiError={searchApiError}
                  searchFailure={searchFailure}
                  newsSearchData={newsSearchData}
                  setSavedArticles={setSavedArticles}
                  savedArticles={savedArticles}
                  isLoggedIn={isLoggedIn}
                  location={location}
                  handleLoginClick={handleLogInClick}
                />
                <About />
              </>
            }
          />
          <Route
            path="/saved-news"
            element={
              <Profile
                savedArticles={savedArticles}
                newsSearchData={newsSearchData}
                setSavedArticles={setSavedArticles}
                location={location}
              />
            }
          />
          <Route
            path="*"
            element={
              isLoggedIn ? (
                <Navigate to="/saved-news" replace />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
