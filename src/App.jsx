import  {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Games from './pages/Games'
import { Link } from 'react-router-dom'


function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Hjem</Link> | <Link to="/Games">Spil</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Games" element={<Games />} />
      </Routes>
    </Router>
  );
}

export default App;
