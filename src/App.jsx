import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Hjem</Link> | <Link to="/Games">Projekter</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Games" element={<Games />} />
        </Routes>
      </main>

      <Footer /> {/*ligger altid nederst */}
    </Router>
  );
}

export default App;
