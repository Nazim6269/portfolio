import Button from "../components/Button";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden max-w-7xl mx-auto">
      <div className="hero-layout">
        <header className="flex flex-col justify-center items-center text-center md:w-full w-screen px-5">
          <div className="flex flex-col items-center gap-7">
            <span className="inline-block px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-blue-50 font-medium border border-white/[0.06] bg-white/[0.02] rounded-full">
              Available for opportunities
            </span>

            <div className="hero-text">
              <h1 className="text-gradient">Nazim Uddin</h1>
              <p className="md:text-xl text-base font-normal text-gray-500 mt-3 tracking-normal">
                Frontend Engineer
              </p>
            </div>

            <p className="text-gray-400 md:text-lg text-sm max-w-xl relative z-10 pointer-events-none leading-relaxed">
              Specializing in React, Next.js, and Node.js — I build performant
              web applications with clean architecture and thoughtful user
              experiences.
            </p>

            <div className="flex items-center gap-4 mt-2">
              <Button
                text="View Projects"
                className="md:w-44 md:h-11 w-36 h-10"
                href="#projects"
              />
              <a
                href="#contact"
                className="inline-flex items-center justify-center md:w-44 md:h-11 w-36 h-10 rounded-md border border-white/10 text-sm font-medium text-gray-300 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Hero;
