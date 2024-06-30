// import React from 'react';

const ProfilePictureUploader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="mb-4 text-lg font-medium">Choose Profile Picture</h2>
        <div className="relative w-32 h-32 mx-auto mb-4">
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-full">
            <svg
              className="w-10 h-10 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm8 3a3 3 0 11-6 0 3 3 0 016 0zM4 15s1-2 6-2 6 2 6 2H4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <button className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 shadow-md">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePictureUploader;
