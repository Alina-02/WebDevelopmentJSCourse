import React from "react";

const Persons = ({ filterPersons, deletePerson }) => {
  return (
    <div>
      <ul>
        {filterPersons.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
            <button
              onClick={() => {
                if (person.id != undefined) {
                  deletePerson(person.id);
                }
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Persons;
