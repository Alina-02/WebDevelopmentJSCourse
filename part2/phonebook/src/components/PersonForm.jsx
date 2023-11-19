import React from "react";

const PersonForm = ({
  newName,
  handlePersonChange,
  newNumber,
  handleNumberChange,
  addName,
}) => {
  return (
    <form>
      <div>
        name:
        <input value={newName} onChange={handlePersonChange} />
      </div>
      <div>
        number:
        <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit" onClick={addName}>
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
