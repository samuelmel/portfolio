import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const App = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
