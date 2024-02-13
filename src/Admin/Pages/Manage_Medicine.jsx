import React from "react";

function Manage_Medicine() {
  return (
    <>
      <div>
        <div className="container mt-5">
          <h2>Manage Medicines</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
                <th>Manufacturer</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Medicine A</td>
                <td>Tablet</td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </td>
                <td>Manufacturer X</td>
                <td>$10</td>
                <td>
                  <button className="btn btn-sm btn-primary">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>

              {/* Add more rows for additional medicines as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Manage_Medicine;
