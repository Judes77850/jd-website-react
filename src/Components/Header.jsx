import React from "react";
import "../style/main.css";
import Collapse from "./Collapse"
import { NavLink } from "react-router-dom";


function Header(){
    return(
        <header>
    <div id="neonlogobox">
      <div className="neonlogo">
      <NavLink to="/" className="backToHome">
        <h1>Julien Desaindes</h1>
        <p className="acch1">Developpeur WEB junior</p>
      </NavLink>
      </div>
      {Collapse()}
    </div>
  </header>
    )
}
export default Header

