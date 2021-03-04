import { useAppContext } from "./AppContextProvider";
import { fixString } from "./utils";

function Question() {
  const { currentQuestion } = useAppContext();
  return (
    <section
      className="flex-container-column column-center"
      id="display-question"
    >
      <h3>
        {currentQuestion && `Category - ${fixString(currentQuestion.category)}`}
      </h3>
      <p>
        {currentQuestion
          ? `${fixString(currentQuestion.question)}`
          : "loading..."}
      </p>
    </section>
  );
}

export default Question;
