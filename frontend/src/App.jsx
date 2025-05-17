import Header from './components/Header/Header';
import About from './components/About/About';
import ChatBox from './components/ChatBox/index.jsx';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience.jsx';
import Education from './components/Education/Education.jsx';
import Contact from './components/Contact/Contact.jsx';
import InteractiveBackground from './components/InteractiveBackground/InteractiveBackground';
import './App.css';


function App() {
  return (
    <div class="site-wrapper">
      <InteractiveBackground>
        <Header />
        <About />
      </InteractiveBackground>
      <ChatBox />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}
export default App;
