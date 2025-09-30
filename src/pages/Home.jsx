import '../styles/Home.css';

function Home() {
  return (
    <div className='home-container'>
      <h1>Velkommen til min portolio WebApp</h1>
      <p>Dette er en app, der indeholder links til Gustav Færmann Lassens github, gitlab og diverse projekter.</p>
      <a
        href="https://gitlab.com/users/gustavfl13/projects"
        className="link-display-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="link-display">
          <p>Link to my gitlab project list</p>
          <p>Click me!</p>
        </div>
      </a>

      <a
        href="https://github.com/GustavFL2000"
        className="link-display-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="link-display">
          <p>Link to my github project list</p>
          <p>Click me!</p>
        </div>
      </a>

    </div>
  );
}

export default Home;