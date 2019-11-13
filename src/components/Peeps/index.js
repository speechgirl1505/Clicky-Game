import React from "react";
import "./style.css";

function Peeps(props) {
  return (
    <div className="card" onClick={() => props.getHigherScore(props.id)} >
      <div className="img-container">
        <img src={props.image} />
      </div>
      <div className="content">
      </div>
    </div>
  );
}

export default Peeps;