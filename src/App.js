import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
// import Projects from './components/Projects/Projects';
// import Blog from './components/Blog/Blog';
// import Resume from './components/Resume/Resume';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<About />} />
          {/* <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resume" element={<Resume />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
