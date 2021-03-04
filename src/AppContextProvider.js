import React, { useContext, useState, useEffect, useCallback } from "react";

const AppContext = React.createContext();

export function AppContextProvider({ children }) {
  const [currentQuizSet, setCurrentQuizSet] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});

  const getQuizSet = useCallback(async (amount = 10, category = null) => {
    const apiUrl = `https://opentdb.com/api.php?amount=${amount}${
      category ? "category=" + category : ""
    }`;
    const url = apiUrl;
    const quizSet = fetch(url, { charset: "utf-8" })
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
      })
      .then((data) => setCurrentQuizSet([...data.results]));
    return quizSet;
  });

  const generateBasicQuiz = () => {
    getQuizSet();
  };

  useEffect(() => {
    getQuizSet();
  }, []);

  useEffect(() => {
    setCurrentQuestion(currentQuizSet ? currentQuizSet[0] : {});
  }, [currentQuizSet]);

  const value = {
    currentQuizSet,
    currentQuestion,
    getQuizSet,
    generateBasicQuiz,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
