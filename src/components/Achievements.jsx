import "../styles/Achievements.css";

import codechef from "../assets/coding/Codechef.png";
import leetcode from "../assets/coding/LeetCode.png";
import gfg from "../assets/coding/gfg.png";
import codeforces from "../assets/coding/codeforces.jpg";

const Achievements = () => {
  return (
    <section className="achievements" id="achievements">
      <h2 className="achievements-title">Achievements</h2>
      <span className="underline"></span>

      {/* Achievement Cards */}
      <div className="achievements-grid">
        <div className="achievement-card">
          <h3>GATE Qualified</h3>
          <p>
            AIR <strong>1501</strong> (2025)<br />
            AIR <strong>6317</strong> (2024)
          </p>
        </div>

        <div className="achievement-card">
          <h3>Competitive Programming</h3>
          <p>
            Solved <strong>700+</strong> problems
          </p>
        </div>

        <div className="achievement-card">
          <h3>CodeChef</h3>
          <p>
            <strong>2★</strong> Coder<br />
            Rating 1500+
          </p>
        </div>

        <div className="achievement-card">
          <h3>Contest Rank</h3>
          <p>
            Rank <strong>895</strong> / 5000<br />
            Starters 89 (Div 3)
          </p>
        </div>
      </div>

      {/* Coding Profiles with Photos */}
      <div className="coding-profiles">
        <a
          href="https://www.codechef.com/users/mig_12345678"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-card"
        >
          <img src={codechef} alt="CodeChef" />
          <span>CodeChef</span>
        </a>

        <a
          href="https://leetcode.com/u/_mig_28/"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-card"
        >
          <img src={leetcode} alt="LeetCode" />
          <span>LeetCode</span>
        </a>

        <a
          href="https://www.geeksforgeeks.org/profile/mg631bqg8"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-card"
        >
          <img src={gfg} alt="GeeksforGeeks" />
          <span>GeeksforGeeks</span>
        </a>

        <a
          href="https://codeforces.com/profile/mig11100"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-card"
        >
          <img src={codeforces} alt="Codeforces" />
          <span>Codeforces</span>
        </a>
      </div>
    </section>
  );
};

export default Achievements;
