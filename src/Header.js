import { useAppContext } from "./AppContextProvider";

function Header() {
  const { generateQuiz } = useAppContext();

  const handleGenerateBasicQuiz = (e) => {
    e.preventDefault();
    generateQuiz();
  };

  return (
    <header>
      <button
        className="btn btn-border btn-header"
        onClick={(e) => handleGenerateBasicQuiz(e)}
      >
        Quiz
      </button>
      <button className="btn btn-border btn-header">Options</button>
      <button className="btn btn-border btn-header">Categories</button>
    </header>
  );
}

export default Header;
