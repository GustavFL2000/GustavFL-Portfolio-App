import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Hjem</Link>  <Link to="/Games">Spil</Link>   <Link to="/Projects">Projekter</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </main>

      <Footer /> {/*ligger altid nederst */}
    </Router>
  );
}

export default App;
