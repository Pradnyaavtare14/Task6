// src/components/PieChart.js
// import React from 'react';

const PieChart1 = () => {
  return (
    <div className="flex flex-col w-96 items-center bg-gray-800 text-white p-6 rounded-lg">
      <h2 className="text-xl mb-4">Target Statistic</h2>
      <div className="relative w-40 h-40">
        <div className="absolute inset-0 rounded-full bg-yellow-400"></div>
        <div className="absolute inset-4 rounded-full bg-blue-500"></div>
        <div className="absolute inset-8 rounded-full bg-red-500"></div>
        <div className="absolute inset-12 rounded-full bg-blue-700 flex items-center justify-center">
          <span className="text-xl">64,09%</span>
        </div>
      </div>
      <div className="mt-6 w-full">
        <div className="flex justify-between">
          <span>Sales</span>
          <span>234</span>
          <span>643</span>
          <div className="w-1/3 bg-blue-500 h-2 ml-2"></div>
        </div>
        <div className="flex justify-between mt-2">
          <span>Product</span>
          <span>344</span>
          <span>743</span>
          <div className="w-1/3 bg-blue-300 h-2 ml-2"></div>
        </div>
        <div className="flex justify-between mt-2">
          <span>Views</span>
          <span>409</span>
          <span>852</span>
          <div className="w-1/3 bg-yellow-400 h-2 ml-2"></div>
        </div>
        <div className="flex justify-between mt-2">
          <span>Users</span>
          <span>593</span>
          <span>982</span>
          <div className="w-1/3 bg-red-500 h-2 ml-2"></div>
        </div>
      </div>
    </div>
  );
};

export default PieChart1;
