import "../Preloader/Preloader.css";

function Preloader() {
  return (
    <section className="preloader">
      <div className="preloader__container">
        <div className="circle-preloader"></div>
        <p className="circle-preloader__text">Searching for news...</p>
      </div>
    </section>
  );
}

export default Preloader;
