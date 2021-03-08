import Question from "./Question";
import Alternatives from "./Alternatives";
import Header from "./Header";
import InfoContainer from "./InfoContainer";
import ResultModule from "./ResultModule";

function App() {
  return (
    <>
      <main className="flex-container-column" id="app">
        <Header />
        <InfoContainer />
        <Question />
        <Alternatives />
      </main>
      <ResultModule />
    </>
  );
}

export default App;
