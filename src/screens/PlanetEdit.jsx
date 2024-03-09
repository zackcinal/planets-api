import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPlanet, editPlanet } from "../services/planets.js";

function PlanetEdit() {
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

  let { id } = useParams();
  let navigate = useNavigate();

  async function fetchPlanet() {
    const onePlanet = await getPlanet(id);
    setPlanet(onePlanet);
  }

  useEffect(() => {
    fetchPlanet();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await editPlanet(id, planet);
    navigate(`/planets/${id}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPlanet((prevPlanet) => ({
      ...prevPlanet,
      [name]: value,
    }));
  };

  return (
  <div className="planet-edit">
    <h1 className="edit-h1">Edit Planet</h1>
    <form onSubmit={handleSubmit} className="edit-planet-form">
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
        type="text"
        placeholder="Moons"
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
      <button type="submit">Save and Finish Editing</button>
    </form>
  </div>
  );
}

export default PlanetEdit;
