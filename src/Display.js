import Person from "./Person";

export default function Display({ persons, showAll, newSearch }) {
  console.log(persons, showAll, newSearch);
  const searchFilter = showAll
    ? persons
    : persons.filter(
        (entry) => entry.name.toLowerCase() === newSearch.toLowerCase()
      );

  return (
    <div>
      {searchFilter.map((each) => (
        <Person key={each.id} name={each.name} number={each.number} />
      ))}
    </div>
  );
}
