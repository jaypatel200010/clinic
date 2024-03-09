import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const redirect = useNavigate();

  // Delete session
  const logout = () => {
    localStorage.removeItem("userid");
    localStorage.removeItem("uname");
    toast.success("Logout Success");
    redirect("/");
  };
  return (
    <>
      <div>
        {/* Topbar Start */}
        <div
          className="container-fluid bg-light p-0 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
              <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                <small className="fa fa-map-marker-alt text-primary me-2" />
                <small>123 Street, New York, USA</small>
              </div>
              <div className="h-100 d-inline-flex align-items-center py-3">
                <small className="far fa-clock text-primary me-2" />
                <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
              </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
              <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                <small className="fa fa-phone-alt text-primary me-2" />
                <small>+012 345 6789</small>
              </div>
              <div className="h-100 d-inline-flex align-items-center">
                <a
                  className="btn btn-sm-square rounded-circle bg-white text-primary me-1"
                  href
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-sm-square rounded-circle bg-white text-primary me-1"
                  href
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-sm-square rounded-circle bg-white text-primary me-1"
                  href
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  className="btn btn-sm-square rounded-circle bg-white text-primary me-0"
                  href
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Topbar End */}
        {/* Navbar Start */}
        <nav
          className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center px-4 px-lg-5"
          >
            <h1 className="m-0 text-primary">
              <i className="far fa-hospital me-3" />
              Klinik
            </h1>
          </Link>
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
              <NavLink to="/" className="nav-item nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-item nav-link">
                About
              </NavLink>
              <NavLink to="/services" className="nav-item nav-link">
                Service
              </NavLink>
              <div className="nav-item dropdown">
                <NavLink
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </NavLink>
                <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                  <NavLink to="/feature" className="dropdown-item">
                    Feature
                  </NavLink>
                  <NavLink to="/ourdoctor" className="dropdown-item">
                    Our Doctor
                  </NavLink>
                  <NavLink to="/appointment" className="dropdown-item">
                    Appointment
                  </NavLink>
                  <NavLink to="/testimonials" className="dropdown-item">
                    Testimonial
                  </NavLink>
                  <NavLink to="/pnp" className="dropdown-item">
                    404 Page
                  </NavLink>
                </div>
              </div>
              <NavLink to="/contact" className="nav-item nav-link">
                Contact
              </NavLink>
              <NavLink to="/feedback" className="nav-item nav-link">
                Feedback
              </NavLink>
            </div>

            {(() => {
              //  Use  session
              if (localStorage.getItem("userid")) {
                return (
                  <NavLink
                    to="/appointment"
                    className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
                  >
                    Appointment
                    <i className="fa fa-arrow-right ms-3" />
                  </NavLink>
                );
              }
            })()}
            {(() => {
              //  Use  session
              if (localStorage.getItem("userid")) {
                return (
                  <NavLink to="/profile" className="nav-item nav-link">
                    Hi .. {localStorage.getItem("uname")}
                  </NavLink>
                );
              }
            })()}
          </div>
          {(() => {
            if (localStorage.getItem("userid")) {
              return (
                <>
                  <a
                    href="javascript:void(0)"
                    onClick={logout}
                    className="btn btn-danger rounded-0 py-4 px-lg-5 d-none d-lg-block"
                  >
                    Logout
                  </a>
                </>
              );
            } else {
              return (
                <>
                  <NavLink
                    to="/login"
                    className="btn btn-danger rounded-0 py-4 px-lg-5 d-none d-lg-block"
                  >
                    LOG IN
                  </NavLink>
                </>
              );
            }
          })()}
        </nav>
        {/* Navbar End */}
      </div>
    </>
  );
}

export default Navbar;
