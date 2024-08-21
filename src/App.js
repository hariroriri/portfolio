import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import StudentsTrained from './components/StudentsTrained';
import TechNews from './components/TechNews';
import Work from './components/Work';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <StudentsTrained />
      <TechNews />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
