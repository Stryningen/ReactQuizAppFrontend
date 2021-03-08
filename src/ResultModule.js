import React, { useCallback, useEffect, useRef } from "react";
import { useAppContext } from "./AppContextProvider";

function ResultModule() {
  const {
    score,
    totalQuestions,
    showResultModule,
    setShowResultModule,
  } = useAppContext();
  const moduleContainer = useRef();

  const closeResultModule = () => {
    setShowResultModule(false);
  };

  return showResultModule ? (
    <aside>
      <section
        ref={moduleContainer}
        id="result-module"
        className="flex-container-column"
      >
        <h2>Result of quiz:</h2>
        <p>
          {`You managed to answer ${score} out of ${totalQuestions} questions!`}
        </p>
        <button
          className="btn btn-border"
          id="close-result-module"
          onClick={closeResultModule}
        >
          Close
        </button>
      </section>
    </aside>
  ) : null;
}

export default ResultModule;
