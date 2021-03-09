import { useState } from "react";
import { useAppContext } from "./AppContextProvider";
import { capitolizeFirstLetter } from "./utils";

function OptionsModule() {
  const {
    showOptionsModule,
    setShowOptionsModule,
    difficulty,
    category,
    amount,
    setAmount,
    setShowCategoriesModule,
    setShowDifficultyModule,
  } = useAppContext();

  const [editAmount, setEditAmount] = useState(false);

  const closeModule = () => {
    setShowOptionsModule(false);
  };

  return showOptionsModule ? (
    <aside
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          closeModule();
          setEditAmount(false);
        }
      }}
    >
      <section
        id="options-module"
        className="module-container flex-container-column"
      >
        <h2>Options:</h2>
        <div className="option-item">
          <span className="option-label">Difficulty:</span>
          <span>{difficulty ? capitolizeFirstLetter(difficulty) : "Any"}</span>
          <button
            className="btn option-btn"
            onClick={() => setShowDifficultyModule(true)}
          >
            Change
          </button>
        </div>
        <div className="option-item">
          <span className="option-label">Category:</span>
          <span>{category ? capitolizeFirstLetter(category) : "Any"}</span>
          <button
            className="btn option-btn"
            onClick={() => setShowCategoriesModule(true)}
          >
            Change
          </button>
        </div>
        <div className="option-item">
          <span className="option-label">Amount:</span>
          {editAmount ? (
            <input
              id="amount-option"
              type="number"
              max="50"
              min="2"
              value={amount}
              onChange={(e) => {
                if (e.target.value < 2) {
                  setAmount(2);
                } else if (e.target.value > 50) {
                  setAmount(50);
                } else {
                  setAmount(e.target.value);
                }
              }}
            />
          ) : (
            <span>{amount ? amount : 0}</span>
          )}
          <button
            onClick={() => setEditAmount(!editAmount)}
            className="btn option-btn"
          >
            Change
          </button>
        </div>
        <button
          className="btn btn-border close-module-btn"
          onClick={() => {
            closeModule();
            setEditAmount(false);
          }}
        >
          Close
        </button>
      </section>
    </aside>
  ) : null;
}

export default OptionsModule;
