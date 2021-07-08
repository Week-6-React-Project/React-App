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
            <p>mustafovasemra@yahoo.com</p>
          </div>
        </div>
        <div>
          <img src="../../images/voja.png" />
          <div className="team-info">
            <h4>Vojislav Zaja</h4>
            <p>vojislavzaja@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
