import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Games from './pages/Games';
import PokerNumber from './pages/PokerNumber';
import Tambola from './pages/Tambola';
import TapIt from './pages/TapIt';
import TugOfWar from './pages/TugOfWar';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* React Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />

            {/* Game pages */}
            <Route path="/poker-number" element={<PokerNumber />} />
            <Route path="/tambola" element={<Tambola />} />
            <Route path="/tap-it" element={<TapIt />} />
            <Route path="/tug-of-war" element={<TugOfWar />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
