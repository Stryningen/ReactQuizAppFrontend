import { useState } from "react";
import { useAppContext } from "./AppContextProvider";

function InfoContainer() {
  const { questionNumber, totalQuestions } = useAppContext();

  return (
    <section id="title">
      {questionNumber ? (
        <h4>{`Question ${questionNumber} / ${totalQuestions}`}</h4>
      ) : (
        "No quiz selected..."
      )}
    </section>
  );
}

export default InfoContainer;
