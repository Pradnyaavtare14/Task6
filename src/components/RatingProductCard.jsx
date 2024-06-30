// import React from 'react';

const RatingProductCard = () => {
  return (
    <div className="max-w-sm p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">Rating Product</h2>
      <div className="mt-4 flex items-center justify-center">
        <div className="w-24 h-24 bg-gray-200 rounded"></div>
      </div>
      <h3 className="mt-4 text-center text-sm font-semibold">Macaron Cake Multicolors</h3>
      <p className="mt-2 text-center text-xs text-gray-500">142 Reviews</p>
    </div>
  );
};

export default RatingProductCard;
