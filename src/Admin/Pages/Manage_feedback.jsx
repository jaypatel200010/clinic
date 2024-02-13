import React from "react";

function Manage_feedback() {
  return (
    <>
      <div>
        <div className="container mt-5">
          <h2>Manage Feedbacks</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Feedback</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>john.doe@example.com</td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </td>
                <td>
                  <button className="btn btn-sm btn-primary">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
              {/* Add more rows for additional feedbacks as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Manage_feedback;
