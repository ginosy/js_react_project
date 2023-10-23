import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item nav-link active">
              <NavLink class="nav-link active" aria-current="page" to="/">
                About
              </NavLink>
            </li>
            <li class="nav-item nav-link">
              <NavLink class="nav-link" to="/todo">
                Todo
              </NavLink>
            </li>
            <li class="nav-item nav-link">
              <NavLink class="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
