import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Lazy load components for code splitting
const Home = lazy(() => import("./pages/static/Home"));
const Games = lazy(() => import("./pages/static/Games"));
const PokerNumber = lazy(() => import("./pages/static/PokerNumber"));
const Tambola = lazy(() => import("./pages/static/Tambola"));
const TapIt = lazy(() => import("./pages/static/TapIt"));
const TapItGame = lazy(() => import("./pages/tapit/Game"));
const TugOfWar = lazy(() => import("./pages/static/TugOfWar"));

// Minimal loading component
const Loading = () => (
  <div className="d-flex justify-content-center p-4">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Suspense fallback={<Loading />}>
            <Routes>
              {/* React Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/games" element={<Games />} />

              {/* Game pages */}
              <Route path="/pokernumber" element={<PokerNumber />} />
              <Route path="/tambola" element={<Tambola />} />
              <Route path="/tap-it" element={<TapIt />} />
              <Route path="/tap-it/game/:roomName" element={<TapItGame />} />
              <Route path="/tug-of-war" element={<TugOfWar />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
