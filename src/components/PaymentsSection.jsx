import React from 'react';
import TransactionTable from './TransactionTable';
import TransactionGraph from './TransactionGraph';

const PaymentsSection = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Payments</h1>

      {/* Transaction Table */}
      <div className="mb-6">
        <TransactionTable />
      </div>

      {/* Transaction Graph */}
      <div className="mt-6">
        <TransactionGraph />
      </div>
    </div>
  );
};

export default PaymentsSection;
