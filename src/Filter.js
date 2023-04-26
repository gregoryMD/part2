export default function Filter({
  newSearch,
  handleSearch,
  setShowAll,
  showAll,
}) {
  return (
    <div className="filter">
      <h2>Filter by Name</h2>
      <div>
        <input value={newSearch} onChange={handleSearch}></input>
        <button className="button" onClick={() => setShowAll(!showAll)}>
          filter
        </button>
      </div>
    </div>
  );
}
