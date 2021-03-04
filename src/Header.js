import { useAppContext } from "./AppContextProvider";

function Header() {
  const { generateBasicQuiz } = useAppContext();

  const handleGenerateBasicQuiz = (e) => {
    e.preventDefault();
    generateBasicQuiz();
  };

  return (
    <header>
      <button
        className="btn btn-border"
        onClick={(e) => handleGenerateBasicQuiz(e)}
      >
        Get Random Simple Quiz
      </button>
      <button className="btn btn-border">Create Quiz</button>
      <button className="btn btn-border">Find By Category</button>
    </header>
  );
}

export default Header;
