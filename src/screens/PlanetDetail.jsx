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
      <img className="detail-img" src={planet.photo} alt={planet.name} />
      <p><span className='p-element'>Mass</span><br />{planet.mass}</p>
      <p><span className='p-element'>Diameter</span><br />{planet.diameter}</p>
      <p><span className='p-element'>Mean Radius</span><br />{planet.meanRadius}</p>
      <p><span className='p-element'>Density</span><br />{planet.density}</p>
      <p><span className='p-element'>Gravity</span><br />{planet.gravity}</p>
      <p><span className='p-element'>Escape Velocity</span><br />{planet.escapeVelocity}</p>
      <p><span className='p-element'>Distance from Sun</span><br />{planet.distanceFromSun}</p>
      <p><span className='p-element'>Orbital Period</span><br />{planet.orbitalPeriod}</p>
      <p><span className='p-element'>Day Lenght</span><br />{planet.dayLength}</p>
      <p><span className='p-element'>Moons</span><br />{planet.moons}</p>
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