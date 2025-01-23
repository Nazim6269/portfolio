import Button from "../components/Button";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">

      <div className="hero-layout">
        <header className="flex flex-col justify-center items-center text-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col items-center gap-5">
            <div className="hero-text">
              <h1>Nazim Uddin</h1>
            </div>

            <p className="text-white-50 md:text-lg text-sm max-w-2xl relative z-10 pointer-events-none leading-relaxed">
              Frontend developer specializing in React, Next.js, and Node.js.
              I craft performant web applications with clean architecture,
              scalable backends, and thoughtful user experiences.
            </p>

            <Button
              text="View Projects"
              className="md:w-48 md:h-11 w-40 h-10"
              href="#projects"
            />
          </div>
        </header>
      </div>
    </section>
  );
};

export default Hero;
