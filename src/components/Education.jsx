import "../styles/Education.css";

const Education = () => {
  return (
    <section className="education" id="education">
      <h2 className="education-title">Education</h2>
      <span className="underline"></span>

      <div className="education-list">
        {/* M.Tech */}
        <div className="education-card">
          <h3>M.Tech – Computer Science & Engineering</h3>
          <p className="institute">
            Indian Institute of Technology, Patna
          </p>
          <p className="duration">CGPA: 9.23 &nbsp;|&nbsp; 2025 – Present</p>
        </div>

        {/* B.E */}
        <div className="education-card">
          <h3>B.E. – Computer Science & Engineering</h3>
          <p className="institute">
            St. Francis Institute of Technology, Mumbai
          </p>
          <p className="duration">CGPA: 9.35 &nbsp;|&nbsp; 2021 – 2025</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
