import React from "react";
import "./style.css";

function Peeps(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
      </div>
    </div>
  );
}

export default Peeps;