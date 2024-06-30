// import React from 'react';

const BlogCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-80">
      <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center mb-4">
        <div className="bg-gray-300 rounded-full px-4 py-1 text-gray-700 text-sm flex items-center">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 4h10M5 11h14m-6 4H5m14 0h-5m-4 4h4"
            />
          </svg>
          Jan 4, 2022
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2">Open Bank Account Easily</h3>
      <p className="text-gray-600 text-sm mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nisi
        nisl, pellentesque malesuada amet diam tristique. Vel id turpis dui
      </p>
      <div className="flex items-center justify-between text-gray-500 text-sm">
        <div className="flex items-center">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10l4.553 2.276a1 1 0 01-.106 1.876l-2.158.432a1 1 0 00-.764.723l-.936 4.157a1 1 0 01-1.945 0l-.937-4.157a1 1 0 00-.764-.723l-2.158-.432a1 1 0 01-.106-1.876L9 10V4a1 1 0 011-1h4a1 1 0 011 1v6z"
            />
          </svg>
          482 Views
        </div>
        <div className="flex items-center">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-9 2a9 9 0 118 0H5z"
            />
          </svg>
          8 Comments
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
