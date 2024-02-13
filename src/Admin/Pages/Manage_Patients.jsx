import React from "react";

function Manage_Patients() {
  return (
    <>
      <div>
        <div className="container mt-5">
          <h2>Manage Patients</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>35</td>
                <td>Male</td>
                <td>123 Main Street, City</td>
                <td>123-456-7890</td>
                <td>jay@gmail.com</td>
                <td>
                  <button className="btn btn-sm btn-primary">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
              {/* Add more rows for additional patients as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Manage_Patients;
