import React from "react";
import "./bootstrap.css";
import "./style.css";
import {Link , NavLink} from "react-router-dom";

//import "./bootstrap";

const Nav = ()=>{
	return(
		<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Logo</a>
    <ul className="navbar-nav">
        <NavLink  className="nav-link" exact to="/">Home</NavLink>
        <NavLink className="nav-link" to="/about">About</NavLink>
        <NavLink   className="nav-link" to="/blog">Blog</NavLink>
    </ul>
</nav>
</div>

		)
}

export default Nav;