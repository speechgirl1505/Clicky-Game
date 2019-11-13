import React from "react";
import "./style.css";

function Wrapper(props) {

  return (
<div>    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul>
        <li><a className="navbar-brand" href="/">Clicky Game</a></li>
        <li>Click an Image to Begin!</li>
        </ul>
      </nav>
  <div className="wrapper">{props.children}</div>
  </div>
  )
}

export default Wrapper;
