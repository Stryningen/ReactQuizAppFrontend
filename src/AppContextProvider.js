import React, { useContext, useState, useEffect, useCallback } from "react";
import { getQuizSet } from "./api";

const AppContext = React.createContext();

export function AppContextProvider({ children }) {
  const [currentQuizSet, setCurrentQuizSet] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});

  const generateBasicQuiz = async () => {
    setCurrentQuizSet(await getQuizSet());
  };

  useEffect(() => {
    setCurrentQuestion(currentQuizSet ? currentQuizSet[0] : {});
  }, [currentQuizSet]);

  const value = {
    currentQuizSet,
    currentQuestion,
    generateBasicQuiz,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
