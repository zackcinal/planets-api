import './App.css';
import Nav from "./components/Nav.jsx"
import Home from "./screens/Home.jsx"
import Planets from "./screens/Planets.jsx"
import PlanetDetail from "./screens/PlanetDetail.jsx"
import PlanetCreate from "./screens/PlanetCreate.jsx"
import PlanetEdit from "./screens/PlanetEdit"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/planets/:id" element={<PlanetDetail />} />
        <Route path="/add-planet" element={<PlanetCreate />} />
        <Route path="/planets/:id/edit" element={<PlanetEdit />} />
      </Routes>
    </div>
  );
}

export default App;
