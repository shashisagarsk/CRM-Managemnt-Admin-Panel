import React from "react";

const TaskList = () => {
  const tasks = [
    { id: 1, title: "Design Landing Page", status: "In Progress" },
    { id: 2, title: "Fix Login Bug", status: "Completed" },
    { id: 3, title: "Update User Profiles", status: "Pending" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {tasks.map((task) => (
        <div key={task.id} className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">{task.title}</h2>
          <p className="text-sm text-gray-600">{task.status}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
