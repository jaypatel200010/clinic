import React from "react";

function Manage_Appointments() {
  return (
    <>
      <div className="container mt-5">
        <h2>Manage Appointments</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Problem Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>john.doe@example.com</td>
              <td>123-456-7890</td>
              <td>Dr. Smith</td>
              <td>2024-02-07</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td>
                <button className="btn btn-sm btn-primary">Edit</button>
                <button className="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
            {/* Add more rows for additional appointments as needed */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Manage_Appointments;
