import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Error: " + data.error);
      }
    } catch (err) {
      console.error(err);
      setStatus("Server error. Try again later.");
    }
  };

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full border p-2 rounded"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          className="w-full border p-2 rounded"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded w-full sm:w-auto hover:bg-blue-700">
          Send
        </button>
      </form>
      {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
    </section>
  );
}
