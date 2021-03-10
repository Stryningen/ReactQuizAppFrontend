import { useAppContext } from "./AppContextProvider";

function Header() {
  const {
    generateQuiz,
    setShowOptionsModule,
    setIsLoading,
    setShowMadeWithModule,
  } = useAppContext();

  const handleGenerateBasicQuiz = (e) => {
    e.preventDefault();
    setIsLoading(true);
    generateQuiz();
  };

  return (
    <header>
      <button
        className="btn btn-border btn-header"
        onClick={(e) => handleGenerateBasicQuiz(e)}
      >
        New Quiz
      </button>
      <button
        className="btn btn-border btn-header"
        onClick={() => setShowOptionsModule(true)}
      >
        Options
      </button>
      <button
        className="btn btn-border btn-header"
        onClick={() => setShowMadeWithModule(true)}
      >
        Made With
      </button>
    </header>
  );
}

export default Header;
