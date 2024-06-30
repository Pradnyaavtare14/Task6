// import React from 'react';

const ChatUI = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="mb-4">
        <div className="bg-gray-200 p-2 rounded-lg">
          Lorem ipsum dolor sit amet, consectetur.
        </div>
      </div>
      <div className="mb-4 flex items-start">
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="w-10 h-10 rounded-full mr-2"
        />
        <div className="flex flex-col">
          <div className="bg-blue-100 p-2 rounded-lg">
            Vel parturient duis vulputate mauris enim, tortor. Sed parturient sit arcu?
          </div>
          <span className="text-gray-500 text-sm">Read, 9 min ago</span>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="bg-blue-500 text-white p-2 rounded-lg">
          Vel parturient duis vulputate
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
