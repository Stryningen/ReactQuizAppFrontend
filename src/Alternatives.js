import { useState, useEffect } from "react";
import { fixString, simpleArrayShuffle } from "./utils";
import { useAppContext } from "./AppContextProvider";

function Alternatives() {
  const { currentQuestion } = useAppContext();
  const [listOfAlternatives, setListOfAlternatives] = useState([]);
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
    }
  }, [currentQuestion]);
  const handleSubmit = (e) => {
    e.preventDefault();
    //submitAnswer()
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
                  <div className="form-input" key={index}>
                    <input
                      type="radio"
                      value={fixString(alternative)}
                      name="questions"
                    />
                    <label>{` ${fixString(alternative)}`}</label>
                  </div>
                );
              })}
            </div>
          </div>
          <button type="submit" className="btn btn-border btn-submit">
            Submit Answer
          </button>
        </form>
      ) : (
        "Loading..."
      )}
    </section>
  );
}

export default Alternatives;
