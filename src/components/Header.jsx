import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/">Hjem</Link>
        <Link to="/Games">Spil</Link>
        <Link to="/Projects">Projekter</Link>
      </nav>
    </header>
  );
}

export default Header;
