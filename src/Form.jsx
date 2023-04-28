export default function Form({
  newName,
  newNumber,
  handleNewName,
  handleNewNumber,
  addPerson,
}) {
  return (
    <div className="form">
      <h2>Add a New Contact</h2>
      <form onSubmit={addPerson}>
        <div>
          <div>
            <label htmlFor="name">
              name: <input id="name" value={newName} onChange={handleNewName} />
            </label>
          </div>
          <div>
            <label htmlFor="number">
              number:
              <input id="number" value={newNumber} onChange={handleNewNumber} />
            </label>
          </div>
        </div>
        <button className="button" type="submit">
          add
        </button>
      </form>
    </div>
  );
}
