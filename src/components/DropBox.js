import React from "react";

const DropBox = React.memo(
  ({ options, selectedOption, handleDropdownChange }) => {
    return (
      <div>
        <select value={selectedOption} onChange={handleDropdownChange}>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default DropBox;
