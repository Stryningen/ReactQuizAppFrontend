import { useAppContext } from "./AppContextProvider";
import { fixString } from "./utils";

function Question() {
  const { currentQuestion, isLoading } = useAppContext();
  return (
    <section
      className="flex-container-column column-center"
      id="display-question"
    >
      <h3>Category</h3>
      <p>
        {isLoading
          ? "Loading..."
          : currentQuestion === undefined ||
            currentQuestion.category === undefined
          ? ""
          : `${fixString(currentQuestion.category)}`}
      </p>
      <h3>Question:</h3>
      <p>
        {isLoading
          ? "Loading..."
          : currentQuestion === undefined ||
            currentQuestion.question === undefined
          ? ""
          : `${fixString(currentQuestion.question)}`}
      </p>
    </section>
  );
}

export default Question;
