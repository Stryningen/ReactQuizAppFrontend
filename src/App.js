import Question from "./Question";
import Alternatives from "./Alternatives";
import Header from "./Header";

function App() {
  return (
    <main className="flex-container-column" id="app">
      <Header />
      <section id="title">
        <h1>Simple React Quiz App with API</h1>
      </section>
      <Question />
      <Alternatives />
    </main>
  );
}

export default App;
