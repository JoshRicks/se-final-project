import { Link } from "react-router-dom";

import "../Footer/Footer.css";

import facebook from "../../assets/facebook.png";
import github from "../../assets/github.png";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copywrite">
        © 2025 Josh Ricks, Powered by News API
      </p>
      <ul className="footer__links">
        <li className="footer__home">
          <Link to="/" className="footer__link">
            <p className="footer__text">Home</p>
          </Link>
        </li>
        <li className="footer__tripleten">
          <a href="https://tripleten.com/" className="footer__website">
            <p className="footer__text">TripleTen</p>
          </a>
        </li>
        <li className="footer__github">
          <a href="https://github.com/JoshRicks">
            <img src={github} alt="GitHub" className="footer__icon" />
          </a>
        </li>
        <li className="footer__facebook">
          <a href="https://www.facebook.com/tripleten.tech">
            <img src={facebook} alt="facebook" className="footer__icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
