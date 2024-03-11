import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPlanet } from "../services/planets.js";

function PlanetCreate() {
  const [planet, setPlanet] = useState({
    name: "",
    mass: "",
    diameter: "",
    meanRadius: "",
    density: "",
    gravity: "",
    escapeVelocity: "",
    distanceFromSun: "",
    orbitalPeriod: "",
    dayLength: "",
    moons: 0,
    photo: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createPlanet(planet);
    navigate("/planets");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPlanet((prevPlanet) => ({
      ...prevPlanet,
      [name]: value,
    }));
  };

  return (
    <div className="add-planet">
      <h1 className="planets-h1">Add a planet in our database!</h1>
      <form onSubmit={handleSubmit} className="create-planet">
        <input
          type="text"
          placeholder="Please enter planet's name"
          name="name"
          value={planet.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Mass"
          name="mass"
          value={planet.mass}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Diameter"
          name="diameter"
          value={planet.diameter}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Mean Radius"
          name="mean radius"
          value={planet.meanRadius}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Density"
          name="density"
          value={planet.density}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Gravity"
          name="gravity"
          value={planet.gravity}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Escape Velocity"
          name="escape velocity"
          value={planet.escapeVelocity}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Distance from Sun"
          name="distance from sun"
          value={planet.distanceFromSun}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Orbital Period"
          name="orbital period"
          value={planet.orbitalPeriod}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Day Length"
          name="day length"
          value={planet.dayLength}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Moons"
          min={0}
          name="moons"
          value={planet.moons}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Add image url"
          name="image"
          value={planet.photo}
          onChange={handleChange}
        />
        <button type="submit">Create your planet</button>
      </form>
    </div>
  );
}

export default PlanetCreate;
