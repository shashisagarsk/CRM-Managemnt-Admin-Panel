import React, { useState } from "react";

const MessagesSection = () => {
  const [expandedMessage, setExpandedMessage] = useState(null);

  const messages = [
    {
      id: 1,
      title: "Transaction Alert",
      content: "Your recent transaction of $500 was successful.",
      date: "2024-08-18",
      status: "Read",
    },
    {
      id: 2,
      title: "Payment Reminder",
      content: "Your monthly subscription payment of $99 is due on 2024-08-20.",
      date: "2024-08-17",
      status: "Unread",
    },
    {
      id: 3,
      title: "Account Update",
      content:
        "Your account profile has been successfully updated. Please review your details to ensure they are correct.",
      date: "2024-08-16",
      status: "Read",
    },
    {
      id: 4,
      title: "Low Balance Alert",
      content: "Your account balance has fallen below the minimum threshold of $100.",
      date: "2024-08-15",
      status: "Unread",
    },
  ];

  // Toggle expand/collapse message content
  const toggleMessage = (id) => {
    setExpandedMessage((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Messages</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-4 rounded-lg shadow-md border-l-4 transition-transform transform-gpu duration-300 ease-in-out hover:scale-105 ${
              message.status === "Unread" ? "border-blue-500" : "border-gray-300"
            } bg-white`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleMessage(message.id)}
            >
              <h2 className="text-md font-semibold truncate">{message.title}</h2>
              <span
                className={`text-sm transition-colors ${
                  message.status === "Unread"
                    ? "text-blue-500"
                    : "text-gray-500"
                }`}
              >
                {message.status}
              </span>
            </div>

            {/* Animated Content */}
            <div
              className={`mt-2 overflow-hidden transition-max-height duration-300 ease-in-out ${
                expandedMessage === message.id ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 mt-2 text-sm">{message.content}</p>
              <p className="text-xs text-gray-400 mt-2">{message.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesSection;
