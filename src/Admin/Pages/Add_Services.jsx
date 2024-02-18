import React, { useState } from "react";
import axios from "axios";
function Add_Services() {
  const [formvalue, setFormvalue] = useState({
    id: "",
    Name: "",
    Description: "",
    Cost: "",
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
    const res = await axios.post(`http://localhost:3000/services`, formvalue);
    //console.log(res);
    if (res.status == 201) {
      setFormvalue({ ...formvalue, Name: "", Description: "", cost: "" });
      alert("service added successfully");
      return false;
    }
  };

  return (
    <>
      <div>
        <div className="container mt-5">
          <h2>Add Medical Service</h2>
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
              <label htmlFor="cost">Cost:</label>
              <input
                type="number"
                className="form-control"
                id="cost"
                placeholder="Enter cost"
                required
                name="Cost"
                value={formvalue.Cost}
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

export default Add_Services;
