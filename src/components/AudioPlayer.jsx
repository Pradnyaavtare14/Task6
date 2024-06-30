// import React from 'react';

const AudioPlayer = () => {
  return (
    <div className="bg-white shadow-md rounded-lg flex items-center mt-20 ml-20 p-4 w-96">
      <div className="bg-gray-300 rounded-full w-12 h-12 mr-4"></div>
      <div className="flex flex-col flex-grow">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">Susan Braun</span>
          <div className="flex space-x-2">
            <button className="focus:outline-none">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.707 5.293a1 1 0 010 1.414L2.414 9H13a1 1 0 010 2H2.414l2.293 2.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="focus:outline-none">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="focus:outline-none">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M15.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L17.586 10H7a1 1 0 110-2h10.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <span className="text-gray-600 text-sm">All this world</span>
        <div className="flex items-center mt-2">
          <div className="h-1 bg-gray-300 flex-grow rounded-full overflow-hidden">
            <div className="bg-blue-500 h-full w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
