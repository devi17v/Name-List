import React from "react";

const NameList = ({ nameDetails, onDelete, onEdit, isAscending, onSort }) => {
  return (
    <>
      {nameDetails.length > 1 && (
        <div className="sort-wrapper">
          <button onClick={onSort}>
            Sort by name {isAscending ? "(AtoZ)" : "(ZtoA)"}
          </button>
        </div>
      )}
      <ul>
        {nameDetails.map((data, index) => (
          <li key={`list-container-${index}`} className="list-wrapper">
            <div className="items-wrapper">
              {data.firstName} {data.lastName}
            </div>
            <div className="actions-wrapper">
              <button
                className="edit-button"
                onClick={() => onEdit(data.firstName, data.lastName, index)}
              >
                Edit
              </button>

              <button onClick={() => onDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NameList;
