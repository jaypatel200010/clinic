import React from "react";
import Footer from "../Components/Footer";
import Header2 from "../Components/Header2";

function About() {
  return (
    <>
      <div>
        <Header2 title={"login"} />
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
        <Footer />
        {/* <Link
          to="#"
          className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
        >
          <i className="bi bi-arrow-up" />
        </Link> */}
      </div>
    </>
  );
}

export default About;
