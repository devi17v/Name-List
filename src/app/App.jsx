import React, { useState } from "react";
import NameForm from "./form";
import NameList from "./list";
import "./App.css";

const App = () => {
  const [nameDetails, setNameDetails] = useState([]);
  const [editValues, setEditValues] = useState({});
  const [isAscending, setIsAscending] = useState(true);

  const addDetails = (name) => {
    if (name.firstName !== "") {
      setNameDetails([...nameDetails, name]);
    }
  };
  const deleteDetails = (index) => {
    nameDetails.splice(index, 1);
    setNameDetails([...nameDetails]);
  };
  const editDetails = (firstName, lastName, index) => {
    setEditValues({
      firstName,
      lastName,
      index,
    });
  };
  const updateDetails = (name, index) => {
    const newNameDetails = [...nameDetails];
    newNameDetails[index] = {
      ...name,
    };
    setNameDetails([...newNameDetails]);
    setEditValues({});
  };
  const sortName = () => {
    const sortNameDetails = nameDetails.sort((a, b) => {
      const fullNameA = a.firstName + a.lastName;
      const fullNameB = b.firstName + b.lastName;
      const nameA = fullNameA.toLowerCase();
      const nameB = fullNameB.toLowerCase();
      if (nameA < nameB) {
        return isAscending ? -1 : 1;
      }
      if (nameA > nameB) {
        return isAscending ? 1 : -1;
      }
      return 0;
    });
    setIsAscending(!isAscending);

    setNameDetails([...sortNameDetails]);
  };

  return (
    <>
      <div className="body-wrapper">
        <NameForm
          onAdd={addDetails}
          editValues={editValues}
          onSave={updateDetails}
        />
        <NameList
          nameDetails={nameDetails}
          onDelete={deleteDetails}
          onEdit={editDetails}
          onSort={sortName}
          isAscending={isAscending}
        />
      </div>
    </>
  );
};

export default App;
