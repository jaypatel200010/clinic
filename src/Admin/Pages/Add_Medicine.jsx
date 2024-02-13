import React from "react";

function Add_Medicine() {
  return (
    <>
      <div>
        <div className="container mt-5">
          <h2>Add Medicine</h2>
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
              <label htmlFor="type">Type:</label>
              <select className="form-control" id="type" required>
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
