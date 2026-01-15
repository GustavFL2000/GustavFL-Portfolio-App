import "../styles/Footer.css";
import { useEffect, useState } from "react";

const APP_VERSION = "1.0.0";

function Footer() {

const [version, setVersion] = useState("");

  useEffect(() => {
    fetch("/version.txt")
      .then(res => res.text())
      .then(text => setVersion(text.trim()));
  }, []);

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
      <small>Version {version}</small>
    </footer>
  );
}

export default Footer;
