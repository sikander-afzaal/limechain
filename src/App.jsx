import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Index from "./Pages/Landing/Index";
import Metaverse from "./Pages/Metaverse/Metaverse";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Routes>
        <Route element={<Index />} path="/" />
        <Route element={<Metaverse />} path="/metalabz" />
      </Routes>
    </div>
  );
}

export default App;
