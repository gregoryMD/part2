export default function Filter({
  newSearch,
  handleSearch,
  setShowAll,
  showAll,
}) {
  return (
    <div>
      <input value={newSearch} onChange={handleSearch}></input>
      <div>
        <button onClick={() => setShowAll(!showAll)}>filter</button>
      </div>
    </div>
  );
}
