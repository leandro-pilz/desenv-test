import "./Navbar.css";

//Components
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="nav">
      <ul id="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        {/* {auth ? (
          <>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">Entrar</NavLink>
            </li>
            <li>
              <NavLink to="/register">Cadastrar</NavLink>
            </li>
          </>
        )} */}
      </ul>
    </nav>
  );
};

export default Navbar;
