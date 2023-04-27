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
            <label htmlFor="name">name: </label>
            <input id="name" value={newName} onChange={handleNewName} />
          </div>
          <div>
            <label htmlFor="number">number: </label>
            <input id="number" value={newNumber} onChange={handleNewNumber} />
          </div>
        </div>
        <button className="button" type="submit">
          add
        </button>
      </form>
    </div>
  );
}
