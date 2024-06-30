/* eslint-disable react/prop-types */
// Breadcrumb.js
// import React from 'react';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex space-x-2 text-gray-600">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <span className="mx-2">/</span>}
          {item.link ? (
            <a href={item.link} className="hover:underline">
              {item.label}
            </a>
          ) : (
            <span>{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
