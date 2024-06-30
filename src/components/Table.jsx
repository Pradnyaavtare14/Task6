// src/components/Table.js
// import React from 'react';

const data = [
  {
    fullName: "Rafael Sinatra",
    email: "rafaelsinatra@email.com",
    status: "Active",
    phone: "(+62) 812 3456 7890",
    revenue: "$724",
    rating: 4
  },
  {
    fullName: "Murray Simon",
    email: "simon.m@email.com",
    status: "Active",
    phone: "(+62) 812 3456 7890",
    revenue: "$892",
    rating: 5
  },
  {
    fullName: "Jun Simha",
    email: "junsimha9@email.com",
    status: "Active",
    phone: "(+62) 812 3456 7890",
    revenue: "$183",
    rating: 2
  },
  {
    fullName: "Tyson Sam",
    email: "sentenz1@email.com",
    status: "Active",
    phone: "(+62) 812 3456 7890",
    revenue: "$284",
    rating: 3
  },
  {
    fullName: "Chloe Sue",
    email: "sue.chloe@email.com",
    status: "Active",
    phone: "(+62) 812 3456 7890",
    revenue: "$239",
    rating: 3
  },
  {
    fullName: "Samuel Romero",
    email: "romerooo.samuel@email.com",
    status: "Active",
    phone: "(+62) 812 3456 7890",
    revenue: "$192",
    rating: 2
  },
  {
    fullName: "Tennessee Klok",
    email: "klok.tennss@email.com",
    status: "Active",
    phone: "(+62) 812 3456 7890",
    revenue: "$924",
    rating: 5
  }
];

const Table = () => {
  return (
    <div className="p-4">
      <div >
        <table className="min-w-full max-h-screen bg-white w-full">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-200"> </th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-400">FULL NAME</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left  text-gray-400">EMAIL ADDRESS</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left  text-gray-400">STATUS</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left  text-gray-400">PHONE NUMBER</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left  text-gray-400">REVENUE</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left  text-gray-400">RATING</th>
              <th className="py-2 px-4 border-b-2 border-gray-200"> </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-200">
                  <input type="checkbox" />
                </td>
                <td className="py-2 px-4 border-b border-gray-200">{row.fullName}</td>
                <td className="py-2 px-4 border-b border-gray-200">{row.email}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <span className="text-white bg-green-500 px-2 py-1 rounded-md text-sm">
                    {row.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-gray-200">{row.phone}</td>
                <td className="py-2 px-4 border-b border-gray-200">{row.revenue}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <span className="mr-2">{row.rating}</span>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className={`h-2.5 rounded-full ${getRatingColor(row.rating)}`} style={{ width: `${row.rating * 20}%` }}></div>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-4 border-b border-gray-200">...</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const getRatingColor = (rating) => {
  if (rating === 5) return 'bg-green-500';
  if (rating === 4) return 'bg-green-400';
  if (rating === 3) return 'bg-yellow-400';
  if (rating === 2) return 'bg-red-400';
  if (rating === 1) return 'bg-red-500';
  return 'bg-gray-200';
};

export default Table;
