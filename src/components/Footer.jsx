import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Gustav Færmann Lassen</p>
      <p>
        Linkdin:{" "} 
        <a href = "https://www.linkedin.com/in/gustav-faermann-lassen">gustav-faermann-lassen</a>
      </p>
      <p>
        Lavet i React | Kontakt:{" "}
        <a href="mailto:gustavfl13@gmail.com">gustavfl13@gmail.com</a>
      </p>
    </footer>
  );
}

export default Footer;
