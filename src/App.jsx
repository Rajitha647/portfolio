
import './App.css'
import Home from './components/home';
import Navbars from './components/nav'
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import Testimonials from './components/Testimonials';
import Footer from './components/footer';
import Skills from './components/Skills';

function App() {

  return (
    <>
      <Navbars/>
      <main>
        <Home />
        <About />
        <Skills/>
        <Projects />
        {/* <Testimonials/> */}
        <Contact />
        <Footer/>
      </main>
    </>
  )
}

export default App;
