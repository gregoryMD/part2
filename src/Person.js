export default function Person({ name, number, deletePerson }) {
  return (
    <div>
      {name}
      <button className="pers-button" onClick={deletePerson}>
        Delete
      </button>
      <br></br>
      {number}
    </div>
  );
}
