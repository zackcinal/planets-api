import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <nav className="navbar">
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/planets">PLANETS</NavLink>
      <NavLink to="/add-planet">ADD PLANET</NavLink>
    </nav>
  )
}

export default Nav