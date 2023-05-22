import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="home" to="/">
            <button className="btn">Home</button>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/charttoppers">
                  <button className="btn">Top Charts (Link)</button>
                </Link>
              </li>
              <li className="nav-item">
                <button className="btn" onClick={() => navigate("search")}>
                  Search (Programmatical)
                </button>
              </li>
              <li className="nav-item">
                <button className="btn" onClick={() => navigate(-1)}>
                  Balik Laman (Programmatical)
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
