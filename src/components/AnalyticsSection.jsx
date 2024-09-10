import React from 'react';
import Graph from './Graph';

const AnalyticsSection = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-green-200 p-4 rounded-lg shadow-md">
          <h2 className="text-sm font-semibold">Total Revenue</h2>
          <p className="text-2xl font-bold">$3249</p>
        </div>
        <div className="bg-pink-200 p-4 rounded-lg shadow-md">
          <h2 className="text-sm font-semibold">Total Users</h2>
          <p className="text-2xl font-bold">249</p>
        </div>
        <div className="bg-yellow-200 p-4 rounded-lg shadow-md">
          <h2 className="text-sm font-semibold">New Users</h2>
          <p className="text-2xl font-bold">2</p>
        </div>
      </div>

      {/* Graph Section */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Graph Section</h2>
        <Graph />
      </div>
    </div>
  );
};

export default AnalyticsSection;
