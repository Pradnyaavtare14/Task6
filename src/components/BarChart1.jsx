// src/components/BarChart.js
// import React from 'react';

const data = [
  { category: 'Finance', color: 'bg-blue-500', value1: 234, value2: 643 },
  { category: 'Development', color: 'bg-yellow-500', value1: 344, value2: 743 },
  { category: 'Vacation', color: 'bg-red-500', value1: 409, value2: 852 },
  { category: 'Startup', color: 'bg-purple-500', value1: 593, value2: 982 },
  { category: 'Technology', color: 'bg-green-500', value1: 842, value2: 947 },
  { category: 'Research', color: 'bg-pink-500', value1: 534, value2: 409 },
  { category: 'Design', color: 'bg-teal-500', value1: 942, value2: 528 },
  { category: 'Product', color: 'bg-orange-500', value1: 152, value2: 329 },
  { category: 'Business', color: 'bg-gray-500', value1: 242, value2: 428 },
];

const BarChart = () => {
  return (
    <div className="flex flex-col items-center bg-white text-black p-6 rounded-lg">
      <h2 className="text-xl mb-4">Monthly Earning</h2>
      <div className="text-4xl font-bold">$92,347 <span className="text-green-500 text-xl">▲ 12%</span></div>
      <div className="text-gray-400 mb-4">Compared to earning last year</div>
      <div className="w-full flex justify-center mb-6">
        <div className="relative w-full h-24 flex items-end">
          {/* Placeholder bars with reduced height */}
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center mx-1 ml-5">
              {/* <div className={`h-4 w-1 ${item.color}`}></div> */}
              {/* <div className={`h-6 w-1 ${item.color} mt-1`}></div> */}
              {/* <div className={`h-8 w-1 ${item.color} mt-1`}></div>
              <div className={`h-10 w-1 ${item.color} mt-1`}></div>
              <div className={`h-4 w-1 ${item.color} mt-1`}></div> */}
              <div className={`h-2 w-1 ${item.color} mt-1`}></div>
              <div className={`h-8 w-1 ${item.color} mt-1`}></div>
              <div className={`h-7 w-1 ${item.color} mt-1`}></div>
              <div className={`h-4 w-1 ${item.color} mt-1`}></div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between mt-2">
            <span className="flex items-center">
              <span className={`h-2 w-2 ${item.color} rounded-full mr-2`}></span>
              {item.category}
            </span>
            <span>{item.value1}</span>
            <span>{item.value2}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
