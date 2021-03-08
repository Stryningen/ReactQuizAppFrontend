import React, { useContext, useState, useEffect } from "react";
import { getQuizSet, getListOfCategories } from "./api";

const AppContext = React.createContext();

export function AppContextProvider({ children }) {
  const [currentQuizSet, setCurrentQuizSet] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [score, setScore] = useState(0);
  const [questionReady, setQuestionReady] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showResultModule, setShowResultModule] = useState(false);
  const [showOptionsModule, setShowOptionsModule] = useState(false);
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [listOfCategories, setListOfCategories] = useState(["test"]);
  const [showCategoriesModule, setShowCategoriesModule] = useState(false);
  const [showDifficultyModule, setShowDifficultyModule] = useState(false);

  useEffect(async () => {
    setListOfCategories(await getListOfCategories());
  }, []);

  const generateQuiz = async () => {
    setIsFinished(false);
    setCurrentQuestionIndex(0);
    setCurrentQuestion({});
    setScore(0);
    setCurrentQuizSet(await getQuizSet(amount, category, difficulty));
    setIsLoading(false);
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

  const handleEndOfQuiz = () => {};

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
    showResultModule,
    setShowResultModule,
    score,
    setShowOptionsModule,
    showOptionsModule,
    setDifficulty,
    difficulty,
    setCategory,
    category,
    setAmount,
    amount,
    isLoading,
    setIsLoading,
    listOfCategories,
    showCategoriesModule,
    setShowCategoriesModule,
    showDifficultyModule,
    setShowDifficultyModule,
    listOfDifficulties: [
      { id: 0, name: "easy" },
      { id: 1, name: "medium" },
      { id: 2, name: "hard" },
    ],
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
