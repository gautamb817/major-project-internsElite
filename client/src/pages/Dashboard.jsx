import { useEffect, useState } from "react";

export default function Dashboard() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/contact")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">📩 Messages Dashboard</h2>

      {messages.length === 0 ? (
        <p className="text-gray-500">No messages yet.</p>
      ) : (
        <ul className="space-y-4">
          {messages.map((msg) => (
            <li
              key={msg._id}
              className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800"
            >
              <p className="font-semibold">{msg.name}</p>
              <p className="text-gray-700 dark:text-gray-300">{msg.message}</p>
              <p className="text-sm text-gray-500 mt-2">
                {new Date(msg.createdAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
