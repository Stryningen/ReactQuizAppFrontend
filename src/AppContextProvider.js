import React, { useContext, useState, useEffect } from "react";
import { getQuizSet } from "./api";

const AppContext = React.createContext();

export function AppContextProvider({ children }) {
  const [currentQuizSet, setCurrentQuizSet] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [questionReady, setQuestionReady] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const generateQuiz = async (
    amount = 3,
    category = null,
    difficulty = null
  ) => {
    setIsFinished(false);
    setCurrentQuestionIndex(0);
    setCurrentQuestion({});
    setScore(0);
    setCurrentQuizSet(await getQuizSet(amount, category, difficulty));
    document.getElementById("submit-answer").disabled = false;
  };

  const submitAnswer = (answer) => {
    if (answer === currentQuestion.correct_answer) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const checkIsFinished = () => {
    if (currentQuestionIndex === currentQuizSet.length - 1) {
      setIsFinished(true);
    }
  };

  const handleEndOfQuiz = () => {
    console.log("handleEndOfQuiz");
  };

  useEffect(() => {
    setQuestionReady(false);
    setCurrentQuestion(
      currentQuizSet ? currentQuizSet[currentQuestionIndex] : {}
    );
    checkIsFinished();
    setQuestionReady(true);
  }, [currentQuizSet, currentQuestionIndex]);

  useEffect(() => {
    setTotalQuestions(currentQuizSet.length);
  }, [currentQuizSet]);

  const value = {
    currentQuizSet,
    currentQuestion,
    generateQuiz,
    questionNumber: currentQuestion ? currentQuestionIndex + 1 : null,
    totalQuestions,
    submitAnswer,
    questionReady,
    checkIsFinished,
    isFinished,
    handleEndOfQuiz,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
