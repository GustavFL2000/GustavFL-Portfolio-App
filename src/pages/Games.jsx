
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
      <h1>Velkommen til spilsiden</h1>
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

            {/* Windows */}
            {selectedGame.windowsLink && (
              <div className="download-link">
                <a
                  href={selectedGame.windowsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download til Windows
                </a>
              </div>
            )}

            {/* Mac */}
            {selectedGame.macLink && (
              <div className="download-link">
                <a
                  href={selectedGame.macLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download til Mac
                </a>
              </div>
            )}

            {/* Web */}
            {selectedGame.webLink && (
              <div className="download-link">
                <a
                  href={selectedGame.webLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Åben spillet
                </a>
              </div>
            )}

            {/* Hvis ingen links findes */}
            {!selectedGame.windowsLink &&
              !selectedGame.macLink &&
              !selectedGame.webLink && <p>Link not available</p>}
          </>
        )}
      </Modal>
    </div>
  );
}

export default Games;
