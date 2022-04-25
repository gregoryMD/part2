import { useState, useEffect } from "react";
import axios from "axios";
import Display from "./Display";
import Form from "./Form";
import Filter from "./Filter";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [newSearch, setNewSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => setPersons(response.data));
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const person = { name: newName, number: newNumber };
    const stringed = [];
    persons.forEach((item) => stringed.push(JSON.stringify(item)));
    if (stringed.includes(JSON.stringify(person))) {
      window.alert(`${newName} is already added to the phonebook`);
      setNewName("");
      setNewNumber("");
    } else {
      setPersons(persons.concat(person));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleSearch = (event) => {
    setNewSearch(event.target.value);
    console.log(newSearch);
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        showAll={showAll}
        newSearch={newSearch}
        handleSearch={handleSearch}
        setShowAll={setShowAll}
      />
      <h2>add new</h2>
      <Form
        newName={newName}
        newNumber={newNumber}
        addPerson={addPerson}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
      />
      <h2>Numbers</h2>
      <Display persons={persons} showAll={showAll} newSearch={newSearch} />
    </div>
  );
};

export default App;
