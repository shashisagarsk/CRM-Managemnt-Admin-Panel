import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TransactionGraph = () => {
  const data = {
    labels: ['August 15', 'August 16', 'August 17', 'August 18'],
    datasets: [
      {
        label: 'Transaction Amount',
        data: [100, 250, 75, 500],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Transaction Amount',
        data: [10, 250, 75, 100],
        borderColor: 'rgba(511, 16, 25, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Transactions Overview',
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-1/2 ">
      <Line data={data} options={options} />
    </div>
  );
};

export default TransactionGraph;
