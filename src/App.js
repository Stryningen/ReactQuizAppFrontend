import { useState } from "react";
import Question from "./Question";
import Alternatives from "./Alternatives";
import Header from "./Header";
import InfoContainer from "./InfoContainer";
import ResultModule from "./ResultModule";
import OptionsModule from "./OptionsModule";
import ListModule from "./ListModule";
import { useAppContext } from "./AppContextProvider";

function App() {
  const {
    listOfCategories,
    showCategoriesModule,
    setShowCategoriesModule,
    listOfDifficulties,
    showDifficultyModule,
    setShowDifficultyModule,
    setCategory,
    setDifficulty,
  } = useAppContext();

  return (
    <>
      <main className="flex-container-column" id="app">
        <Header />
        <InfoContainer />
        <Question />
        <Alternatives />
      </main>
      <ResultModule />
      <OptionsModule />
      <ListModule
        className="option-list-module"
        setOption={(option) => setCategory(option)}
        listToShow={listOfCategories}
        listHeader="Categories"
        showModule={showCategoriesModule}
        setShowModule={(state) => setShowCategoriesModule(state)}
      />
      <ListModule
        className="option-list-module"
        setOption={(option) => setDifficulty(option)}
        listToShow={listOfDifficulties}
        listHeader="Difficulties"
        showModule={showDifficultyModule}
        setShowModule={(state) => setShowDifficultyModule(state)}
      />
    </>
  );
}

export default App;
