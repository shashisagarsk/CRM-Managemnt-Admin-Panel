import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TaskList = () => {
  const tasks = [
    { id: 1, title: "Design Landing Page", status: "In Progress" },
    { id: 2, title: "Fix Login Bug", status: "Completed" },
    { id: 3, title: "Update User Profiles", status: "Pending" },
    { id: 4, title: "Refactor Codebase", status: "Completed" },
    { id: 5, title: "Implement Notifications", status: "In Progress" },
    { id: 6, title: "Optimize Database", status: "Pending" },
  ];

  // Dummy data for the chart
  const statusCounts = tasks.reduce(
    (acc, task) => {
      acc[task.status] = acc[task.status] + 1 || 1;
      return acc;
    },
    { Completed: 0, "In Progress": 0, Pending: 0 }
  );

  // Chart data configuration
  const data = {
    labels: ["Completed", "In Progress", "Pending"],
    datasets: [
      {
        label: "Tasks",
        data: [
          statusCounts.Completed,
          statusCounts["In Progress"],
          statusCounts.Pending,
        ],
        backgroundColor: ["#4CAF50", "#2196F3", "#FFC107"],
        borderColor: ["#388E3C", "#1976D2", "#FFA000"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Task Status Overview",
      },
    },
  };

  return (
    <div className="p-6 ">
      {/* Task List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 ">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{task.title}</h2>
            <p className="text-sm text-gray-600">{task.status}</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-lg">
        <div className="h-64 sm:h-48 md:h-64 lg:h-72 ">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default TaskList;
