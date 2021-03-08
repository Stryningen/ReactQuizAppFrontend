import Question from "./Question";
import Alternatives from "./Alternatives";
import Header from "./Header";
import InfoContainer from "./InfoContainer";
import ResultModule from "./ResultModule";
import OptionsModule from "./OptionsModule";

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
      <OptionsModule />
    </>
  );
}

export default App;
