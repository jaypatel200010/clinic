import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add_Doctors() {
  const redirect = useNavigate();
  const [data, setData] = useState({});
  useEffect(() => {
    if (localStorage.getItem("adminid")) {
      fetch();
    } else {
      redirect("/admin-login");
    }
  }, []);
  const fetch = async () => {
    const res = await axios.get(
      `http://localhost:3000/admin/${localStorage.getItem("adminid")}`
    );
    console.log(res.data);
    setData(res.data); // set data from api in data var state
  };

  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    Specialty: "",
    Hospital: "",
    contact: "",
    email: "",
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
    const res = await axios.post(`http://localhost:3000/doctor`, formvalue);
    //console.log(res);
    if (res.status == 201) {
      setFormvalue({
        ...formvalue,
        name: "",
        Specialty: "",
        Hospital: "",
        Hospital: "",
        contact: "",
        email: "",
      });
      alert("Doctor added successfully");
      return false;
    }
  };
  return (
    <>
      <div className="container mt-5">
        <h2>Add Doctor</h2>
        <form action="" method="post" onSubmit={submithandel}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              required
              name="name"
              value={formvalue.name}
              onChange={getform}
            />
          </div>
          <div className="form-group">
            <label htmlFor="specialty">Specialty:</label>
            <input
              type="text"
              className="form-control"
              id="specialty"
              placeholder="Enter specialty"
              required
              name="Specialty"
              value={formvalue.Specialty}
              onChange={getform}
            />
          </div>
          <div className="form-group">
            <label htmlFor="hospital">Hospital:</label>
            <input
              type="text"
              className="form-control"
              id="hospital"
              placeholder="Enter hospital"
              required
              name="Hospital"
              value={formvalue.Hospital}
              onChange={getform}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact:</label>
            <input
              type="tel"
              className="form-control"
              id="contact"
              placeholder="Enter contact number"
              required
              name="contact"
              value={formvalue.contact}
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
              required
              name="email"
              value={formvalue.email}
              onChange={getform}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Add_Doctors;
