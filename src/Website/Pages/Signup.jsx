import axios from "axios";
import React, { useState, useEffect } from "react";
import Header2 from "../Components/Header2";
import Footer from "../Components/Footer";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Signup() {
  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    password: "",
    status: "",
  });

  const getform = (e) => {
    setFormvalue({
      ...formvalue,
      id: new Date().getTime().toString(),
      status: "Unblock",
      [e.target.name]: e.target.value,
    });
    console.log(formvalue);
  };

  const validation = () => {
    var result = true;
    if (formvalue.name == "") {
      toast.error("Name Field is required");
      result = false;
      return false;
    }
    if (formvalue.email == "") {
      toast.error("Email Field is required");
      result = false;
      return false;
    }
    if (formvalue.password == "") {
      toast.error("Password Field is required");
      result = false;
      return false;
    }
    if (formvalue.mobile == "") {
      toast.error("Mobile Field is required");
      result = false;
      return false;
    }
    return result;
  };

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    if (validation()) {
      const res = await axios.post(`http://localhost:3000/user`, formvalue);
      //console.log(res);
      if (res.status == 201) {
        setFormvalue({
          ...formvalue,
          name: "",
          email: "",
          password: "",
          mobile: "",
        });
        toast.success("Signup success");
        return false;
      }
    }
  };

  return (
    <div>
      <Header2 title={"signup"} />
      <div className="container mt-5">
        <h2>Signup</h2>
        <form action="" method="post" onSubmit={submithandel}>
          <div className="form-group">
            <label htmlFor="clinicName">Name:</label>
            <input
              type="text"
              className="form-control"
              id="clinicName"
              placeholder="Enter clinic name"
              name="name"
              value={formvalue.name}
              onChange={getform}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              value={formvalue.email}
              onChange={getform}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              name="password"
              value={formvalue.password}
              onChange={getform}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Mobile">Mobile:</label>
            <input
              type="number"
              className="form-control"
              id="mobile"
              placeholder="Enter mobile"
              name="mobile"
              value={formvalue.mobile}
              onChange={getform}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Signup
          </button>
          <Link to="/login">If you already Registered then Login Here</Link>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
