import "../styles/Projects.css";
import project1 from "../assets/project/C2C.png";
import project2 from "../assets/project/Bloombuddy.png";
import project3 from "../assets/project/Studentdb.png";

const Projects = () => {
    const visitproject1 = ()=>{
        window.open("https://github.com/mig2002/C2C","_blank")
    }
    const visitproject2 = ()=>{
        window.open("https://github.com/mig2002/BloomBuddy","_blank")
    }
    const visitproject3 = ()=>{
        window.open("https://github.com/mig2002/facerecog","_blank")
    }
  return (
    <section className="projects" id="projects">
  <h2 className="projects-title">Projects</h2>
  <span className="underline"></span>

  {/* Project 1 */}
  <div className="project-card">
    <div className="project-text">
      <h3>Courts2Code</h3>
      <p>
         <span className="project-label problem">Problem:</span>  Traditional judicial deposit handling and forensic
        report storage systems lack transparency and are vulnerable to tampering
        and unauthorized modifications.
        <br /><br />
         <span className="project-label solution">Solution:</span> Designed and developed a blockchain-based judicial
        deposit management platform where deposit transactions are managed using
        smart contracts, and forensic reports are stored in a decentralized manner.
        <br /><br />
        <span className="project-label tech">Tech:</span> Solidity, Ethereum, React.js, Node.js, Web3.js, IPFS.
        <br /><br />
       <span className="project-label impact">Impact:</span> Ensures transparency, security, and immutability of
        judicial deposits and forensic evidence, significantly reducing the risk
        of data manipulation.
      </p>
      <button onClick={visitproject1}>View Project</button>
    </div>

    <div className="project-image">
      <img src={project1} alt="Courts2Code" />
    </div>
  </div>

  {/* Project 2 (Reverse) */}
  <div className="project-card reverse">
    <div className="project-image">
      <img src={project2} alt="Bloom Buddy" />
    </div>

    <div className="project-text">
      <h3>Bloom Buddy</h3>
      <p>
         <span className="project-label problem">Problem:</span>  Identifying plant diseases manually is time-consuming
        and often inaccurate, especially for farmers without expert knowledge.
        <br /><br />
        <span className="project-label solution">Solution:</span> Built a machine learning-powered web application
        that analyzes plant leaf images to detect diseases and provide health insights.
        <br /><br />
         <span className="project-label tech">Tech:</span> Python, Machine Learning, Streamlit, SQLite3.
        <br /><br />
        <span className="project-label impact">Impact:</span> Achieved over 90% accuracy in disease detection,
        enabling faster diagnosis, history tracking, and better plant health
        management.
      </p>
      <button onClick={visitproject2}>View Project</button>
    </div>
  </div>

  {/* Project 3 */}
  <div className="project-card">
    <div className="project-text">
      <h3>Face Recognition Attendance</h3>
      <p>
         <span className="project-label problem">Problem:</span> 
         Traditional attendance systems are inefficient and
        susceptible to proxy attendance and record manipulation.
        <br /><br />
        <span className="project-label solution">Solution:</span>
         Developed an automated attendance system using
        face recognition to identify individuals, combined with blockchain-based
        storage for secure record keeping.
        <br /><br />
        <span className="project-label tech">Tech:</span>
         Python, OpenCV, Tkinter, MySQL, Solidity.
        <br /><br />
         <span className="project-label impact">Impact:</span>
          Provides a secure, tamper-proof, and reliable
        attendance management system with improved accuracy and integrity.
      </p>
      <button onClick={visitproject3}>View Project</button>
    </div>

    <div className="project-image">
      <img src={project3} alt="Face Recognition Project" />
    </div>
  </div>
</section>

  );
};

export default Projects;
