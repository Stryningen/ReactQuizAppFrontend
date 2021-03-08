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
        listToShow={listOfCategories}
        showModule={showCategoriesModule}
        setShowModule={(state) => setShowCategoriesModule(state)}
      />
      <ListModule
        listToShow={listOfDifficulties}
        showModule={showDifficultyModule}
        setShowModule={(state) => setShowDifficultyModule(state)}
      />
    </>
  );
}

export default App;
