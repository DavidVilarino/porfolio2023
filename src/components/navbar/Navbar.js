import { NavLink } from "react-router-dom";
import "./Navbar.scss";


export default function Navbar() {
  return (
    
    <div className="nav">
      <div className="nav-cnt">
        <div className="nav-bars"></div>
        <div className="nav-bars"></div>
        <div className="nav-bars"></div>
      </div>
      <div className="nav-anch">
        <ul className="nav-anch__ul">
          <li>
            <NavLink to="/" className="nav-anch__a">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="nav-anch__a">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-anch__a">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-anch__a">About</NavLink>
          </li>
        </ul>
      </div>
    </div>
    
  );
}

