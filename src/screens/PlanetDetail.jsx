import { useState, useEffect } from 'react'
import { getPlanet, deletePlanet } from "../services/planets"
import { Link, useParams, useNavigate } from "react-router-dom"

function PlanetDetail() {
  const [planet, setPlanet] = useState({})

  let { id } = useParams();
  let navigate = useNavigate();

  const fetchPlanet = async () => {
    const onePlanet = await getPlanet(id)
    setPlanet(onePlanet)
  }

  useEffect(() => {
    fetchPlanet()
  }, [])

  const handleDelete = async () => {
    await deletePlanet(id)
    navigate("/planets")
  }

  return (
    <div className='planet-detail'>
      <h1 className='detail-h1'>{planet.name}</h1>
      <img src={planet.photo} alt={planet.name} />
      <p>Mass:{planet.mass}</p>
      <p>Diameter:{planet.diameter}</p>
      <p>Mean Radius:{planet.meanRadius}</p>
      <p>Density:{planet.density}</p>
      <p>Gravity:{planet.gravity}</p>
      <p>Escape Velocity:{planet.escapeVelocity}</p>
      <p>Distance from Sun:{planet.distanceFromSun}</p>
      <p>Orbital Period:{planet.orbitalPeriod}</p>
      <p>Day Lenght:{planet.dayLength}</p>
      <p>Moons:{planet.moons}</p>
      <div className='detail-button'>
        <Link to={`/planets/${id}/edit`}>
          <button className='edit-button'>EDIT</button>
        </Link>
        <button onClick={handleDelete} className='delete-button'>DELETE</button>
        <Link to={"/planets"}>
          <button className='edit-button'>GO BACK</button>
          </Link>
      </div>
    </div>
  )
}

export default PlanetDetail