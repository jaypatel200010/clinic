import React from "react";
import { Link, NavLink } from "react-router-dom";

function Aheader() {
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <NavLink
            to="/dashboard"
            className="navbar-brand d-flex align-items-center px-4 px-lg-5"
          >
            <h1 className="m-0 text-primary">
              <i className="far fa-hospital me-3" />
              Klinik
            </h1>
          </NavLink>
          <button
            type="button"
            className="navbar-toggler me-4"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <NavLink to="/dashboard" className="nav-item nav-link">
                Dashboard
              </NavLink>

              <div className="nav-item dropdown">
                <NavLink
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Doctors
                </NavLink>
                <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                  <NavLink to="/add-doctors" className="dropdown-item">
                    Add
                  </NavLink>
                  <NavLink to="/manage-doctors" className="dropdown-item">
                    Manage
                  </NavLink>
                </div>
              </div>

              <div className="nav-item dropdown">
                <NavLink
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Medicines
                </NavLink>
                <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                  <NavLink to="/add-medicine" className="dropdown-item">
                    Add
                  </NavLink>
                  <NavLink to="/manage-medicine" className="dropdown-item">
                    Manage
                  </NavLink>
                </div>
              </div>
              {/* <div className="nav-item dropdown">
                <NavLink
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Supplies
                </NavLink>
                <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                  <NavLink to="/add-supplies" className="dropdown-item">
                    Add
                  </NavLink>
                  <NavLink to="/manage-supplies" className="dropdown-item">
                    Manage
                  </NavLink>
                </div>
              </div> */}
              <NavLink to="/manage-user" className="nav-item nav-link">
                User
              </NavLink>
              <div className="nav-item dropdown">
                <NavLink
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Categories
                </NavLink>
                <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                  <NavLink to="/add-categories" className="dropdown-item">
                    Add
                  </NavLink>
                  <NavLink to="/manage-categories" className="dropdown-item">
                    Manage
                  </NavLink>
                </div>
              </div>
              <div className="nav-item dropdown">
                <NavLink
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Services
                </NavLink>
                <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                  <NavLink to="/add-services" className="dropdown-item">
                    Add
                  </NavLink>
                  <NavLink to="/manage-services" className="dropdown-item">
                    Manage
                  </NavLink>
                </div>
              </div>
              <NavLink to="/manage-patients" className="nav-item nav-link">
                Patients
              </NavLink>
              <NavLink to="/manage-feedbacks" className="nav-item nav-link">
                Feedback
              </NavLink>
              <NavLink to="/manage-appointments" className="nav-item nav-link">
                Appointments
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Aheader;
