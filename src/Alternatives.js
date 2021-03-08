import { useState, useEffect } from "react";
import { fixString, simpleArrayShuffle } from "./utils";
import { useAppContext } from "./AppContextProvider";

function Alternatives() {
  const {
    currentQuestion,
    submitAnswer,
    questionReady,
    isFinished,
    handleEndOfQuiz,
  } = useAppContext();
  const [listOfAlternatives, setListOfAlternatives] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState(null);
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
    } else {
      setListOfAlternatives([]);
    }
  }, [currentQuestion]);

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
      {listOfAlternatives !== undefined ? (
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="scroll-container">
            <div className="scroll-wrapper">
              {listOfAlternatives.map((alternative, index) => {
                return (
                  <div
                    onClick={(e) =>
                      (e.currentTarget.children[0].checked = true)
                    }
                    className="form-input"
                    key={index}
                  >
                    <input
                      checked={currentAnswer === fixString(alternative)}
                      type="radio"
                      value={fixString(alternative)}
                      name="questions"
                      onChange={(e) => setCurrentAnswer(e.currentTarget.value)}
                    />
                    <label>{` ${fixString(alternative)}`}</label>
                  </div>
                );
              })}
            </div>
          </div>
          <button
            id="submit-answer"
            type="submit"
            className="btn btn-border btn-submit"
            disabled={true}
          >
            Answer
          </button>
        </form>
      ) : (
        "Loading..."
      )}
    </section>
  );
}

export default Alternatives;
