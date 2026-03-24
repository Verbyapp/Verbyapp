import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VerbyLanding from './pages/VerbyLanding';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VerbyLanding />} />
      </Routes>
    </Router>
  );
}

export default App;