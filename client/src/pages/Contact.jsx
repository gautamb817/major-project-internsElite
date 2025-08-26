export default function Contact() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <form className="space-y-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full border p-2 rounded"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded w-full sm:w-auto hover:bg-blue-700">
          Send
        </button>
      </form>
    </section>
  );
}
