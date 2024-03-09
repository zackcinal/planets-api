import { Link } from "react-router-dom";

function Planet({ planet }) {
  return (
    <div className="planet-container">
      <Link to={`/planets/${planet._id}`}>
        <img className="planet-photo" src={planet.photo} alt={planet.name} />
        <h3 className="planet-title">{planet.name}</h3>
      </Link>
    </div>
  );
}

export default Planet;
