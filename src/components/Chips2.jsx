/* eslint-disable react/prop-types */
import { useState } from 'react';

const ChipsGroup = ({ title, options, selectedOptions, onToggle }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="flex flex-wrap">
        {options.map((option) => (
          <div
            key={option}
            className={`m-1 px-3 py-1 rounded-full cursor-pointer border ${selectedOptions.includes(option) ? 'border-blue-500 text-blue-500 bg-transparent' : 'bg-gray-200 text-gray-700 border-gray-200'}`}
            onClick={() => onToggle(option)}
          >
            {option}
            {selectedOptions.includes(option) && <span className="ml-2">×</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

const Chips2 = () => {
  const [selectedChips1, setSelectedChips1] = useState(['Medium']);
  const [selectedChips2, setSelectedChips2] = useState(['Design']);
  const [selectedChips3, setSelectedChips3] = useState(['Dishwasher']);

  const toggleChip1 = (chip) => {
    setSelectedChips1((prev) => 
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    );
  };

  const toggleChip2 = (chip) => {
    setSelectedChips2((prev) => 
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    );
  };

  const toggleChip3 = (chip) => {
    setSelectedChips3((prev) => 
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    );
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg">
      <ChipsGroup
        title="Chips #1"
        options={['Small', 'Medium', 'Large', 'X Large']}
        selectedOptions={selectedChips1}
        onToggle={toggleChip1}
      />
      <ChipsGroup
        title="Chips #2"
        options={['UI UX', 'Design', 'Web', 'Mobile', 'Table']}
        selectedOptions={selectedChips2}
        onToggle={toggleChip2}
      />
      <ChipsGroup
        title="Chips #3"
        options={['Towel', 'Dishwasher', 'Snacks', 'Sandal', 'Balcony', 'Drinks']}
        selectedOptions={selectedChips3}
        onToggle={toggleChip3}
      />
    </div>
  );
};

export default Chips2;
