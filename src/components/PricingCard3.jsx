// import React from 'react';

const PricingCard3 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-blue-900 text-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h2 className="text-2xl font-semibold mb-4">Professional</h2>
        <p className="mb-8">Complete pack for professional</p>
        <div className="text-5xl font-bold mb-4">$39<span className="text-xl font-normal">/month</span></div>
        <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded mb-8">Try 7 Days Trial</button>
        <ul className="space-y-2">
          <li className="flex items-center">
            <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Functional offline
          </li>
          <li className="flex items-center">
            <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Synced to cloud database
          </li>
          <li className="flex items-center">
            <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Unlimited quota
          </li>
          <li className="flex items-center">
            <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            100+ integration
          </li>
          <li className="flex items-center">
            <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Advance analytics
          </li>
        </ul>
        <a href="#" className="text-blue-400 hover:underline mt-8 block text-center bg-blue-950">See all features</a>
      </div>
    </div>
  );
}

export default PricingCard3;