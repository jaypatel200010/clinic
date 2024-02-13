import React from "react";

function Manage_Doctors() {
  return (
    <>
      <div className="container mt-5">
        <h2>Manage Doctors</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Hospital</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Action</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Dr. John Doe</td>
              <td>Cardiology</td>
              <td>Main Hospital</td>
              <td>123-456-7890</td>
              <td>john.doe@example.com</td>
              <td>
                <button className="btn btn-sm btn-primary">Edit</button>
                <button className="btn btn-sm btn-danger">Delete</button>
              </td>
              <td>Unblock</td>
            </tr>

            {/* Add more rows for additional doctors as needed */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Manage_Doctors;
