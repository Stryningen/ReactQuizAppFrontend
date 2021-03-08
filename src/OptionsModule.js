import React, { useState } from "react";
import { useAppContext } from "./AppContextProvider";

function OptionsModule() {
  const { showOptionsModule, setShowOptionsModule } = useAppContext();

  const closeModule = () => {
    setShowOptionsModule(false);
  };

  return showOptionsModule ? (
    <aside>
      <section
        id="options-module"
        className="module-container flex-container-column"
      >
        <h2>Options:</h2>
        <div className="option-item">
          <span className="option-label">Difficulty:</span>
          <span>Any</span>
          <button className="btn option-btn">Change</button>
        </div>
        <div className="option-item">
          <span className="option-label">Category:</span>
          <span>Any</span>
          <button className="btn option-btn">Change</button>
        </div>
        <div className="option-item">
          <span className="option-label">Amount:</span>
          <span>Any</span>
          <button className="btn option-btn">Change</button>
        </div>
        <button
          className="btn btn-border close-module-btn"
          onClick={closeModule}
        >
          Close
        </button>
      </section>
    </aside>
  ) : null;
}

export default OptionsModule;
