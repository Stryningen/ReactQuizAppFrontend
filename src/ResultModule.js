import React, { useCallback, useEffect, useRef } from "react";
import { useAppContext } from "./AppContextProvider";

function ResultModule() {
  const {
    score,
    totalQuestions,
    showResultModule,
    setShowResultModule,
  } = useAppContext();

  const closeModule = () => {
    setShowResultModule(false);
  };

  return showResultModule ? (
    <aside>
      <section
        id="result-module"
        className="module-container flex-container-column"
      >
        <h2>Result of quiz:</h2>
        <p>
          {`You managed to answer ${score} out of ${totalQuestions} questions!`}
        </p>
        <button
          className="btn btn-border close-module-btn"
          onClick={closeModule}
        >
          Close
        </button>
      </section>
    </aside>
  ) : null;
}

export default ResultModule;
