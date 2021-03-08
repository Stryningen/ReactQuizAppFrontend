import React, { useRef } from "react";
import { useAppContext } from "./AppContextProvider";

function ResultModule() {
  const { score, totalQuestions } = useAppContext();
  const moduleContainer = useRef();
  return (
    <section
      ref={moduleContainer}
      id="result-module"
      className="flex-container-column"
    >
      <h2>Result of quiz:</h2>
      <p>1 out of 10 questions!</p>
      <p>message: you did great!</p>
      <button
        className="btn btn-border"
        id="close-result-module"
        onClick={() => {
          moduleContainer.current.style.display = "none";
        }}
      >
        Close
      </button>
    </section>
  );
}

export default ResultModule;
