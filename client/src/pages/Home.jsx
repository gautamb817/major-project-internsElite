export default function Home() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 px-4">
      <img
        src="https://via.placeholder.com/180"
        alt="profile"
        className="rounded-full shadow-lg w-40 h-40 md:w-56 md:h-56"
      />
      <div>
        <h2 className="text-3xl md:text-5xl font-bold">Hi, I'm Gautam</h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Full Stack Developer | MERN Enthusiast
        </p>
      </div>
    </section>
  );
}
