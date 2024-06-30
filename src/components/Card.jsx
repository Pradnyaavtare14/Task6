// import React from 'react';

const Card = () => {
  return (
    <div className="max-w-sm p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">Jan 4, 2022</span>
        <div className="flex space-x-1">
          <span className="block w-3 h-3 bg-blue-500 rounded-full"></span>
          <span className="block w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="block w-3 h-3 bg-red-500 rounded-full"></span>
        </div>
      </div>
      <h2 className="mt-2 text-lg font-semibold">Finance Landing Page</h2>
      <p className="mt-1 text-gray-500">Create a home page for finance company</p>
      <div className="mt-2 flex items-center">
        <input type="checkbox" className="form-checkbox" checked={false} />
        <span className="ml-2 text-sm">30/92 task</span>
      </div>
      <div className="mt-4 flex items-center justify-between text-gray-500">
        <span className="text-sm">12 Comments</span>
        <span className="text-sm">8 peoples</span>
      </div>
    </div>
  );
};

export default Card;
