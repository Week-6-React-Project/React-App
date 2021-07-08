import React from "react";
import "./Team.css";

function Team({ teamRef }) {
  return (
    <section ref={teamRef} className="team">
      <h3>MEET THE TEAM</h3>
      <div className="meet-the-team">
        <div>
          <img src="../../images/semra.png" />
          <div className="team-info">
            <h4>Semra Mustafova</h4>
            <a href="mailto: mustafovasemra@yahoo.com">
            E-mail
            </a>
            <a href="https://www.linkedin.com/in/semra-mustafova/">
            LinkedIn
            </a>
            <a href="https://github.com/MustafovaSemra">
            GitHub
            </a>
          </div>
        </div>
        <div>
          <img src="../../images/voja.png" />
          <div className="team-info">
            <h4>Vojislav Zaja</h4>
            <a href="mailto: vojislavzaja@gmail.com">
            E-mail
            </a>
            <a href="https://www.linkedin.com/in/vojislav-zaja/">
            LinkedIn
            </a>
            <a href="https://github.com/vojaso82">
            GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
