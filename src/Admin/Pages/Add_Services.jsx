import React from "react";

function Add_Services() {
  return (
    <>
      <div>
        <div className="container mt-5">
          <h2>Add Medical Service</h2>
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
              <label htmlFor="cost">Cost:</label>
              <input
                type="number"
                className="form-control"
                id="cost"
                placeholder="Enter cost"
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

export default Add_Services;
