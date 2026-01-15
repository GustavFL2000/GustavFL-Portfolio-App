import "../styles/Footer.css";

const APP_VERSION = "1.0.0";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Gustav Færmann Lassen</p>
      <p>
      
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/gustav-faermann-lassen"
          target="_blank"
          rel="noopener noreferrer"
        >
          gustav-faermann-lassen
        </a>
      </p>
      <p>
        Lavet i React | Kontakt:{" "}
        <a href="mailto:gustavfl13@gmail.com">gustavfl13@gmail.com</a>
      </p>
      <span id="app-version">Version {APP_VERSION}</span>
    </footer>
  );
}

export default Footer;
