import "../Main/Main.css";
import Cards from "../Cards/Cards";
import Preloader from "../Preloader/Preloader";

function Main({ newsCardsData }) {
  return (
    <main className="main">
      <Cards newsCardsData={newsCardsData} />
      <Preloader />
    </main>
  );
}

export default Main;
