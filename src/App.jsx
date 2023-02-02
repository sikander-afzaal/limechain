import { Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./Pages/Landing/Index";
import Metaverse from "./Pages/Metaverse/Metaverse";

function App() {
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
