import { Link } from "react-router-dom";

import "../Footer/Footer.css";

import linkedIn from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copywrite">©2025 Josh Ricks, Powered by News API</p>
      <div className="footer__navigation">
        <ul className="footer__links">
          <li className="footer__home">
            <Link to="/" className="footer__link">
              <p className="footer__text">Home</p>
            </Link>
          </li>
          <li className="footer__link footer__link_type_tripleten">
            <a
              href="https://tripleten.com/"
              target="_blank"
              className="footer__website"
            >
              <p className="footer__text">TripleTen</p>
            </a>
          </li>
        </ul>
        <div className="footer__icon-container footer__icon-container_type_github">
          <a href="https://github.com/JoshRicks" target="_blank">
            <img src={github} alt="GitHub" className="footer__icon" />
          </a>
        </div>
        <div className="footer__icon-container footer__icon-container_type_linkedin">
          <a
            href="https://www.linkedin.com/in/josh-ricks-42aa86b7/"
            target="_blank"
          >
            <img
              src={linkedIn}
              alt="linkedin"
              className="footer__icon footer__icon_type_linkedin"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
