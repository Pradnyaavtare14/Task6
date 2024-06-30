import { useState } from 'react';

const RadioButtonGroup = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="max-w-xs mx-auto border rounded-lg p-4">
      <h1 className="text-gray-700 text-sm font-bold mb-2">Select an option:</h1>
      <div className="flex flex-col space-y-2">
        {['1', '2', '3'].map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="radio"
              name="options"
              value={option}
              className="form-radio h-5 w-5 border-gray-400 text-darkblue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkblue-500"
              onChange={() => setSelectedOption(option)}
            />
            <span className={`text-gray-700 ${selectedOption === option ? 'text-darkblue-500' : ''}`}>
              Option {option}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioButtonGroup;
