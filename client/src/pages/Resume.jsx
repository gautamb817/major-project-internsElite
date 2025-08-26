export default function Resume() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>
      <p>Download my resume:</p>
      <a
        href="/resume.pdf"
        download
        className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
      >
        Download Resume
      </a>
    </section>
  );
}
