import React from 'react';

const TransactionTable = () => {
  // Sample data for transactions
  const transactions = [
    {
      id: 'TXN12345',
      amount: '$100',
      date: '2024-08-15',
      status: 'Completed',
    },
    {
      id: 'TXN12346',
      amount: '$250',
      date: '2024-08-16',
      status: 'Pending',
    },
    {
      id: 'TXN12347',
      amount: '$75',
      date: '2024-08-17',
      status: 'Failed',
    },
    {
      id: 'TXN12348',
      amount: '$500',
      date: '2024-08-18',
      status: 'Completed',
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Transactions</h2>
      <table className="w-full text-left table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Transaction ID</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-t">
              <td className="px-4 py-2">{transaction.id}</td>
              <td className="px-4 py-2">{transaction.amount}</td>
              <td className="px-4 py-2">{transaction.date}</td>
              <td className="px-4 py-2">
                <span
                  className={`text-sm font-semibold py-1 px-2 rounded-full ${
                    transaction.status === 'Completed'
                      ? 'bg-green-100 text-green-600'
                      : transaction.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-600'
                      : 'bg-red-100 text-red-600'
                  }`}
                >
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
