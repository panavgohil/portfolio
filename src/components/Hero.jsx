import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 pt-20">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side - Photo */}
        <div className="flex justify-center order-1 md:order-none">
          <img
            src={profile}
            alt="Panav Gohil"
            className="w-80 h-80 object-cover rounded-full border-4 border-sky-500 shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>

        {/* Right Side - Content */}
        <div>

          <p className="text-sky-400 text-lg font-medium mb-4">
            Electronics Engineering (VLSI Design & Technology) @ DTU
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Panav Gohil
          </h1>

          <h2 className="text-2xl md:text-4xl mt-6 text-slate-300 font-light">
            Designing Systems That Sense, Think and Act
          </h2>

          <p className="mt-8 text-slate-400 text-lg leading-relaxed max-w-2xl">
            Passionate about Artificial Intelligence, Computer Vision,
            Embedded Systems, Intelligent Hardware Systems, and
            Technology Entrepreneurship. Currently building AI-powered
            solutions that bridge software intelligence with real-world
            hardware systems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-sky-500 rounded-xl hover:bg-sky-600 hover:scale-105 transition duration-300 font-medium"
            >
              Resume
            </a>

            <a
              href="https://github.com/panavgohil"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-sky-500 rounded-xl hover:bg-sky-600 hover:scale-105 transition duration-300 font-medium"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/panavgohil/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-sky-500 rounded-xl hover:bg-sky-600 hover:scale-105 transition duration-300 font-medium"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;