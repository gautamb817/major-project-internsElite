export default function Projects() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Project 1"
            className="rounded w-full object-cover"
          />
          <h3 className="mt-4 text-xl font-semibold">Project 1</h3>
          <p className="text-gray-600">Short description of the project.</p>
          <div className="mt-2 flex space-x-4">
            <a href="#" className="text-blue-600">GitHub</a>
            <a href="#" className="text-blue-600">Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
