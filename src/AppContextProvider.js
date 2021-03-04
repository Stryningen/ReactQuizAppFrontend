import React, { useContext, useState, useEffect, useCallback } from "react";
import { getQuizSet } from "./api";

const AppContext = React.createContext();

export function AppContextProvider({ children }) {
  const [currentQuizSet, setCurrentQuizSet] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [questionReady, setQuestionReady] = useState(false);

  const generateBasicQuiz = async () => {
    setCurrentQuizSet(await getQuizSet());
  };

  const submitAnswer = (answer) => {
    if (answer === currentQuestion.correct_answer) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  useEffect(() => {
    setQuestionReady(false);
    setCurrentQuestion(
      currentQuizSet ? currentQuizSet[currentQuestionIndex] : {}
    );
    setQuestionReady(true);
  }, [currentQuizSet, currentQuestionIndex]);

  useEffect(() => {
    setTotalQuestions(currentQuizSet.length);
  }, [currentQuizSet]);

  const value = {
    currentQuizSet,
    currentQuestion,
    generateBasicQuiz,
    questionNumber: currentQuestion ? currentQuestionIndex + 1 : null,
    totalQuestions,
    submitAnswer,
    questionReady,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
