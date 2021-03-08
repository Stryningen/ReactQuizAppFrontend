import { useAppContext } from "./AppContextProvider";

function InfoContainer() {
  const { questionNumber, totalQuestions } = useAppContext();

  return (
    <section id="info-container">
      {questionNumber ? (
        <h4>{`Question ${questionNumber} / ${totalQuestions}`}</h4>
      ) : (
        "No quiz loaded..."
      )}
    </section>
  );
}

export default InfoContainer;
