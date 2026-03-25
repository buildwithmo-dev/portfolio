import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-300">
      <Navbar />

      <main className="pt-20">
        <Hero />
        {/* <About /> */}
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}