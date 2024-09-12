import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Graph = () => {
  // Sample data for the graph
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Page Impressions',
        data: [100, 20, 30, 400, 50,75,85,242,89,85,41,21,],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Adsense Clicks',
        data: [15, 25, 325, 45, 55,114,215,312,45,21,85,65,],
        borderColor: 'rgba(54, 162, 235, 1)',
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
        text: 'Graph Data Overview',
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-1/2 ">
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
