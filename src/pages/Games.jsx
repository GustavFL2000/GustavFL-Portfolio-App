import { useEffect, useState } from "react";
import "../styles/Games.css";
function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/games.json")
      .then(res => res.json())
      .then(data => setGames(data));
  }, []);

  return (
    <div>
      <h1>Welcome to the Game Page</h1>
      <p>This is the Game page of the application.</p>

      <div className="game-grid">
        {games.map(game => (
          <a
            key={game.id}
            href={game.link}
            className="game-card-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="game-card">
              <img src={game.image} alt={game.title} />
              <h2>{game.title}</h2>
              <p>{game.description}</p>
        
          
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Games;
