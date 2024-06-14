import React, { useState } from 'react';

const AdvancedEventPlanning = () => {
  const [pollOptions, setPollOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleAddOption = (option) => {
    setPollOptions([...pollOptions, option]);
  };

  const handleSelectOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleVote = () => {
    // Handle the logic for submitting the selected options for the poll
  };

  const renderPollOptions = () => {
    return pollOptions.map((option, index) => (
      <div key={index} onClick={() => handleSelectOption(option)}>
        {option}
        {selectedOptions.includes(option) ? <span> (Selected)</span> : null}
      </div>
    ));
  };

  return (
    <div>
      <h2>Create Poll</h2>
      <input
        type="text"
        placeholder="Enter poll option"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddOption(e.target.value);
            e.target.value = '';
          }
        }}
      />
      <button onClick={handleVote}>Vote</button>
      <div>{renderPollOptions()}</div>
    </div>
  );
};

export default AdvancedEventPlanning;