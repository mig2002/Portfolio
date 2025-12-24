import "../styles/About.css";
import profile from "../assets/Mukesh.jpeg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Image */}
        <div className="about-image">
          <img src={profile} alt="Mukesh Gupta" />
        </div>

        {/* Content */}
        <div className="about-content">
          <h2>About Me</h2>

          <p>
            I am an M.Tech Computer Science student at IIT Patna with a strong
            foundation in Data Structures, Full Stack Development, Blockchain,
            and Machine Learning.
          </p>
    
          <p>
            I enjoy building real-world systems such as blockchain-based judicial
            platforms, ML-powered applications, and scalable web solutions.
            I am a GATE-qualified candidate with active involvement in
            competitive programming and technical leadership roles.
          </p>

          {/* Social Links */}
          <div className="about-socials">
            <a href="https://github.com/mig2002" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/mukesh-gupta-b1878a248/" target="_blank">LinkedIn</a>
            <a href="mailto:mg6318497@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
