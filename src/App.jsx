import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
