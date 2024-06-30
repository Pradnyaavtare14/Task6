// import React from 'react';

const Dropdown = () => {
  return (
    <div className="max-w-xs mx-auto">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="options">
        <h1>Select an option:</h1>
      </label>
      <select
        id="options"
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:border-blue-500"
      >
        <option className="text-blue-500 bg-blue-100">Option A</option>
        <option className="text-blue-500 bg-blue-100">Option B</option>
        <option className="text-blue-500 bg-blue-100">Option C</option>
      </select>
    </div>
  );
};

export default Dropdown;
