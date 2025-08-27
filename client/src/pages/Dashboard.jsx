// import { useEffect, useState } from "react";

// export default function Dashboard() {
//   const [messages, setMessages] = useState([]);

//   // Fetch all messages
//   useEffect(() => {
//     fetch("http://localhost:5000/api/messages")
//       .then((res) => res.json())
//       .then((data) => setMessages(data))
//       .catch((err) => console.error(err));
//   }, []);

//   // Delete message by ID
//   const handleDelete = async (id) => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/messages/${id}`, {
//         method: "DELETE",
//       });

//       const data = await res.json();
//       if (data.success) {
//         setMessages(messages.filter((msg) => msg._id !== id));
//       } else {
//         alert("Error deleting message");
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-6">📩 Messages Dashboard</h2>

//       {messages.length === 0 ? (
//         <p className="text-gray-600">No messages yet.</p>
//       ) : (
//         <ul className="space-y-4">
//           {messages.map((msg) => (
//             <li
//               key={msg._id}
//               className="p-4 border rounded-md shadow-sm bg-white dark:bg-gray-800 flex justify-between items-start"
//             >
//               <div>
//                 <p className="font-semibold">{msg.name}</p>
//                 <p className="text-gray-700 dark:text-gray-300">{msg.message}</p>
//                 <p className="text-xs text-gray-500">
//                   {new Date(msg.createdAt).toLocaleString()}
//                 </p>
//               </div>

//               {/* Delete button */}
//               <button
//                 onClick={() => handleDelete(msg._id)}
//                 className="ml-4 text-red-500 hover:text-red-700 font-bold"
//               >
//                 ❌
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import API_URL from '../config/api.js';

// API configuration
//const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export default function Dashboard() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/api/messages`);
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data = await res.json();
        setMessages(data);
        setError("");
      } catch (err) {
        console.error("Failed to fetch messages:", err);
        setError("Failed to load messages. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  // Delete message by ID
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) {
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/messages/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      if (data.success) {
        setMessages(messages.filter((msg) => msg._id !== id));
      } else {
        alert("Error deleting message: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      console.error("Failed to delete message:", err);
      alert("Failed to delete message. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-gray-600">Loading messages...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">📩 Messages Dashboard</h2>

      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {messages.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📭</div>
          <p className="text-gray-600 text-lg">No messages yet.</p>
          <p className="text-gray-500 text-sm mt-2">
            Messages from your contact form will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-sm text-gray-600 mb-4">
            Total messages: {messages.length}
          </p>
          
          <ul className="space-y-4">
            {messages.map((msg) => (
              <li
                key={msg._id}
                className="p-4 border rounded-md shadow-sm bg-white dark:bg-gray-800 flex justify-between items-start hover:shadow-md transition-shadow"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="font-semibold text-lg">{msg.name}</p>
                    <p className="text-blue-600 text-sm">{msg.email}</p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
                    {msg.message}
                  </p>
                  <p className="text-xs text-gray-500">
                    📅 {new Date(msg.createdAt).toLocaleString()}
                  </p>
                </div>

                {/* Delete button */}
                <button
                  onClick={() => handleDelete(msg._id)}
                  className="ml-4 p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                  title="Delete message"
                >
                  🗑️
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}