import { useState, useEffect, useRef } from "react";
import { fixString, simpleArrayShuffle } from "./utils";
import { useAppContext } from "./AppContextProvider";

function Alternatives() {
  const {
    currentQuestion,
    submitAnswer,
    questionReady,
    isFinished,
    handleEndOfQuiz,
    isLoading,
  } = useAppContext();

  const [listOfAlternatives, setListOfAlternatives] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState(null);

  const answerContainer = useRef();

  useEffect(() => {
    if (
      currentQuestion !== undefined &&
      currentQuestion.incorrect_answers !== undefined
    ) {
      const array = [
        ...currentQuestion.incorrect_answers,
        currentQuestion.correct_answer,
      ];
      const shuffledArray = simpleArrayShuffle(array);

      setListOfAlternatives(shuffledArray);
      document.getElementById("submit-answer").disabled = false;
    } else {
      setListOfAlternatives([]);
      document.getElementById("submit-answer").disabled = true;
    }
  }, [currentQuestion]);

  useEffect(() => {
    const answerNodes = answerContainer.current.childNodes;
    Array.from(answerNodes).map((answer) =>
      answer.innerText === currentAnswer
        ? answer.classList.add("selected")
        : answer.classList.remove("selected")
    );
  }, [currentAnswer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentAnswer && questionReady) {
      submitAnswer(currentAnswer);
    }
    if (isFinished && currentAnswer) {
      document.getElementById("submit-answer").disabled = true;
      handleEndOfQuiz();
    }
    setCurrentAnswer(null);
  };
  return (
    <section
      className="flex-container-column column-center"
      id="display-alternatives"
    >
      {!isLoading ? (
        <>
          <div className="scroll-container">
            <div ref={answerContainer} className="scroll-wrapper">
              {listOfAlternatives.map((alternative, index) => {
                return (
                  <div key={index}>
                    <p
                      onClick={(e) => {
                        setCurrentAnswer(e.currentTarget.innerText);
                      }}
                      className="alternatives choice"
                    >
                      {fixString(alternative)}
                    </p>
                    <div
                      className="last-child-hidden"
                      style={{
                        borderBottom: "1px solid var(--secondary-color)",
                        width: "2rem",
                        margin: "0 auto",
                      }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <p style={{ margin: "auto" }}>Loading...</p>
      )}
      <button
        onClick={(e) => handleSubmit(e)}
        id="submit-answer"
        type="button"
        className="btn btn-border btn-submit"
      >
        Answer
      </button>
    </section>
  );
}

export default Alternatives;
