// import React from 'react';

const UserReviewCard = () => {
  return (
    <div className="max-w-sm p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">User Review</h2>
        <span className="text-xs text-gray-500">Jan 27, 2022</span>
      </div>
      <div className="mt-4 flex items-center">
        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
        <div className="ml-4">
          <h3 className="text-sm font-semibold">Anna Hale</h3>
          <span className="text-xs text-gray-500">82 reviews</span>
        </div>
      </div>
      <p className="mt-4 text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit aliquet ac, leo eget faucibus ac felis eget. Aenean sagittis sit consequat pharetra, nulla ultrices amet erat. Interdum pretium enim.
      </p>
    </div>
  );
};

export default UserReviewCard;
