import React, { useState } from "react";
import axios from "axios";
function Add_Supplies() {
  const [formvalue, setFormvalue] = useState({
    id: "",
    Name: "",
    Category: "",
    Description: "",
    Quantity: "",
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
    const res = await axios.post(`http://localhost:3000/supplies`, formvalue);
    //console.log(res);
    if (res.status == 201) {
      setFormvalue({
        ...formvalue,
        Name: "",
        Category: "",
        Description: "",
        Quantity: "",
        Price: "",
      });
      alert("Spplies added successfully");
      return false;
    }
  };

  return (
    <>
      <div>
        <div className="container mt-5">
          <h2>Add Medical Supply</h2>
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
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                className="form-control"
                id="category"
                placeholder="Enter category"
                required
                name="Category"
                value={formvalue.Category}
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
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                placeholder="Enter quantity"
                required
                name="Quantity"
                value={formvalue.Quantity}
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

export default Add_Supplies;
