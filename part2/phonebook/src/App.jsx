import { useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFind, setNewFind] = useState("");

  const [filterPersons, setFilterPersons] = useState(persons);

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };

    const personsCopy = persons;
    const personsFilter = personsCopy.filter(
      (person) => person.name == nameObject.name
    );

    if (personsFilter.length > 0) {
      window.alert(`${nameObject.name} is already added to phonebook`);
    } else {
      setPersons(persons.concat(nameObject));
      setFilterPersons(persons.concat(nameObject));
    }
    setNewName("");
    setNewNumber("");
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFindChange = (event) => {
    setNewFind(event.target.value);
    setFilterPersons(
      persons.filter((person) => person.name.includes(event.target.value))
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFind={newFind} handleFindChange={handleFindChange} />

      <h2>add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handlePersonChange={handlePersonChange}
        handleNumberChange={handleNumberChange}
        addName={addName}
      />
      <h2>Numbers</h2>
      <Persons filterPersons={filterPersons} />
    </div>
  );
};

export default App;
