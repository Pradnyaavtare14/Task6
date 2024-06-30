// import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart1 = () => {
  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Weekly Data',
        data: [20, 41.32, 30, 55, 40, 60, 70],
        fill: false,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: '#000',
        borderWidth: 2,
        tension: 0.4,
        pointBorderColor: '#000',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#000',
        pointHoverBorderColor: '#fff',
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 10,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
          color: '#f3f4f6',
        },
      },
    },
  };

  return (
    <div className="w-full max-w-md mx-auto my-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Line Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart1;
