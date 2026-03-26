import { BrowserRouter } from "react-router";
import Navbar from "./components/NavBar";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";


const App = () => (
  <BrowserRouter>
    <Navbar />
    <Hero />
    <Projects />
    <Skills />
    <Experience />
    <Contact />
    <Footer />
  </BrowserRouter>
);

export default App;
