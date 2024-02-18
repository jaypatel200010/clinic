import React, { useState } from "react";
import axios from "axios";
import Header2 from "../Components/Header2";
import Footer from "../Components/Footer";

function Feedback() {
  const [formvalue, setFormvalue] = useState({
    id: "",
    Name: "",
    Email: "",
    Feedback: "",
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
    const res = await axios.post(`http://localhost:3000/feedback`, formvalue);
    //console.log(res);
    if (res.status == 201) {
      setFormvalue({
        ...formvalue,
        Name: "",
        Email: "",
        Feedback: "",
      });
      alert("Thanks for your valuable feedback.");
      return false;
    }
  };
  return (
    <div>
      <Header2 title={"Feedback"} />
      <div className="col-lg-12 wow fadeIn" data-wow-delay="0.1s">
        <div className="bg-light rounded p-5">
          <p className="d-inline-block border rounded-pill py-1 px-4">
            Feedback
          </p>
          <h1 className="mb-4">Please give us your valuable feedback.</h1>
          <p className="mb-4">It helps us improve our services.</p>
          <form action="" method="post" onSubmit={submithandel}>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="Name"
                    value={formvalue.Name}
                    onChange={getform}
                    placeholder="Your Name"
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    name="Email"
                    value={formvalue.Email}
                    onChange={getform}
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Feedback"
                    id="Feedback"
                    style={{ height: 100 }}
                    defaultValue={""}
                    name="Feedback"
                    value={formvalue.Feedback}
                    onChange={getform}
                  />
                  <label htmlFor="message">Feedback</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">
                  Submit Feedback
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Feedback;
