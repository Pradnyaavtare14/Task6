// import React from 'react';

const ProfileCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
          <div>
            <h2 className="text-lg font-semibold">Reene Sirane</h2>
            <p className="text-sm text-gray-500">@siranereene</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="w-full h-40 bg-gray-300 rounded-md"></div>
          <div className="w-full h-40 bg-gray-300 rounded-md"></div>
          <div className="w-full h-20 bg-gray-300 rounded-md"></div>
          <div className="w-full h-20 bg-gray-300 rounded-md"></div>
          <div className="w-full h-20  bg-gray-300 rounded-md"></div>
          <div className="w-full h-20  bg-gray-300 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
