import "./navbar.scss";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Navbar() {
  return (
    <nav className="navbar bg-light ">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Admin App
        </NavLink>
        <div class="right d-flex">
          <a href="addPizza.php">
            <NavLink to="/addEngineer">
              <button type="button" class="btn btn-secondary">
                ADD
              </button>
            </NavLink>
          </a>
          <a href="addPizza.php">
            <NavLink to="/viewEngineer">
              <button type="button" class="mx-2 btn btn-warning">
                VIEW
              </button>
            </NavLink>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
