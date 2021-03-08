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
        New Quiz
      </button>
      <button className="btn btn-border btn-header">Options</button>
      <button className="btn btn-border btn-header">Made With</button>
    </header>
  );
}

export default Header;
