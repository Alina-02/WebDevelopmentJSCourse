import React from "react";

const Persons = ({ filterPersons }) => {
  return (
    <div>
      <ul>
        {filterPersons.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Persons;
