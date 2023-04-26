import Person from "./Person";
import personService from "./services/persons";

export default function Display({ persons, showAll, newSearch, setMessage }) {
  const searchFilter = showAll
    ? persons
    : persons.filter(
        (entry) => entry.name.toLowerCase() === newSearch.toLowerCase()
      );

  const deletePerson = (id) => {
    if (window.confirm("Please click ok to delete this person")) {
      personService.deletePers(id);
      setMessage(`Goodbye! That person has been deleted from the phonebook`);
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  };

  return (
    <div className="numbers">
      <h2>Contacts</h2>
      {searchFilter.map((each) => (
        <Person
          key={each.id}
          name={each.name}
          number={each.number}
          deletePerson={() => deletePerson(each.id)}
        />
      ))}
    </div>
  );
}
