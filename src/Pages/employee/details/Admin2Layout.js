import { Link, Outlet } from "react-router-dom";
import React from "react";
function Admin2Layout() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <p className="navbar-brand">EmpDetail App</p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/employee/details/list">
                  EmpDetail List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/employee/details/add">
                  EmpDetail Add
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
export default Admin2Layout;
