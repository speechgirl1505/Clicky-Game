import React from "react";
import "./style.css";

function Wrapper(props) {

  return (
<div>    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Clicky Game
        </a>
      </nav>
  <div className="wrapper">{props.children}</div>
  </div>
  )
}

export default Wrapper;
