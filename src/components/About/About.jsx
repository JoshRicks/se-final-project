import "../About/About.css";
import authorImg from "../../assets/author.jpg";

function About() {
  return (
    <section className="about">
      <img src={authorImg} alt="Photo of Author" className="about__image" />
      <div className="about__content">
        <h3 className="about__title">About the Author</h3>
        <p className="about__description">
          Josh Ricks is a Fullstack Software Develeoper with expertise in React,
          Javascript, Express, Html and Css. Also a lover of all things Nerd.
          <br />
          <br />I have just completed a 10 month course with TripleTen it taught
          me a lot about devleopment and professional growth.
        </p>
      </div>
    </section>
  );
}

export default About;
