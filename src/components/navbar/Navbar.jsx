import "./navbar.scss";
import "bootstrap/dist/css/bootstrap.css";

function Navbar() {
  return (
    <nav className="navbar bg-light ">
      <div className="container">
        <a className="navbar-brand" href="index.php">
          Admin App
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
