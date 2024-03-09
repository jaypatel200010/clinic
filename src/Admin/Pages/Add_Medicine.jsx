import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add_Medicine() {
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
    Name: "",
    Type: "",
    Description: "",
    Manufacturer: "",
    Price: "",
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
    const res = await axios.post(`http://localhost:3000/medicine`, formvalue);
    //console.log(res);
    if (res.status == 201) {
      setFormvalue({
        ...formvalue,
        Name: "",
        Type: "",
        Description: "",
        Manufacturer: "",
        Price: "",
      });
      alert("medicine added successfully");
      return false;
    }
  };

  return (
    <>
      <div>
        <div className="container mt-5">
          <h2>Add Medicine</h2>
          <form action="" method="post" onSubmit={submithandel}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter name"
                required
                name="Name"
                value={formvalue.Name}
                onChange={getform}
              />
            </div>
            <div className="form-group">
              <label htmlFor="type">Type:</label>
              <select
                className="form-control"
                id="type"
                required
                name="Type"
                value={formvalue.Type}
                onChange={getform}
              >
                <option value>Select type</option>
                <option value="Tablet">Tablet</option>
                <option value="Capsule">Capsule</option>
                <option value="Liquid">Liquid</option>
                <option value="Injection">Injection</option>
                {/* Add more options for other types as needed */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                className="form-control"
                id="description"
                rows={3}
                placeholder="Enter description"
                required
                name="Description"
                value={formvalue.Description}
                onChange={getform}
                defaultValue={""}
              />
            </div>
            <div className="form-group">
              <label htmlFor="manufacturer">Manufacturer:</label>
              <input
                type="text"
                className="form-control"
                id="manufacturer"
                placeholder="Enter manufacturer"
                required
                name="Manufacturer"
                value={formvalue.Manufacturer}
                onChange={getform}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                className="form-control"
                id="price"
                placeholder="Enter price"
                required
                name="Price"
                value={formvalue.Price}
                onChange={getform}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Add_Medicine;
