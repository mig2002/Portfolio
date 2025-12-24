import "../styles/hero.css";
import profile from "../assets/Mukesh.jpeg";


const Hero = () => {

    const goto = () => {
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
    }
    // const visit = () => {
    //     window.open("https://www.linkedin.com/in/mukesh-gupta-b1878a248/", "_blank")
    // }
    return (
        <section className="hero" id="home">
            {/* LEFT */}
            <div className="hero-left">

                <h1 className="hero-title">
                    Hello, My Name is{" "}<br />

                    <span className="typewriter-wrapper">

                        <span className="typewriter">Mukesh Gupta</span>
                    </span>
                </h1>



                <p>
                    M.Tech CSE @ IIT Patna

                    Full Stack Developer | Blockchain | Machine Learning
                    Building scalable web, blockchain, and ML systems to solve real-world problems.

                </p>

                <div className="hero-buttons">
                    <button className="primary-btn" onClick={goto}>
                        Projects
                    </button>

                    {/* <button className="secondary-btn" onClick={visit}>
                        LinkedIn
                    </button> */}

                    <a
                        href="/Mukesh_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary-btn"
                    >
                        Resume
                    </a>
                </div>

            </div>

            {/* RIGHT */}
            <div className="hero-right">
                <div className="blob"></div>
                <img src={profile} alt="profile" />
            </div>
        </section>
    );
};

export default Hero;
