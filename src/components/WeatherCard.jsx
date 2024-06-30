// import React from 'react';

const WeatherCard = () => {
  return (
    <div className="max-w-xs mx-auto mt-10 p-4 border rounded-lg shadow-md text-center">
      <div className="flex justify-center items-center mb-4">
        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
        
        </div>
      </div>
      <div className="mb-2 text-gray-500">Sun, 9 June</div>
      <div className="text-4xl font-bold mb-2">23° C</div>
      <div className="text-xl text-gray-700">Heavy Rain</div>
    </div>
  );
};

export default WeatherCard;
