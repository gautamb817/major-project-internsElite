import { useEffect, useState } from "react";

export default function Dashboard() {
  const [messages, setMessages] = useState([]);

  // Fetch all messages
  useEffect(() => {
    fetch("http://localhost:5000/api/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error(err));
  }, []);

  // Delete message by ID
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/messages/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (data.success) {
        setMessages(messages.filter((msg) => msg._id !== id));
      } else {
        alert("Error deleting message");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">📩 Messages Dashboard</h2>

      {messages.length === 0 ? (
        <p className="text-gray-600">No messages yet.</p>
      ) : (
        <ul className="space-y-4">
          {messages.map((msg) => (
            <li
              key={msg._id}
              className="p-4 border rounded-md shadow-sm bg-white dark:bg-gray-800 flex justify-between items-start"
            >
              <div>
                <p className="font-semibold">{msg.name}</p>
                <p className="text-gray-700 dark:text-gray-300">{msg.message}</p>
                <p className="text-xs text-gray-500">
                  {new Date(msg.createdAt).toLocaleString()}
                </p>
              </div>

              {/* Delete button */}
              <button
                onClick={() => handleDelete(msg._id)}
                className="ml-4 text-red-500 hover:text-red-700 font-bold"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
