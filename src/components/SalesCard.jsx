/* eslint-disable react/prop-types */
// src/components/SalesCard.js
// import React from 'react';

const SalesCard = ({ percentage, isIncrease, salesType, amount, percentageChange }) => {
  const percentageColor = isIncrease ? 'text-green-500' : 'text-red-500';
  const arrow = isIncrease ? '▲' : '▼';

  return (
    <div className="flex items-center bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200">
        <div className="relative">
          <div className={`absolute inset-0 flex items-center justify-center text-2xl font-bold`}>
            {percentage}%
          </div>
          <svg className="w-16 h-16 transform rotate-90" viewBox="0 0 36 36">
            <path
              className="text-gray-300"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="text-blue-500"
              d={`M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831`}
              strokeDasharray={`${percentage}, 100`}
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            />
          </svg>
        </div>
      </div>
      <div className="ml-4">
        <div className="text-gray-500">{salesType}</div>
        <div className="text-2xl font-bold">{amount}</div>
        <div className={`flex items-center ${percentageColor}`}>
          {arrow} {percentageChange}%
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
