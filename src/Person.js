export default function Person({ name, number, deletePerson }) {
  return (
    <div className="person">
      <p>{name}</p>
      <button className="pers-button" onClick={deletePerson}>
        Delete
      </button>
      <br></br>
      <p>{number}</p>
    </div>
  );
}
