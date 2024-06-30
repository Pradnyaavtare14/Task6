/* eslint-disable react/prop-types */
import  { useState } from 'react';

const ToggleButton = ({ option, isOn, handleToggle}) => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <span>{option}</span>
      <div
        className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${isOn ? 'bg-blue-500' : 'bg-gray-300'}`}
        onClick={handleToggle}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform ${isOn ? 'translate-x-5' : 'translate-x-0'}`}
        ></div>
      </div>
    </div>
  );
};

const ToggleButtonList = () => {
  const [toggles, setToggles] = useState([true, false, false]);

  const handleToggle = (index) => {
    setToggles((prevToggles) =>
      prevToggles.map((toggle, i) => (i === index ? !toggle : toggle))
    );
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg">
      
      {['Option 1', 'Option 2', 'Option 3'].map((option, index) => (
        <ToggleButton
          key={index}
          option={option}
          isOn={toggles[index]}
          handleToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default ToggleButtonList;
