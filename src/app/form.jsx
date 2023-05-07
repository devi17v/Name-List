import React, { useEffect, useState } from "react";

const NameForm = ({ onAdd, editValues, onSave }) => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const handleNameChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setName(editValues);
  }, [editValues]);
  return (
    <div>
      <div className="form-wrapper">
        <div className="fName-wrapper">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={name.firstName}
            onChange={handleNameChange}
            placeholder="First name"
            autoComplete="off"
          />
        </div>
        <div className="lName-wrapper">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={name.lastName}
            onChange={handleNameChange}
            placeholder="Last name"
            autoComplete="off"
          />
        </div>
        <div className="button-wrapper">
          {editValues.firstName ? (
            <button
              onClick={() => {
                onSave(name, editValues.index);
                setName({ firstName: "", lastName: "" });
              }}
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => {
                onAdd(name);
                setName({ firstName: "", lastName: "" });
              }}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NameForm;
