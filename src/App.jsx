import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />   {/* Ny header-komponent */}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
