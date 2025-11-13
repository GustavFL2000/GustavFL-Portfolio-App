import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import "../styles/Games.css";

function Games() {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  const handleGameClick = (game) => {
    setSelectedGame(game);
  };

  const closeModal = () => {
    setSelectedGame(null);
  };

  return (
    <div className="games-container">
      <h1>Velkommen til spil siden</h1>
      <p>Her på siden ses mine færdige og igangværende spil projekter.</p>

      <div className="game-grid">
        {games.map((game) => (
          <div
            key={game.id}
            className="game-card"
            onClick={() => handleGameClick(game)}
          >
            <img src={game.image} alt={game.title} />
            <h2>{game.title}</h2>
            <p>{game.description}</p>
          </div>
        ))}
      </div>

     <Modal isOpen={selectedGame !== null} onClose={closeModal}>
  {selectedGame && (
    <>
      <h2>{selectedGame.title}</h2>
      <img src={selectedGame.image} alt={selectedGame.title} />
      <p>{selectedGame.description}</p>

      {/* Windows link */}
      {selectedGame.link && (
        <div className="download-link">
          <a
            href={selectedGame.link}
            target="_blank"
            rel="noopener noreferrer"
            download={selectedGame.title.includes("(Windows Download zip)")}
          >
            🪟 Download til Windows
          </a>
        </div>
      )}

      {/* Mac link UNDER Windows */}
      {selectedGame.link2 && (
        <div className="download-link">
          <a
            href={selectedGame.link2}
            target="_blank"
            rel="noopener noreferrer"
            download={selectedGame.title.includes("(Mac Download zip)")}
          >
            🍎 Download til Mac
          </a>
        </div>
      )}

      {/* Hvis ingen links findes */}
      {!selectedGame.link && !selectedGame.link2 && <p>Link not available</p>}
    </>
  )}
</Modal>


    </div>
  );
}

export default Games;
