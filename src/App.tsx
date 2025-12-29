import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Research from './components/Research';
import Blog from './components/Blog';
import Lifestyle from './components/Lifestyle';
import HolidayEffects from './components/HolidayEffects';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="app">
      <HolidayEffects />
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
      />
      <main>
        <About />
        <Projects />
        <Research />
        <Blog />
        <Lifestyle />
      </main>
    </div>
  );
}

export default App;
