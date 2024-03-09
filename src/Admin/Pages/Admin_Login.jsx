import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Admin_Login() {
  useEffect(() => {
    if (localStorage.getItem("adminid")) {
      redirect("/dashboard");
    }
  }, []);

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
        `http://localhost:3000/admin?email=${formvalue.email}`
      );
      console.log(res);
      if (res.data.length > 0) {
        if (res.data[0].password == formvalue.password) {
          // create session
          localStorage.setItem("adminid", res.data[0].id);
          localStorage.setItem("adminname", res.data[0].name);

          toast.success("Login Success");
          redirect("/dashboard");
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
      <div className="container mt-5">
        <h2>Admin Login</h2>
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
          <button type="submit" className="btn btn-primary mt-3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin_Login;
