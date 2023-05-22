import React from "react";
import { Routes, Route, NavLink, Link, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import './ViewTops.css'

function ViewTops(props) {
  return (
    <div>
      <h1 style={{ color: "white" }}>Top 20 Movies/Indo Series</h1>
      <div className="d-flex justify-content-center flex-row gap-2">
        <NavLink to="populerfilm">
          <button className="btn btn-secondary">Film Populer (Link)</button>
        </NavLink>
        <NavLink to="populertv">
          <button className="btn btn-secondary">Serial Indo (NavLink)</button>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default ViewTops;
