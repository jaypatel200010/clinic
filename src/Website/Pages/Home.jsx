import React from "react";
import Header1 from "../Components/Header1";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <Header1 />
        {/* About Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="d-flex flex-column">
                  <img
                    className="img-fluid rounded w-75 align-self-end"
                    src="website/img/about-1.jpg"
                    alt
                  />
                  <img
                    className="img-fluid rounded w-50 bg-white pt-3 pe-3"
                    src="website/img/about-2.jpg"
                    alt
                    style={{ marginTop: "-25%" }}
                  />
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <p className="d-inline-block border rounded-pill py-1 px-4">
                  About Us
                </p>
                <h1 className="mb-4">
                  Why You Should Trust Us? Get Know About Us!
                </h1>
                <p>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <p className="mb-4">
                  Stet no et lorem dolor et diam, amet duo ut dolore vero eos.
                  No stet est diam rebum amet diam ipsum. Clita clita labore,
                  dolor duo nonumy clita sit at, sed sit sanctus dolor eos.
                </p>
                <p>
                  <i className="far fa-check-circle text-primary me-3" />
                  Quality health care
                </p>
                <p>
                  <i className="far fa-check-circle text-primary me-3" />
                  Only Qualified Doctors
                </p>
                <p>
                  <i className="far fa-check-circle text-primary me-3" />
                  Medical Research Professionals
                </p>
                <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Service Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 600 }}
            >
              <p className="d-inline-block border rounded-pill py-1 px-4">
                Services
              </p>
              <h1>Health Care Solutions</h1>
            </div>
            <div className="row g-4">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item bg-light rounded h-100 p-5">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                    style={{ width: 65, height: 65 }}
                  >
                    <i className="fa fa-heartbeat text-primary fs-4" />
                  </div>
                  <h4 className="mb-3">Cardiology</h4>
                  <p className="mb-4">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet.
                  </p>
                  <a className="btn" href>
                    <i className="fa fa-plus text-primary me-3" />
                    Read More
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item bg-light rounded h-100 p-5">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                    style={{ width: 65, height: 65 }}
                  >
                    <i className="fa fa-x-ray text-primary fs-4" />
                  </div>
                  <h4 className="mb-3">Pulmonary</h4>
                  <p className="mb-4">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet.
                  </p>
                  <a className="btn" href>
                    <i className="fa fa-plus text-primary me-3" />
                    Read More
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="service-item bg-light rounded h-100 p-5">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                    style={{ width: 65, height: 65 }}
                  >
                    <i className="fa fa-brain text-primary fs-4" />
                  </div>
                  <h4 className="mb-3">Neurology</h4>
                  <p className="mb-4">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet.
                  </p>
                  <a className="btn" href>
                    <i className="fa fa-plus text-primary me-3" />
                    Read More
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item bg-light rounded h-100 p-5">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                    style={{ width: 65, height: 65 }}
                  >
                    <i className="fa fa-wheelchair text-primary fs-4" />
                  </div>
                  <h4 className="mb-3">Orthopedics</h4>
                  <p className="mb-4">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet.
                  </p>
                  <a className="btn" href>
                    <i className="fa fa-plus text-primary me-3" />
                    Read More
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item bg-light rounded h-100 p-5">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                    style={{ width: 65, height: 65 }}
                  >
                    <i className="fa fa-tooth text-primary fs-4" />
                  </div>
                  <h4 className="mb-3">Dental Surgery</h4>
                  <p className="mb-4">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet.
                  </p>
                  <a className="btn" href>
                    <i className="fa fa-plus text-primary me-3" />
                    Read More
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="service-item bg-light rounded h-100 p-5">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                    style={{ width: 65, height: 65 }}
                  >
                    <i className="fa fa-vials text-primary fs-4" />
                  </div>
                  <h4 className="mb-3">Laboratory</h4>
                  <p className="mb-4">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet.
                  </p>
                  <a className="btn" href>
                    <i className="fa fa-plus text-primary me-3" />
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}
        {/* Feature Start */}
        <div className="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
          <div className="container feature px-lg-0">
            <div className="row g-0 mx-lg-0">
              <div
                className="col-lg-6 feature-text py-5 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div className="p-lg-5 ps-lg-0">
                  <p className="d-inline-block border rounded-pill text-light py-1 px-4">
                    Features
                  </p>
                  <h1 className="text-white mb-4">Why Choose Us</h1>
                  <p className="text-white mb-4 pb-2">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo erat amet
                  </p>
                  <div className="row g-4">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div
                          className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                          style={{ width: 55, height: 55 }}
                        >
                          <i className="fa fa-user-md text-primary" />
                        </div>
                        <div className="ms-4">
                          <p className="text-white mb-2">Experience</p>
                          <h5 className="text-white mb-0">Doctors</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div
                          className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                          style={{ width: 55, height: 55 }}
                        >
                          <i className="fa fa-check text-primary" />
                        </div>
                        <div className="ms-4">
                          <p className="text-white mb-2">Quality</p>
                          <h5 className="text-white mb-0">Services</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div
                          className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                          style={{ width: 55, height: 55 }}
                        >
                          <i className="fa fa-comment-medical text-primary" />
                        </div>
                        <div className="ms-4">
                          <p className="text-white mb-2">Positive</p>
                          <h5 className="text-white mb-0">Consultation</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div
                          className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                          style={{ width: 55, height: 55 }}
                        >
                          <i className="fa fa-headphones text-primary" />
                        </div>
                        <div className="ms-4">
                          <p className="text-white mb-2">24 Hours</p>
                          <h5 className="text-white mb-0">Support</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 pe-lg-0 wow fadeIn"
                data-wow-delay="0.5s"
                style={{ minHeight: 400 }}
              >
                <div className="position-relative h-100">
                  <img
                    className="position-absolute img-fluid w-100 h-100"
                    src="website/img/feature.jpg"
                    style={{ objectFit: "cover" }}
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feature End */}
        {/* Team Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 600 }}
            >
              <p className="d-inline-block border rounded-pill py-1 px-4">
                Doctors
              </p>
              <h1>Our Experience Doctors</h1>
            </div>
            <div className="row g-4">
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="team-item position-relative rounded overflow-hidden">
                  <div className="overflow-hidden">
                    <img
                      className="img-fluid"
                      src="website/img/team-1.jpg"
                      alt
                    />
                  </div>
                  <div className="team-text bg-light text-center p-4">
                    <h5>Doctor Name</h5>
                    <p className="text-primary">Department</p>
                    <div className="team-social text-center">
                      <a className="btn btn-square" href>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-square" href>
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-square" href>
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="team-item position-relative rounded overflow-hidden">
                  <div className="overflow-hidden">
                    <img
                      className="img-fluid"
                      src="website/img/team-2.jpg"
                      alt
                    />
                  </div>
                  <div className="team-text bg-light text-center p-4">
                    <h5>Doctor Name</h5>
                    <p className="text-primary">Department</p>
                    <div className="team-social text-center">
                      <a className="btn btn-square" href>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-square" href>
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-square" href>
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="team-item position-relative rounded overflow-hidden">
                  <div className="overflow-hidden">
                    <img
                      className="img-fluid"
                      src="website/img/team-3.jpg"
                      alt
                    />
                  </div>
                  <div className="team-text bg-light text-center p-4">
                    <h5>Doctor Name</h5>
                    <p className="text-primary">Department</p>
                    <div className="team-social text-center">
                      <a className="btn btn-square" href>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-square" href>
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-square" href>
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="team-item position-relative rounded overflow-hidden">
                  <div className="overflow-hidden">
                    <img
                      className="img-fluid"
                      src="website/img/team-4.jpg"
                      alt
                    />
                  </div>
                  <div className="team-text bg-light text-center p-4">
                    <h5>Doctor Name</h5>
                    <p className="text-primary">Department</p>
                    <div className="team-social text-center">
                      <a className="btn btn-square" href>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-square" href>
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-square" href>
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */}
        {/* Appointment Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <p className="d-inline-block border rounded-pill py-1 px-4">
                  Appointment
                </p>
                <h1 className="mb-4">
                  Make An Appointment To Visit Our Doctor
                </h1>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <div className="bg-light rounded d-flex align-items-center p-5 mb-4">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                    style={{ width: 55, height: 55 }}
                  >
                    <i className="fa fa-phone-alt text-primary" />
                  </div>
                  <div className="ms-4">
                    <p className="mb-2">Call Us Now</p>
                    <h5 className="mb-0">+012 345 6789</h5>
                  </div>
                </div>
                <div className="bg-light rounded d-flex align-items-center p-5">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                    style={{ width: 55, height: 55 }}
                  >
                    <i className="fa fa-envelope-open text-primary" />
                  </div>
                  <div className="ms-4">
                    <p className="mb-2">Mail Us Now</p>
                    <h5 className="mb-0">info@example.com</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="bg-light rounded h-100 d-flex align-items-center p-5">
                  {/* <form>
                    <div className="row g-3">
                      <div className="col-12 col-sm-6">
                        <input
                          type="text"
                          className="form-control border-0"
                          placeholder="Your Name"
                          style={{ height: 55 }}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="email"
                          className="form-control border-0"
                          placeholder="Your Email"
                          style={{ height: 55 }}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="text"
                          className="form-control border-0"
                          placeholder="Your Mobile"
                          style={{ height: 55 }}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <select
                          className="form-select border-0"
                          style={{ height: 55 }}
                        >
                          <option selected>Choose Doctor</option>
                          <option value={1}>Doctor 1</option>
                          <option value={2}>Doctor 2</option>
                          <option value={3}>Doctor 3</option>
                        </select>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div
                          className="date"
                          id="date"
                          data-target-input="nearest"
                        >
                          <input
                            type="text"
                            className="form-control border-0 datetimepicker-input"
                            placeholder="Choose Date"
                            data-target="#date"
                            data-toggle="datetimepicker"
                            style={{ height: 55 }}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div
                          className="time"
                          id="time"
                          data-target-input="nearest"
                        >
                          <input
                            type="text"
                            className="form-control border-0 datetimepicker-input"
                            placeholder="Choose Date"
                            data-target="#time"
                            data-toggle="datetimepicker"
                            style={{ height: 55 }}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <textarea
                          className="form-control border-0"
                          rows={5}
                          placeholder="Describe your problem"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-12">
                        
                      </div>
                    </div>
                  </form> */}
                  <Link
                    className="btn btn-primary w-100 py-3"
                    to="/appointment"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Appointment End */}
        {/* Testimonial Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 600 }}
            >
              <p className="d-inline-block border rounded-pill py-1 px-4">
                Testimonial
              </p>
              <h1>What Say Our Patients!</h1>
            </div>
            <div
              className="owl-carousel testimonial-carousel wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                  src="website/img/testimonial-1.jpg"
                  style={{ width: 100, height: 100 }}
                />
                <div className="testimonial-text rounded text-center p-4">
                  <p>
                    Clita clita tempor justo dolor ipsum amet kasd amet duo
                    justo duo duo labore sed sed. Magna ut diam sit et amet stet
                    eos sed clita erat magna elitr erat sit sit erat at rebum
                    justo sea clita.
                  </p>
                  <h5 className="mb-1">Patient Name</h5>
                  <span className="fst-italic">Profession</span>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                  src="website/img/testimonial-2.jpg"
                  style={{ width: 100, height: 100 }}
                />
                <div className="testimonial-text rounded text-center p-4">
                  <p>
                    Clita clita tempor justo dolor ipsum amet kasd amet duo
                    justo duo duo labore sed sed. Magna ut diam sit et amet stet
                    eos sed clita erat magna elitr erat sit sit erat at rebum
                    justo sea clita.
                  </p>
                  <h5 className="mb-1">Patient Name</h5>
                  <span className="fst-italic">Profession</span>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                  src="website/img/testimonial-3.jpg"
                  style={{ width: 100, height: 100 }}
                />
                <div className="testimonial-text rounded text-center p-4">
                  <p>
                    Clita clita tempor justo dolor ipsum amet kasd amet duo
                    justo duo duo labore sed sed. Magna ut diam sit et amet stet
                    eos sed clita erat magna elitr erat sit sit erat at rebum
                    justo sea clita.
                  </p>
                  <h5 className="mb-1">Patient Name</h5>
                  <span className="fst-italic">Profession</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
