// import React from 'react';

const Timeline = () => {
  return (
    <div className="flex justify-between items-center w-full max-w-lg mx-auto my-4">
      <div className="relative flex flex-col items-center">
        <div className="rounded-full bg-blue-500 w-6 h-6 flex items-center justify-center">
          <span className="text-white">1</span>
        </div>
        <span className="mt-2 text-sm">First</span>
      </div>

      <div className="flex-1 h-1 bg-blue-500 mx-2"></div>

      <div className="relative flex flex-col items-center">
        <div className="rounded-full bg-blue-500 w-6 h-6 flex items-center justify-center">
          <span className="text-white">2</span>
        </div>
        <span className="mt-2 text-sm">Second</span>
      </div>

      <div className="flex-1 h-1 bg-blue-500 mx-2"></div>

      <div className="relative flex flex-col items-center">
        <div className="rounded-full border-2 border-blue-500 w-6 h-6 flex items-center justify-center">
          <span className="text-blue-500">3</span>
        </div>
        <span className="mt-2 text-sm text-blue-500">Third</span>
      </div>

      <div className="flex-1 h-1 bg-gray-300 mx-2"></div>

      <div className="relative flex flex-col items-center">
        <div className="rounded-full border-2 border-gray-300 w-6 h-6 flex items-center justify-center">
          <span className="text-gray-300">4</span>
        </div>
        <span className="mt-2 text-sm text-gray-300">Fourth</span>
      </div>

      <div className="flex-1 h-1 bg-gray-300 mx-2"></div>

      <div className="relative flex flex-col items-center">
        <div className="rounded-full border-2 border-gray-300 w-6 h-6 flex items-center justify-center">
          <span className="text-gray-300">5</span>
        </div>
        <span className="mt-2 text-sm text-gray-300">Fifth</span>
      </div>
    </div>
  );
}

export default Timeline;
