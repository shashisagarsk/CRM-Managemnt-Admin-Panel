import React from "react";
import TaskList from "../transaction/TaskList"; // Assume TaskList component shows the list of tasks

const TasksSection = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Tasks</h1>
      <TaskList />
    </div>
  );
};

export default TasksSection;
