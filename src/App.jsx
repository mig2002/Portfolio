import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Achievements/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
