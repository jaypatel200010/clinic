import axios from "axios";
import React, { useState, useEffect } from "react";
import Header2 from "../Components/Header2";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const redirect = useNavigate(); // redirect any routes

  const [formvalue, setFormvalue] = useState({
    email: "",
    password: "",
  });

  const getform = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  };

  const validation = () => {
    var result = true;

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
    return result;
  };

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    if (validation()) {
      const res = await axios.get(
        `http://localhost:3000/user?email=${formvalue.email}`
      );
      console.log(res);
      if (res.data.length > 0) {
        if (res.data[0].password == formvalue.password) {
          toast.success("Login Success");
          redirect("/");
        } else {
          toast.error("Password incorrect");
          return false;
        }
      } else {
        toast.error("Email does not Exist");
        return false;
      }
    }
  };

  return (
    <div>
      <Header2 />
      <div className="container mt-5">
        <h2>Login</h2>
        <form action="" method="post" onSubmit={submithandel}>
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
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <Link to="/signup">If you not Registered then Register Here</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
