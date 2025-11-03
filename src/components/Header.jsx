import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <nav>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Hjem
        </Link>
        <Link
          to="/Games"
          className={location.pathname === "/Games" ? "active" : ""}
        >
          Spil
        </Link>
        <Link
          to="/Projects"
          className={location.pathname === "/Projects" ? "active" : ""}
        >
          Projekter
        </Link>
      </nav>
    </header>
  );
}

export default Header;
