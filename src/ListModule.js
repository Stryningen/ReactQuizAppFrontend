function ListModule(props) {
  const { listToShow, showModule, setShowModule } = { ...props };

  return showModule ? (
    <aside
      onClick={(e) => {
        if (e.currentTarget === e.target) setShowModule(false);
      }}
    >
      <section className="module-container flex-container-column">
        <div className="list-content-container">
          {listToShow.map((listItem) => {
            return <p key={listItem.id}>{listItem.name}</p>;
          })}
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
