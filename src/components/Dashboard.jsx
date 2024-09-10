import React from "react";

const Dashboard = () => {
  return (
    <div className="ml-64 md:ml-64 p-6 space-y-6">
      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-green-200 p-4 rounded-lg shadow-md flex items-center space-x-4">
          <div className="text-3xl">💵</div>
          <div>
            <p className="text-sm font-semibold text-gray-700">Total Revenue</p>
            <p className="text-xl font-bold">$4249</p>
          </div>
        </div>

        <div className="bg-pink-200 p-4 rounded-lg shadow-md flex items-center space-x-4">
          <div className="text-3xl">👥</div>
          <div>
            <p className="text-sm font-semibold text-gray-700">Total Users</p>
            <p className="text-xl font-bold">249</p>
          </div>
        </div>

        <div className="bg-yellow-200 p-4 rounded-lg shadow-md flex items-center space-x-4">
          <div className="text-3xl">➕</div>
          <div>
            <p className="text-sm font-semibold text-gray-700">New Users</p>
            <p className="text-xl font-bold">2</p>
          </div>
        </div>

        <div className="bg-red-200 p-4 rounded-lg shadow-md flex items-center space-x-4">
          <div className="text-3xl">⚠️</div>
          <div>
            <p className="text-sm font-semibold text-gray-700">Issues</p>
            <p className="text-xl font-bold">3</p>
          </div>
        </div>
      </div>

      {/* Graph Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Graph 1</h2>
          {/* Placeholder for Graph */}
          <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
            Graph 1
          </div>
        </div>
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Graph 2</h2>
          <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
            Graph 2
          </div>
        </div>
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Graph 3</h2>
          <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
            Graph 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
