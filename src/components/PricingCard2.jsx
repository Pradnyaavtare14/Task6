// import React from 'react'

const PricingCard2 = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-semibold text-gray-800">Premium</h2>
            <p className="text-gray-600">Best for intermediate level</p>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-5xl font-bold text-gray-800">$25</p>
          <p className="text-gray-600">/month</p>
        </div>
        <div className="mt-6">
          <button className="w-full bg-blue-600 text-white py-2 rounded-md">Try 7 Days Trial</button>
        </div>
        <div className="mt-6">
          <p className="text-gray-800 font-semibold">Lite Include:</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-gray-600">
              <svg className="h-6 w-6 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Functional offline
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="h-6 w-6 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Synced to cloud database
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="h-6 w-6 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Limited quota
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="h-6 w-6 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              100+ integration
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-100 p-4 text-center">
        <button className="text-blue-600 font-semibold">See all features</button>
      </div>
    </div>
  )
}

export default PricingCard2