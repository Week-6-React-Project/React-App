import React from "react";
import "./Team.css";

function Team() {
  return (
    <section className="team">
      <h3>Meet the Team</h3>
      <div className="meet-the-team">
        <div>
          <img src="../../images/semra.png" />
          <div className="team-info">
            <h4>Semra Mustafova</h4>
            <p>mustafovasemr@yahoo.com</p>
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
