import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import personsService from "./services/persons";
import Notification from "../../notes/src/components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFind, setNewFind] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const [filterPersons, setFilterPersons] = useState(persons);

  useEffect(() => {
    personsService.getAll().then((response) => {
      setPersons(response.data);
      setFilterPersons(response.data);
    });
  }, []);

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };

    //checks if the person is already in the database
    const personsCopy = persons;
    const personsFilter = personsCopy.filter(
      (person) => person.name == nameObject.name
    );

    if (personsFilter.length > 0) {
      window.alert(`${nameObject.name} is already added to phonebook`);
    } else {
      console.log("entra");
      //save the numbers to a backend server
      personsService.create(nameObject).then((response) => {
        setPersons(persons.concat(response.data));
        setFilterPersons(persons.concat(response.data));
        setNewName("");
        setNewNumber("");
      });
      setPersons(persons.concat(nameObject));
      setFilterPersons(persons.concat(nameObject));
      setErrorMessage(`Added ${nameObject.name}`);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }

    setNewName("");
    setNewNumber("");
  };

  const deletePerson = (id) => {
    //delete the person from the backend and set the persons again
    if (window.confirm("Delete Arto Hellas?")) {
      personsService.deleted(id).then((response) => {
        personsService.getAll().then((response) => {
          setPersons(response.data);
          console.log(response.data);
          setFilterPersons(response.data);
        });
      });
    }
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
      <Notification message={errorMessage} />
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
      <Persons filterPersons={filterPersons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
