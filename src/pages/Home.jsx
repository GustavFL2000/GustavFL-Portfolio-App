import '../styles/Home.css';

function Home() {
  return (
    <div className='home-container'>
      <h1>Velkommen til min portolio WebApp</h1>
      <p>Dette er en app, der indeholder links til Gustav Færmann Lassens github, spil og andre projekter.</p>

      <a
        href="https://github.com/GustavFL2000"
        className="link-display-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="link-display">
          <p>Link til min GitHub</p>
          <p>Klick mig!</p>
        </div>
      </a>

        <div className="home-image-container">
          <img src="/images/Portfolio.png" alt="Portfolio" className="home-image" />
        </div>
      

    </div>
  );
}

export default Home;