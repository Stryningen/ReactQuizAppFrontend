import { capitolizeFirstLetter } from "./utils";

function ListModule(props) {
  const { listToShow, showModule, setShowModule, listHeader, setOption } = {
    ...props,
  };

  return showModule ? (
    <aside
      onClick={(e) => {
        if (e.currentTarget === e.target) setShowModule(false);
      }}
    >
      <section className="module-container flex-container-column">
        <h3>{listHeader}:</h3>
        <div className="list-content-container">
          <div className="list-content-scroll">
            {listToShow.map((listItem) => {
              return (
                <p
                  onClick={(e) => {
                    setOption(e.target.innerText);
                    setShowModule(false);
                  }}
                  className="option-list-item choice"
                  key={listItem.id}
                >
                  {capitolizeFirstLetter(listItem.name)}
                </p>
              );
            })}
          </div>
        </div>
        <button
          className="btn btn-border close-module-btn"
          onClick={() => setShowModule(false)}
        >
          Close
        </button>
      </section>
    </aside>
  ) : null;
}

export default ListModule;
