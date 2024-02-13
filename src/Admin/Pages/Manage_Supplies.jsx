import React from "react";

function Manage_Supplies() {
  return (
    <>
      <div>
        <div className="container mt-5">
          <h2>Manage Medical Supplies</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Supply A</td>
                <td>Category X</td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </td>
                <td>100</td>
                <td>$50</td>
                <td>
                  <button className="btn btn-sm btn-primary">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>

              {/* Add more rows for additional medical supplies as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Manage_Supplies;
