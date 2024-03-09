import { useState, useEffect } from "react";
import { getPlanets } from "../services/planets.js";
import Planet from "../components/Planet.jsx";

function Planets() {
  const [planets, setPlanets] = useState([]);

  async function fetchPlanets() {
    const allPlanets = await getPlanets();
    setPlanets(allPlanets);
  }

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <div className="planets-main">
      <h1 className="planets-h1">PLANETS</h1>
      <div className="planets-container">
        {
          planets.map((planet) => (
            <Planet planet={planet} key={planet.id} />
          ))
        }
      </div>
    </div>
  );
}

export default Planets;
