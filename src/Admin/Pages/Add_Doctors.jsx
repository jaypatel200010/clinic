import React from "react";

function Add_Doctors() {
  return (
    <>
      <div className="container mt-5">
        <h2>Add Doctor</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              required
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
