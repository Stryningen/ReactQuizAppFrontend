import { useAppContext } from "./AppContextProvider";

function MadeWithModule() {
  const { setShowMadeWithModule, showMadeWithModule } = useAppContext();
  const triviaUrl = "https://opentdb.com/";
  const githubUrl = "#";

  const closeModule = () => {
    setShowMadeWithModule(false);
  };

  return showMadeWithModule ? (
    <aside
      onClick={(e) => {
        if (e.currentTarget === e.target) closeModule();
      }}
    >
      <section
        id="result-module"
        className="module-container flex-container-column"
      >
        <h2>
          This app was made with{" "}
          <a target="blank" href={triviaUrl}>
            Open Trivia Database
          </a>
        </h2>
        <p>
          All the questions comes from opentbd and this is just a
          frontendsolution for practicing React. The code is available at{" "}
          <a target="blank" href={githubUrl}>
            github
          </a>
        </p>

        <button
          className="btn btn-border close-module-btn"
          onClick={closeModule}
        >
          Close
        </button>
      </section>
    </aside>
  ) : null;
}

export default MadeWithModule;
