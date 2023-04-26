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
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button className="button" type="submit">
            add
          </button>
        </div>
      </form>
    </div>
  );
}
