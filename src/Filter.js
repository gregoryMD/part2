export default function Filter({
  newSearch,
  handleSearch,
  setShowAll,
  showAll,
}) {
  return (
    <div>
      <h2>filter by name</h2>
      <input value={newSearch} onChange={handleSearch}></input>
      <div>
        <button className="button" onClick={() => setShowAll(!showAll)}>
          filter
        </button>
      </div>
    </div>
  );
}
