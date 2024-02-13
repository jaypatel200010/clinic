import React from "react";

function Manage_Services() {
  return (
    <>
      <div>
        <div className="container mt-5">
          <h2>Manage Medical Services</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Cost</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Service A</td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </td>
                <td>$100</td>
                <td>
                  <button className="btn btn-sm btn-primary">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>

              {/* Add more rows for additional medical services as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Manage_Services;
