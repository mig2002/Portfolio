import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://github.com/mig2002" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/mukesh-gupta-b1878a248/" target="_blank">LinkedIn</a>
        <a href="mailto:mg6318497@gmail.com">Email</a>
      </div>

      <p className="footer-text">
        © {new Date().getFullYear()} Mukesh Gupta. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
