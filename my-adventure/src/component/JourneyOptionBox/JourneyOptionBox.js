import React, { useState } from "react";
import "./JourneyOptionBox.css";

const JourneyOptionBox = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div style={{ width: "20vw" }}>
      <select
        className="optionBoxContainer"
        value={selectedOption}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default JourneyOptionBox;
