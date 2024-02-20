import React, { useState, useEffect } from "react";
import axios from "axios";
function Add_Services() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/categories`);
    console.log(res.data);
    setData(res.data);
  };

  const [formvalue, setFormvalue] = useState({
    id: "",
    Cate_id: "",
    Name: "",
    Description: "",
    Cost: "",
    Image: "",
    Status: "",
  });

  const getform = (e) => {
    setFormvalue({
      ...formvalue,
      id: new Date().getTime().toString(),
      status: "Available",
      [e.target.name]: e.target.value,
    });
    console.log(formvalue);
  };

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    const res = await axios.post(`http://localhost:3000/services`, formvalue);
    //console.log(res);
    if (res.status == 201) {
      setFormvalue({
        ...formvalue,
        Cate_id: "",
        Name: "",
        Service_Desc: "",
        Cost: "",
        Image: "",
        Status: "",
      });
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
              <label>Categories Name</label>
              <select
                className="form-control"
                name="Cate_id"
                value={formvalue.Cate_id}
                onChange={getform}
              >
                <option value="">
                  ------- Select Categories of Services ---------
                </option>
                {data.map((value, index, arr) => {
                  return (
                    <>
                      <option value={value.id}>{value.Cate_name}</option>
                    </>
                  );
                })}
              </select>
              <p className="help-block">Help text here.</p>
            </div>

            <div className="form-group">
              <label htmlFor="name">Service Name:</label>
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
                name="Service_Desc"
                value={formvalue.Service_Desc}
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
            <div className="form-group">
              <label htmlFor="image">Image:</label>
              <input
                type="url"
                className="form-control"
                id="image"
                placeholder="Image url"
                accept="url"
                required
                name="Image"
                value={formvalue.Image}
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
