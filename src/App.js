import { useState, useEffect } from "react";
import personService from "./services/persons";
import Display from "./Display";
import Form from "./Form";
import Filter from "./Filter";
import Notification from "./Notification";
import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [newSearch, setNewSearch] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const person = { name: newName, number: newNumber };

    if (persons.some((existingPerson) => existingPerson.name === person.name)) {
      const existingPerson = persons.find((p) => p.name === person.name);
      personService
        .updatePers(existingPerson.id, person)
        .then((updatedPers) => {
          setPersons(
            persons.map((person) =>
              person.id === updatedPers.id ? updatedPers : person
            )
          );
          setNewName("");
          setNewNumber("");
        });
    } else {
      personService.addNew(person).then((newPerson) => {
        setPersons(persons.concat(newPerson));
        setNewName("");
        setNewNumber("");
        setMessage(
          `Success! ${newPerson.name} has been added to the phonebook!`
        );
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      });
    }
  };

  const handleSearch = (event) => {
    setNewSearch(event.target.value);
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div className="app">
      <h1>myPhonebook</h1>
      <Notification message={message} />
      <Filter
        showAll={showAll}
        newSearch={newSearch}
        handleSearch={handleSearch}
        setShowAll={setShowAll}
      />
      <Form
        newName={newName}
        newNumber={newNumber}
        addPerson={addPerson}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
      />
      <Display
        persons={persons}
        showAll={showAll}
        newSearch={newSearch}
        setPersons={setPersons}
        setMessage={setMessage}
      />
    </div>
  );
};

export default App;
