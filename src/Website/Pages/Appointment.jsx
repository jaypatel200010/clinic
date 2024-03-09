// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header2 from "../Components/Header2";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

function Appointment() {
  const redirect = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    if (localStorage.getItem("userid")) {
      fetch();
    } else {
      redirect("/login");
    }
  }, []);
  const fetch = async () => {
    const res = await axios.get(
      `http://localhost:3000/user/${localStorage.getItem("userid")}`
    );
    console.log(res.data);
    setData(res.data); // set data from api in data var state
  };
  const [formvalue, setFormvalue] = useState({
    id: "",
    Name: "",
    Email: "",
    Contact: "",
    Doctor: "",
    Date: "",
    Time: "",
    Problem: "",
  });

  const getform = (e) => {
    setFormvalue({
      ...formvalue,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
    console.log(formvalue);
  };

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    const res = await axios.post(
      `http://localhost:3000/appointments`,
      formvalue
    );
    //console.log(res);
    if (res.status == 201) {
      setFormvalue({
        ...formvalue,
        Name: "",
        Email: "",
        Contact: "",
        Doctor: "",
        Date: "",
        Time: "",
        Problem: "",
      });
      alert("Your appointment is confirmed");
      return false;
    }
  };

  return (
    <>
      <div>
        <Header2 title={"Appointment"} />
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
                  <form action="" method="post" onSubmit={submithandel}>
                    <div className="row g-3">
                      <div className="col-12 col-sm-6">
                        <input
                          type="text"
                          className="form-control border-0"
                          placeholder="Your Name"
                          style={{ height: 55 }}
                          name="Name"
                          value={formvalue.Name}
                          onChange={getform}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="email"
                          className="form-control border-0"
                          placeholder="Your Email"
                          style={{ height: 55 }}
                          name="Email"
                          value={formvalue.Email}
                          onChange={getform}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="text"
                          className="form-control border-0"
                          placeholder="Your Mobile"
                          style={{ height: 55 }}
                          name="Contact"
                          value={formvalue.Contact}
                          onChange={getform}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <select
                          className="form-select border-0"
                          style={{ height: 55 }}
                          name="Doctor"
                          value={formvalue.Doctor}
                          onChange={getform}
                        >
                          <option selected>Choose Doctor</option>
                          <option>Doctor 1</option>
                          <option>Doctor 2</option>
                          <option>Doctor 3</option>
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
                            className="form-control border-0"
                            placeholder="Enter Date"
                            data-target="#date"
                            style={{ height: 55 }}
                            name="Date"
                            value={formvalue.Date}
                            onChange={getform}
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
                            className="form-control border-0"
                            placeholder="Enter time 9 am to 6 pm"
                            data-target="#time"
                            style={{ height: 55 }}
                            name="Time"
                            value={formvalue.Time}
                            onChange={getform}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <textarea
                          className="form-control border-0"
                          rows={5}
                          placeholder="Describe your problem"
                          defaultValue={""}
                          name="Problem"
                          value={formvalue.Problem}
                          onChange={getform}
                        />
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100 py-3"
                          type="submit"
                        >
                          Book Appointment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Appointment End */}
        <Footer />
      </div>
    </>
  );
}

export default Appointment;
